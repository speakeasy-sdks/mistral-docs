import { SandpackCodeEditor, SandpackConsole, SandpackLayout, SandpackPreview, SandpackProvider, } from "@codesandbox/sandpack-react";
import { useAtomValue } from "jotai";
import { Fragment } from "react";
import { CodeEditor } from "./CodeEditor/index.jsx";
import { dependenciesAtom, lastEditorValueAtom } from "./state/index.js";
import { styles } from "./styles.js";
export const TryItNow = ({ externalDependencies, defaultValue = "", _enableUnsafeAutoImport, containerProps, disableContainer, sandpackOptions = {}, sandpackSetupOptions = {}, }) => {
    const autoImportDependencies = useAtomValue(dependenciesAtom);
    const previousCodeAtomValue = useAtomValue(lastEditorValueAtom);
    const OuterContainer = disableContainer ? Fragment : "div";
    return (<OuterContainer style={{ ...styles.container, ...containerProps?.style }} {...containerProps}>
      <SandpackProvider options={{
            autoReload: false,
            autorun: false,
            activeFile: "index.tsx",
            ...sandpackOptions,
        }} template="vanilla-ts" files={{
            "index.tsx": {
                code: _enableUnsafeAutoImport && previousCodeAtomValue
                    ? previousCodeAtomValue
                    : defaultValue,
                active: true,
            },
        }} customSetup={{
            dependencies: autoImportDependencies && _enableUnsafeAutoImport
                ? { ...autoImportDependencies, ...externalDependencies }
                : externalDependencies,
            entry: "index.tsx",
            ...sandpackSetupOptions,
        }} theme="auto">
        <SandpackLayout>
          <SandpackPreview style={styles.preview}/>
          {_enableUnsafeAutoImport ? <CodeEditor /> : <SandpackCodeEditor />}
          <SandpackConsole resetOnPreviewRestart showSetupProgress showRestartButton/>
        </SandpackLayout>
      </SandpackProvider>
    </OuterContainer>);
};
//# sourceMappingURL=index.jsx.map