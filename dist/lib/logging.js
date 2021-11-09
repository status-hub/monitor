"use strict";
// Copyright (c) 2019 The Wonoly Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const chalk_1 = __importDefault(require("chalk"));
const log_update_1 = __importDefault(require("log-update"));
let divider;
function setLineLength() {
    divider = Array(process.stdout.columns || 32).join('-');
}
setLineLength();
process.stdout.on('resize', setLineLength);
const progressStyle = chalk_1.default.bold.inverse;
const statusStyle = chalk_1.default.green.italic;
const warningStyle = chalk_1.default.black.bold.bgYellow;
const cmdDirStyle = chalk_1.default.blue;
const cmdCmdStyle = chalk_1.default.green;
const cmdArrowStyle = chalk_1.default.magenta;
function progress(message) {
    console.log(progressStyle(message));
}
function status(message) {
    console.log(statusStyle(message));
}
function error(message) {
    console.error(progressStyle(message));
}
function warn(message) {
    console.error(warningStyle(message));
}
function updateStatus(projectUpdateStatus) {
    const statusLines = Object.values(projectUpdateStatus).map(entry => `${chalk_1.default.bold(entry.name)} (${entry.ref}): ${chalk_1.default.green.italic(entry.phase)}`);
    (0, log_update_1.default)(statusLines.join(os_1.default.EOL));
}
function command(dir, cmd, args) {
    console.log(divider);
    if (dir)
        console.log(cmdDirStyle(dir));
    console.log(`${cmdArrowStyle('>')} ${cmdCmdStyle(cmd)} ${args.join(' ')}`);
}
exports.default = {
    progress,
    status,
    error,
    warn,
    command,
    updateStatus
};
//# sourceMappingURL=logging.js.map