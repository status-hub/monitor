declare function progress(message: string): void;
declare function status(message: string): void;
declare function error(message: string): void;
declare function warn(message: string): void;
declare function updateStatus(projectUpdateStatus: any): void;
declare function command(dir: string, cmd: string, args: any): void;
declare const _default: {
    progress: typeof progress;
    status: typeof status;
    error: typeof error;
    warn: typeof warn;
    command: typeof command;
    updateStatus: typeof updateStatus;
};
export default _default;
