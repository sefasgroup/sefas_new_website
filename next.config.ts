import type { NextConfig } from "next";

const production = process.env.NODE_ENV === "production";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${production ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://sefasgroup.com https://tiles.openfreemap.org",
  "media-src 'self'",
  "font-src 'self'",
  "connect-src 'self' https://tiles.openfreemap.org",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Content-Security-Policy-Report-Only", value: csp },
  ...(process.env.ROBOTS_NOINDEX === "1" ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : []),
  ...(production ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }] : []),
];

const assetCache = [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }];

const nextConfig: NextConfig = {
  output: process.env.VERCEL ? undefined : "standalone",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "sefasgroup.com", pathname: "/**" }],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      ...["/images", "/videos", "/vendor"].map((dir) => ({ source: `${dir}/:path*`, headers: assetCache })),
    ];
  },
  async redirects() {
    return [{ source: "/career", destination: "https://career.sefasgroup.com/", permanent: false }];
  },
};

export default nextConfig;
