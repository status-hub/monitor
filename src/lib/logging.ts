// Copyright (c) 2019 The Wonoly Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

import os from 'os';
import chalk from 'chalk';
import logUpdate from 'log-update';

let divider: any
function setLineLength () {
  divider = Array(process.stdout.columns || 32).join('-')
}
setLineLength()
process.stdout.on('resize', setLineLength)

const progressStyle = chalk.bold.inverse
const statusStyle = chalk.green.italic
const warningStyle = chalk.black.bold.bgYellow

const cmdDirStyle = chalk.blue
const cmdCmdStyle = chalk.green
const cmdArrowStyle = chalk.magenta

function progress (message: string) {
  console.log(progressStyle(message))
}

function status(message: string) {
  console.log(statusStyle(message))
}

function error (message: string) {
  console.error(progressStyle(message))
}

function warn (message: string) {
  console.error(warningStyle(message))
}

function updateStatus (projectUpdateStatus: any) {
  const statusLines = Object.values(projectUpdateStatus).map(entry =>
    `${chalk.bold((entry as any).name)} (${(entry as any).ref}): ${chalk.green.italic((entry as any).phase)}`
  )
  logUpdate(statusLines.join(os.EOL))
}

function command (dir: string, cmd: string, args: any) {
  console.log(divider)
  if (dir)
    console.log(cmdDirStyle(dir))
  console.log(`${cmdArrowStyle('>')} ${cmdCmdStyle(cmd)} ${args.join(' ')}`)
}

export default {
  progress,
  status,
  error,
  warn,
  command,
  updateStatus
}
