import { useSandpack } from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";
const getTranspiledCode = (client) => {
    if (!client)
        return null;
    const bundlerState = client["bundlerState"];
    if (bundlerState == null)
        return null;
    const tModule = bundlerState.transpiledModules["/index.tsx:"];
    return tModule?.source?.compiledCode ?? null;
};
/**
 * Returns the evaluated and transpiled code from the sandpack client whenever it is evaluating code.
 * @returns
 */
export const useEvaluatedCode = () => {
    const { sandpack, listen } = useSandpack();
    const [evaluatedCode, setEvaluatedCode] = useState(null);
    const client = Object.values(sandpack.clients)[0];
    useEffect(() => {
        listen((msg) => {
            if (msg.type === "status" && msg.status === "evaluating") {
                if (!client)
                    return;
                const transpiledCode = getTranspiledCode(client);
                if (transpiledCode) {
                    setEvaluatedCode(transpiledCode);
                }
            }
        });
    }, [listen, client]);
    return evaluatedCode;
};
//# sourceMappingURL=useTranspiledCode.js.map