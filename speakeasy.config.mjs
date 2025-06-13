export default {
  spec: "./openapi.yaml",
  output: {
    pageOutDir: "./docs/api",
    componentOutDir: "./src/components/speakeasy",
    framework: "docusaurus",
  },
  display: {
    showSchemasInNav: false,
    showTypeSignatures: true,
  },
  npmPackageName: "@mistralai/mistralai",
};
