// Run: deno run --allow-write createFile.ts

const encoder = new TextEncoder();
const helloText = encoder.encode('Hello, KHJcode! I am Deno.');
await Deno.writeFile('hello.txt', helloText);
