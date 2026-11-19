import {getAllBooks} from "@/app/lib/books";
import type { Book } from "@/app/types";
import BookCard from "@/app/components/BookCard";
import Link from "next/link";

export default async function Books () {
    const books = await getAllBooks();
    return (
        <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">All Books</h1>
      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        role="region"
        aria-label="Books Gallery"
      >
        
        
        {books.map((book: Book) => (
            <Link 
            href="{`/books/${book.id}`}">
                <BookCard key={book.id} book={book} />
            </Link>
        ))}
        </div>
        </div>)
    
}