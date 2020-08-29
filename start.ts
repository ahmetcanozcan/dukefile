import dukefile from "./dukefile.ts";

export default function start(args: string[]) {
  console.log(args);
  const taskName = args[0] || "default";
  const taskNameParts: string[] = taskName.split(":");

  let task = dukefile;
  taskNameParts.forEach((part) => {
    if (!part) return;
    task = task[part];
  });

  const taskArgs = args.slice(1);

  // Run task
  task(taskArgs);
}
