import { getInput, debug, setFailed, setOutput } from "@actions/core";
import { getOctokit } from "@actions/github";
import {
  run as exec
} from './lib/utils';

const token =
  getInput("token") || process.env.ST_TOKEN || process.env.GITHUB_TOKEN;

export const run = async () => {
  if (!token) throw new Error("GitHub token not found");
  const octokit = getOctokit(token);

  exec('echo', ['actions test'])
};

run()
  .then(() => {})
  .catch((error) => {
    console.error("ERROR", error);
    setFailed(error.message);
  });
