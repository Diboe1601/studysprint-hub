import 'dotenv/config';
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { IncomingMessage, ServerResponse } from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  publicDir: "public",
  build: {
    copyPublicDir: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "development" && ({
      name: "dev-contact-api",
      configureServer(server: ViteDevServer) {
        server.middlewares.use("/api/send-contact-email", (req: IncomingMessage, res: ServerResponse) => {
          if (req.method !== "POST") {
            res.statusCode = 405;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Method Not Allowed" }));
            return;
          }

          let body = "";
          req.on("data", (chunk: Buffer) => {
            body += chunk;
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

              const isAscii = (s: string) => {
                for (let i = 0; i < s.length; i++) if (s.charCodeAt(i) > 0x7f) return false;
                return true;
              };
              if (!isAscii(apiKey)) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    error:
                      "RESEND_API_KEY contains non-ASCII characters. Please copy a valid ASCII-only key from the Resend dashboard.",
                  }),
                );
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
                  to: "studysprint.official24@gmail.com",
                  reply_to: email,
                  subject: `[Contact] ${subject}`,
                  html,
                }),
              });

              const dataText = await resp.text();
              const data = dataText ? JSON.parse(dataText) : null;

              res.statusCode = resp.status;
              res.setHeader("Content-Type", "application/json");
              if (!resp.ok) {
                const errMsg =
                  (data && data.error && (data.error.message || data.error)) ||
                  (data && data.message) ||
                  "Failed to send email";
                res.end(
                  JSON.stringify({ error: errMsg, status: resp.status, details: data || dataText })
                );
                return;
              }
              res.end(JSON.stringify({ id: (data && data.id) || null }));
            } catch (error) {
              const message = error instanceof Error ? error.message : "Unexpected error";
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: message }));
            }
          });
        });
      },
    } as Plugin)
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


