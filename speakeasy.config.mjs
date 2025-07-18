export default {
  spec: "./openapi_with_overlays.yaml",
  output: {
    pageOutDir: "./docs/api",
    componentOutDir: "./src/components/speakeasy",
    framework: "docusaurus",
  },
  display: {
    visibleResponses: "success",
  },
  tryItNow: {
    npmPackageName: "@mistralai/mistralai",
    sdkClassName: "Mistral",
  },
};
