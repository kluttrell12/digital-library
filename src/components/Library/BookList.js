import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const BookList = () => {
    const { bookGenreId } = useParams()
    const [books, updateBooks] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/books?bookGenreId=${bookGenreId}`)
                .then(response => response.json())
                .then((data) => {
                    const bookGenreArray = data
                    updateBooks(bookGenreArray)

                })
        },
        [bookGenreId]
    )

    if (books) {
        return <div>
            {books.map(book => {
                return (
                    <section className="library__bookGenre" key={book.id}>
                        <div>{book.title}</div>
                        <div>{book.author}</div>
                    </section>
                )
            }
            )}</div>
    } else {
        return "no book found"
    }
}