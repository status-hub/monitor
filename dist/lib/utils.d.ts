/// <reference types="node" />
declare const run: (cmd: string, args?: string[], options?: any) => import("child_process").SpawnSyncReturns<string>;
declare const runGit: (repoPath: string, gitArgs: any, continueOnFail?: boolean) => string | null;
export { run, runGit };
