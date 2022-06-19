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

export const MoodBookList = ({mood}) => {
    const [books, updateBooks] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/books?moodId=${mood.id}`)
                .then(response => response.json())
                .then((bookArray) => {
                    updateBooks(bookArray)
                })
        },
        []
    )


    return <>
        <article>

            {
                books.map(
                    (book) => {
                        return <section className="library" key={book.id}>
                            <p>{book.title}</p>
                            <p>Written By {book.author}</p>
                            <br></br>
                            <button
                                onClick={() => AddBookToMyList(libraryUserObject.id, book.id)}
                            >Add to My List</button>
                        </section>

                    })

            }
        </article>
        </>
}