import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes.ts';

const app = new Application();
const PORT = 5000;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is listening on port ${PORT}`);
await app.listen({ port: PORT });
