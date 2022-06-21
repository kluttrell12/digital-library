import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


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

        <h3>Thank you for your Recommendation!</h3>
        <button onClick={() => navigate("/library")}>Back to Library</button>
        <br />

            <div> Recommended Book Info </div>

        <article>

            {
                books.map(book => {

                    return <section className="bookRecommendation" key={book.id}>
                        <br />
                        <div> Book Genre: {book.bookGenre} </div>
                        <div> Book Author: {book.bookAuthor} </div>
                        <div> Book Title: {book.bookTitle} </div>
                    </section>

                })

            }
        </article>

    </>
}
