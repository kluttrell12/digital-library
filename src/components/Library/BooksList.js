import { useEffect, useState } from "react"
import { Library} from "./Library"


export const BooksList = () => {
     const [books, setBooks] = useState([])

     useEffect(
         () => {
             fetch(`http://localhost:8088/books?_expand=bookGenre`)
             .then(response => response.json())
             .then((bookArray) => {
                 setBooks(bookArray)
             })
         },
         []
     )

     return <article className="books">
        {
            books.map(book =>  <Library key={`library--${book.id}`}
                id={book.id}
                bookGenre={book?.bookGenre?.genre}
                bookTitle={book.title}
                bookAuthor={book.author}/>)
        }
     </article>
}