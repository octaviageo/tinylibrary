import booksData from "../data/books.json"
import type { Book } from "../types"

const books: Book[] = booksData

export async function getAllBooks(): Promise<Book[]> {
  return books
}

export async function getBookById(id: string | number): Promise<Book> {
  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    throw new Error(`Book with id "${id}" was not found`)
  }

  return book
}