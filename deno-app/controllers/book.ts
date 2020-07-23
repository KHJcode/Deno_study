import { Book } from '../types.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';
import { books } from '../models/books.ts';

export const Test = (context: any) => {
  context.response.body = "Hello, World!";
};

export const getBooks = (context: any) => {
  context.response.body = books;
};

export const postBook = async (context: any) => {
  const body = await context.request.body();
  if (!context.request.hasBody) {
    context.response.status = 400;
    context.response.body = "데이터가 없습니다.";
  } else {
    const book: Book = await body.value;
    book.id = v4.generate();
    books.push(book);
    context.response.status = 201;
    context.response.body = book;
  }
};

export const findBook = async (context: any) => {
  const book: Book | undefined = books.find(b => b.id === context.params.id);
  if (book) {
    context.response.body = book;
    context.response.status = 200;
  } else {
    context.response.body = "책을 찾지 못했습니다."
    context.response.status = 404;
  }
};