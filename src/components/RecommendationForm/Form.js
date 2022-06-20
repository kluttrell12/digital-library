import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Form = () => {

    const [rec, updateRec] = useState({
        title: "",
        author: "",
        genre: ""
    })

    const navigate = useNavigate()
    const localLibraryUser = localStorage.getItem("library_user")
    const libraryUserObject = JSON.parse(localLibraryUser)

    const HandleGenreRadioButtons = () => {
        let genres = [
            { label: "Action", value: "Action" },
            { label: "Adventure", value: "Adventure" },
            { label: "Non-Fiction", value: "Non-Fiction" },
            { label: "Fantasy", value: "Fantasy" },
            { label: "Thriller", value: "Thriller" },
            { label: "Horror", value: "Horror" },
            { label: "Romance", value: "Romance" }
        ]

        return <article>
            <div className="genreSelect">
                <br />
                <select onChange={
                    (evt) => {
                        const copy = { ...rec }
                        copy.genre = evt.target.value
                        updateRec(copy)
                    }
                } >
                    <option value="⬇️ Select a genre ⬇️">
                        -- Select a genre --
                    </option>
                    {genres.map((genre) => <option value={genre.value}>{genre.label}</option>)}
                </select>
            </div>

        </article>


    }

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const recToSendToAPI = {

            userId: libraryUserObject.id,
            bookGenre: rec.genre,
            bookTitle: rec.title,
            bookAuthor: rec.author,
            dateCompleted: new Date()
        }
        return fetch(`http://localhost:8088/recommendations`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/library/success")

            })



    }

    return (
        <form className="recForm">
            <h2 className="recForm__title">Book Recommendation Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="bookTitle">Book Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Title of Book..."
                        value={rec.title}
                        onChange={
                            (evt) => {
                                const copy = { ...rec }
                                copy.title = evt.target.value
                                updateRec(copy)
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
                        placeholder="Author of Book..."
                        value={rec.author}
                        onChange={
                            (evt) => {
                                const copy = { ...rec }
                                copy.author = evt.target.value
                                updateRec(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Genres">Select a Genre</label>
                    <div>
                        {HandleGenreRadioButtons()}
                    </div>
                </div>
            </fieldset>
            <button
                onClick={
                    (clickEvent) => handleSaveButtonClick(clickEvent)
                }
                className="btn btn-primary">
                Submit Recommendation
            </button>
        </form>
    )
}

