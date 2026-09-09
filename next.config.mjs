/** @type {import('next').NextConfig} */
const nextConfig = {
  // sharp is only used by a local build script (scripts/generate-og-image.mjs),
  // never imported by app code. Without this, Next's file tracer was bundling
  // sharp's native binaries into every serverless function output, ballooning
  // Vercel "Functions Storage" usage across ~160 functions per deployment.
  outputFileTracingExcludes: {
    "*": ["node_modules/sharp/**", "node_modules/@img/**"],
  },
};

export default nextConfig;
