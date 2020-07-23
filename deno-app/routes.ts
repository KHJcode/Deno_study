import { Router } from 'https://deno.land/x/oak/mod.ts';
import { Test, getBooks, postBook, findBook } from './controllers/book.ts';

const router = new Router();

router.get('/', Test)
  .get('/books', getBooks)
  .post("/book", postBook)
  .get('/book/:id', findBook);

export default router;
