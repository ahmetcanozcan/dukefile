const dukefileName = "./dukefile.ts";

let dukefilePath = await Deno.realPath(dukefileName);

switch (Deno.build.os) {
  case "windows":
    dukefilePath = dukefilePath.slice("c:".length);
    break;

  default:
    break;
}

let dukefile: { [key: string]: Function };

try {
  dukefile = await import(dukefilePath);
} catch (err) {
  console.error("Can not read dukefile", err);
  Deno.exit(1);
}

export default dukefile;
