<h1 align="center" > 
  Dukefile
</h1>
</div>
<div align="center" >
   a build tool that inspired from Magefile, for Deno 
</div>
<br>
<br>

## Installation

Dukefile can be installed by Deno install tool easily

```cmd
deno install --allow-read https://deno.land/x/dukefile/bin/duke.ts
```

## Usage

Firstly, create `dukefile.ts` on root of the application.
running for a spesified task: 

    duke <task name>

or  only `duke` for running `default` task

    duke

#### Example dukefile.ts

```javascript

export function hello(){
  console.log("Hello Task");
}


export function echo(args : string[]){
  console.log("Echo Task with",s);
}

export default function(){
  console.log("Default Task");
}

export const build = {
  linux() {
    console.log("build::linux task");
  }
}


```

```bash
duke hello
# prints: Hello Task

duke echo hal
# prints: Echo Task with hal

duke build::linux #or build:linux
#prints: build::linux task

duke
# prints: Default Task
```
