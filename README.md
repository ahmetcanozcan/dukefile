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

Firstly, create `dukefile.ts` on root of the application and for running a spesified task, run this: 

    duke <task name>

or  only `duke` for running `default` task

    duke

#### Example dukefile.ts

```javascript

export function hello(){
  console.log("Hello Task");
}

export default function(){
  console.log("Default task");
}

```
