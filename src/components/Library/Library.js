import { useEffect, useState } from "react"

const localLibraryUser = localStorage.getItem("library_user")
const libraryUserObject = JSON.parse(localLibraryUser)
const AddBookToMyList = (userId, bookId) => {

    fetch(`http://localhost:8088/selectedBooks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {
            userId,
            bookId
        })
    })
}

export const Library = () => {

    const [books, setBooks] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/books`)
                .then(response => response.json())
                .then((bookArray) => {
                    setBooks(bookArray)
                })
        },
        []
    )

    return <>
        <h3>Complete Collection of Books</h3>
        <article>
            {
                books.map(
                    (book) => {
                        return <section className="library" key={book.id}>
                            <h4>{book.title}</h4>
                            <h4>Written by {book.author}</h4>
                            <button
                                onClick={() => AddBookToMyList(libraryUserObject.id, book.id)}
                            >Add to My List</button>
                        </section>
                    })
            }
        </article>


    </>


}