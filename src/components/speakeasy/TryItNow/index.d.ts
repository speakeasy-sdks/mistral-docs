import type { SandpackOptions, SandpackSetup } from "@codesandbox/sandpack-react";
type DependencyName = string;
type DependencyVersion = string;
type Dependencies = Record<DependencyName, DependencyVersion>;
export type TryItNowProps = {
    /**
     * These are dependencies that are required by the code snippet,
     * like "zod" or an npm package.
     */
    externalDependencies?: Dependencies;
    /**
     * Starting value of the editor
     */
    defaultValue?: string;
    /**
     * Props for the container that wraps the editor and console output.
     */
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Render only the Sandpack provider and components to use in a
     * custom container.
     */
    disableContainer?: boolean;
    sandpackOptions?: Partial<SandpackOptions>;
    sandpackSetupOptions?: Partial<SandpackSetup>;
    /**
     * Experimental: When enabled, the editor will automatically
     * scan for external dependencies from npm as the user adds them
     * as imports.
     */
    _enableUnsafeAutoImport?: boolean;
};
export declare const TryItNow: ({ externalDependencies, defaultValue, _enableUnsafeAutoImport, containerProps, disableContainer, sandpackOptions, sandpackSetupOptions, }: TryItNowProps) => import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map