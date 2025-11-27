const config = {
  providers: [
    {
      // Replace with your own Clerk Issuer URL from your "convex" JWT template
      // or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
      // and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};

export default config;
// Also provide CommonJS export for environments that use require()
// (some Convex tooling may load this file with CommonJS)
// Guard access to `module` so this file can be loaded as ESM without
// throwing a ReferenceError when `module` is undefined.
if (typeof module !== "undefined" && module.exports) {
  module.exports = config;
}