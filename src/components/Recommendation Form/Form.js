import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Form = () => {
    /*
        TODO: Add the corbookt default properties to the
        initial state object
    */
    const [book, update] = useState({
        genre: "",
        title: "",
        author: ""
    })

    const [success, setSuccess] = useState(false)
    /*
        TODO: Use the useNavigation() hook so you can redibookt
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localLibraryUser = localStorage.getItem("library_user")
    const libraryUserObject = JSON.parse(localLibraryUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const formToSendToAPI = {
            userId: libraryUserObject.id,
            bookGenre: book.genre,
            bookTitle: book.title,
            bookAuthor: book.author,
            dateSubmitted: new Date()
        }

        // TODO: Perform the fetch() to POST the object to the API

        return fetch(`http://localhost:8088/recommendations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                // navigate("/cart") 
            })
    }

    return (
        <form className="bookForm">
            <h2 className="bookForm__title">Book Recommendation Form</h2>
            <div>{success ? "Success!" : ""}</div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bookGenre">Book Genre:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={book.genre}
                        onChange={
                            (evt) => {
                                const copy = { ...book }
                                copy.genre = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bookTitle">Book Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={book.title}
                        onChange={
                            (evt) => {
                                const copy = { ...book }
                                copy.title = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bookAuthor">Book Author:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={book.author}
                        onChange={
                            (evt) => {
                                const copy = { ...book }
                                copy.author = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => {
                    setSuccess(true)
                    handleSaveButtonClick(clickEvent)
                }}
                className="btn btn-primary">
                Submit Book
            </button>
        </form>
    )
}