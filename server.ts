// Run: deno run --allow-net server.ts

import { serve } from 'https://deno.land/std/http/server.ts';
const server = serve({ port: 5000 });

console.log('http://localhost:5000/');
for await(const req of server) {
  req.respond({ body: "Hello, Thank you\n" });
}
