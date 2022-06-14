import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Form = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [rec, update] = useState({
        genre: "",
        title: "",
        author: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localLibraryUser = localStorage.getItem("library_user")
    const libraryUserObject = JSON.parse(localLibraryUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API

        // "userId": 3,
        // "description": "Vero est adipisci sed natus quasi consectetur occaecati. Modi maxime sunt officia cumque. Vel at culpa. Sint accusamus deserunt dolorem qui.",
        // "emergency": true,
        // "dateCompleted": ""

        const formToSendToAPI = {
            userId: libraryUserObject.id,
            bookGenre: rec.genre,
            bookTitle: rec.title,
            bookAuthor: rec.author
        }

        // TODO: Perform the fetch() to POST the object to the API

        return fetch(`http://localhost:8088/recommendations`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/recommendations")
            })
    }

    return (
        <form className="recForm">
            <h2 className="recForm__title">Book Recommendation</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bookGenre">Book Genre:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={rec.genre}
                        onChange={
                            (evt) => {
                                const copy = {...rec}
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
                        value={rec.title}
                        onChange={
                            (evt) => {
                                const copy = {...rec}
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
                        value={rec.author}
                        onChange={
                            (evt) => {
                                const copy = {...rec}
                                copy.author = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
            onClick = {(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Book
            </button>
        </form>
    )
}