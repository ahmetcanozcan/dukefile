import dukefile from "./dukefile.ts";

export default function start(args: string[]) {
  const taskName = args[0] || "default";
  const task = dukefile[taskName];
  const taskArgs = args.slice(1);

  // Run task
  task(...taskArgs);
}
