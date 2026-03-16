import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PageMeta {
  title: string;
  description?: string;
  canonical?: string;
  robots?: string;
}

export const setPageMeta = (meta: PageMeta): void => {
  // Set page title
  if (meta.title) {
    document.title = meta.title;
  }

  // Set meta description
  if (meta.description) {
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute("content", meta.description);
    } else {
      const newDescTag = document.createElement("meta");
      newDescTag.name = "description";
      newDescTag.content = meta.description; // ✅ correctly reads the parameter
      document.head.appendChild(newDescTag);
    }
  }

  // Set canonical URL
  if (meta.canonical) {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", meta.canonical);
    } else {
      const newCanonicalLink = document.createElement("link");
      newCanonicalLink.rel = "canonical";
      newCanonicalLink.href = meta.canonical;
      document.head.appendChild(newCanonicalLink);
    }
  }

  // Set robots meta tag
  if (meta.robots) {
    const robotsTag = document.querySelector('meta[name="robots"]');
    if (robotsTag) {
      robotsTag.setAttribute("content", meta.robots);
    } else {
      const newRobotsTag = document.createElement("meta");
      newRobotsTag.name = "robots";
      newRobotsTag.content = meta.robots; // ✅ correctly reads the parameter
      document.head.appendChild(newRobotsTag);
    }
  }
};

// Add this new function for JSON-LD structured data
export const injectJsonLd = (jsonLd: object): void => {
  // Remove any existing JSON-LD script tags
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"]'
  );
  existingScripts.forEach((script) => script.remove());

  // Create and inject the new JSON-LD script
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
};

// Helper function for blog post JSON-LD
export const createBlogPostJsonLd = (
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
  authorName: string,
  authorUrl?: string,
  imageUrl?: string
): object => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorUrl && { url: authorUrl }),
    },
    ...(imageUrl && { image: imageUrl }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
};

// Helper function for website JSON-LD
export const createWebsiteJsonLd = (
  name: string,
  url: string,
  description?: string
): object => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    url: url,
    ...(description && { description: description }),
  };
};