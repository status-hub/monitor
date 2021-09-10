/// <reference types="node" />
declare const run: (cmd: string, args?: string[], options?: any) => import("child_process").SpawnSyncReturns<string>;
export { run, };
