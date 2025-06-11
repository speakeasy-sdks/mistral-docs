import { atom } from "jotai";
export const dependenciesAtom = atom(null);
export const lastEditorValueAtom = atom(null);
export const setDependenciesAtom = atom(null, (get, set, dependencies, code) => {
    const previousDependencies = get(dependenciesAtom) || {};
    if (Object.keys(dependencies).join("-") !==
        Object.keys(previousDependencies).join("-")) {
        set(dependenciesAtom, dependencies);
        set(lastEditorValueAtom, code);
    }
});
//# sourceMappingURL=index.js.map