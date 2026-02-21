import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger"; // assuming this is installed
import type { IncomingMessage, ServerResponse } from "http";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: {
      host: true,          // Shorthand for "::" / 0.0.0.0 (all interfaces)
      port: 8080,
    },

    // No need for publicDir or build.copyPublicDir (both default)

    plugins: [
      react(),

      // Your custom dev tools (conditional)
      isDev && componentTagger(),

      // Custom API proxy for contact form (dev only)
      isDev && ({
        name: "dev-contact-api",
        configureServer(server: ViteDevServer) {
          server.middlewares.use("/api/send-contact-email", (req: IncomingMessage, res: ServerResponse, next) => {
            if (req.method !== "POST") {
              res.statusCode = 405;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Method Not Allowed" }));
              return;
            }

            let body = "";
            req.on("data", (chunk: Buffer) => {
              body += chunk.toString();
            });

            req.on("end", async () => {
              try {
                const parsed = JSON.parse(body || "{}");
                const { name, email, subject, message } = parsed;

                if (!name || !email || !subject || !message) {
                  res.statusCode = 400;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ error: "Missing required fields" }));
                  return;
                }

                const apiKey = process.env.RESEND_API_KEY;
                if (!apiKey) {
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ error: "RESEND_API_KEY is not configured" }));
                  return;
                }

                // Optional: stricter key validation (Resend keys start with 're_')
                if (!apiKey.startsWith("re_")) {
                  res.statusCode = 400;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ error: "Invalid RESEND_API_KEY format" }));
                  return;
                }

                const escapeHtml = (input: string) =>
                  String(input)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;");

                const html = `
                  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2 style="margin:0 0 12px 0;">New Contact Message</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
                    <p><strong>Message:</strong></p>
                    <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
                  </div>
                `;

                const resp = await fetch("https://api.resend.com/emails", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                  },
                  body: JSON.stringify({
                    from: "StudySprint Hub <onboarding@resend.dev>",
                    to: ["studysprint.official24@gmail.com"],
                    reply_to: email,
                    subject: `[Contact] ${subject}`,
                    html,
                  }),
                });

                const data = await resp.json().catch(() => null);

                res.statusCode = resp.status;
                res.setHeader("Content-Type", "application/json");

                if (!resp.ok) {
                  const errMsg = data?.error?.message || data?.message || "Failed to send email";
                  res.end(JSON.stringify({ error: errMsg, status: resp.status, details: data }));
                  return;
                }

                res.end(JSON.stringify({ success: true, id: data?.id || null }));
              } catch (error) {
                console.error("Contact API error:", error);
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Internal server error" }));
              }
            });
          });
        },
      } satisfies Plugin),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});