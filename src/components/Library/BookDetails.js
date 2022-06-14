import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const BookDetails = () => {
    const {bookId} = useParams()
    const [book, updateBook] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/books?_expand=bookGenre&id=${bookId}`)
            .then(response => response.json())
            .then((data) => {
                const singleBook = data[0]
                updateBook(singleBook)

            })
        },
    [bookId] 
    )


    return <section className="library">
    <header>{book?.bookGenre?.genre}</header>
    <div>{book.title}</div>
    <div>{book.author}</div>
</section>
}