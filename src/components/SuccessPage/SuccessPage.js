import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SuccessPage.css"


export const SuccessPage = () => {
    const navigate = useNavigate()
    const localLibraryUser = localStorage.getItem("library_user")
    const libraryUserObject = JSON.parse(localLibraryUser)

    const [books, updateBooks] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/recommendations?userId=${libraryUserObject.id}`, {
            })
                .then(response => response.json())
                .then((dataArray) => {
                    const sortedBooks = dataArray
                    sortedBooks.sort(
                        (date) => Date.parse(new Date(date.dateCompleted.split("/").reverse().join("-"))) - Date.parse(new Date(date.dateCompleted.split("/").reverse().join("-"))));
                    updateBooks(sortedBooks)
                })
        },
        []
    )

    return <>

        <div className="title__page">Thank you for your Recommendation!</div>
        <div className="book__info"> Recommended Book Info </div>

        <article className="bookRecommendations">

            {
                books.map(book => {

                    return <section key={book.id}>
                        <div className="bookRecContainer">
                        <div className="bookRecommendation">
                        <span>
                        <div className="bookSuccess"> Book Genre: {book.bookGenre} </div>
                        <div className="bookSuccess"> Book Author: {book.bookAuthor} </div>
                        <div className="bookSuccess"> Book Title: {book.bookTitle} </div>
                        </span>
                        </div>
                        </div>
                        <div className="library__button"><button id="boredB"onClick={() => navigate("/library")}>Back to Library</button></div>

                    </section>


                })

            }
        </article>

    </>
}
