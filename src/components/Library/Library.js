import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Library.css"

const localLibraryUser = localStorage.getItem("library_user")
const libraryUserObject = JSON.parse(localLibraryUser)
const AddBookToMyList = (userId, bookId) => {

    fetch(`http://localhost:8088/selectedBooks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId,
            bookId
        })
    })
}

export const Library = () => {

    const [books, setBooks] = useState([])

    const navigate = useNavigate()

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
        <div className="titlePage">Complete Collection of Books</div>
        <div className="button__library">
            <button onClick={() => navigate("/library/moods")}>See books sorted by Mood</button>
            <button onClick={() => navigate("/library/genres")}>See Books sorted by Genre</button>
            <button onClick={() => navigate("/library/myList")}>See My List of Books</button>
            <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button>
        </div>

        <article className="library__container">
            {
                books.map(
                    (book) => {
                        return <section className="library" key={book.id}>
                            <img src={book.imageURL} height="150px" width="120px" />
                            <div className="library__title">{book.title}</div>
                            <div className="library__author">Written by {book.author}</div>
                            <button
                                onClick={() => AddBookToMyList(libraryUserObject.id, book.id)}
                            >Add to My List</button>
                        </section>
                    })
            }
        </article>


    </>


}