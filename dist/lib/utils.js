"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const logging_1 = __importDefault(require("./logging"));
const child_process_1 = require("child_process");
const run = (cmd, args = [], options = {}) => {
    const { continueOnFail, ...cmdOptions } = options;
    logging_1.default.command(cmdOptions.cwd, cmd, args);
    const prog = child_process_1.spawnSync(cmd, args, cmdOptions);
    if (prog.status !== 0) {
        if (!continueOnFail) {
            console.log(prog.stdout && prog.stdout.toString());
            console.error(prog.stderr && prog.stderr.toString());
            process.exit(1);
        }
    }
    return prog;
};
exports.run = run;
const runGit = (repoPath, gitArgs, continueOnFail = false) => {
    let prog = run('git', gitArgs, { cwd: repoPath, continueOnFail });
    if (prog.status !== 0) {
        return null;
    }
    else {
        return prog.stdout.toString().trim();
    }
};
//# sourceMappingURL=utils.js.map