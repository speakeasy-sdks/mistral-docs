import { useEffect, useState } from "react";
const re = /require\(['"](?<dependency>[\S_-]+)['"]/g;
const localImportRegex = /^\.{1,2}\/|^\/|^~\//;
/**
 * Detects dependencies from transpiled code that external such as npm packages.
 * @param transpiledCode
 * @returns
 */
export function useTranspileDependencyMatches(transpiledCode) {
    const [dependencies, setDependencies] = useState(null);
    useEffect(() => {
        const dependencies = transpiledCode.matchAll(re);
        const dependenciesArray = Array.from(dependencies).reduce((prev, match) => {
            const dependency = match.groups?.dependency || "";
            // filter out local dependencies
            if (localImportRegex.test(dependency)) {
                return prev;
            }
            if (dependency) {
                prev[dependency] = "latest";
            }
            return prev;
        }, {});
        setDependencies(dependenciesArray || null);
    }, [transpiledCode]);
    return dependencies;
}
//# sourceMappingURL=useCodeDependencies.js.map