export default {
  spec: "./openapi_with_overlays.yaml",
  output: {
    pageOutDir: "./docs/api",
    framework: "docusaurus",
  },
  display: {
    visibleResponses: "success",
  },
  codeSamples: [
    {
      language: "typescript",
      sdkTarballPath: "./sdks/mistral-typescript.tar.gz",
      tryItNow: {
        outDir: "./static/try-it-now/deps.js",
        urlPrefix: "/try-it-now/deps.js",
      },
    },
    {
      language: "python",
      sdkTarballPath: "./sdks/mistral-python.tar.gz",
    },
    {
      language: "curl",
    },
  ],
};
