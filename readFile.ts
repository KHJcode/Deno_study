// Run: deno run --allow-read readFile.ts

let file = await Deno.open('hello.txt');
await Deno.copy(file, Deno.stdout);
file.close();
