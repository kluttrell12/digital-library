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

    const navigate = useNavigate()
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

        <div className="titlePage">Complete Collection of Books</div>
        <article className="library__container">
            {
                books.map(
                    (book) => {
                        return <section className="library" key={book.id}>
                            <img src={book.imageURL} height="150px" width="120px" />
                            <div className="library__title">{book.title}</div>
                            <div className="library__author">Written by {book.author}</div>
                            <button
                            className="addButton"
                                onClick={() => AddBookToMyList(libraryUserObject.id, book.id)}
                            >Add to My List</button>
                        </section>
                    })
            }
        </article>
        <article className="button__container">
            <div className="home_button"><button id="homeB" onClick={() => navigate("/library/myList")}>See My List of Books</button></div>
            <div className="home_button"><button id="homeB" onClick={() => navigate("/library/recommendation")}>Recommend a book</button></div>
        </article>


    </>


}