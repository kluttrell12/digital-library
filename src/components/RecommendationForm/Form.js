import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./RecForm.css"

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
            <div>
                <select onChange={
                    (evt) => {
                        const copy = { ...rec }
                        copy.genre = evt.target.value
                        updateRec(copy)
                    }
                } >
                    <option value="Select a genre">
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
            <div className="recForm__title">New Book Recommendation Form</div>
            <fieldset>
                <div className="form-group_1">
                    <label className="book__title" htmlFor="bookTitle">Title</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
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
                <div className="form-group_2">
                    <label className="book__author" htmlFor="bookAuthor">Author</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
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
                <section className="form-group_3">

                    <label className="book__genre" htmlFor="Genres">Select a Genre</label>
                    {HandleGenreRadioButtons()}
                    <div className="button__container__recForm">
                        <button id="boredB"
                            onClick={
                                (clickEvent) => handleSaveButtonClick(clickEvent)
                            }
                        >
                            Submit Book
                        </button>
                        <div className="button__container__Library">
                        <button id="boredB" onClick={() => navigate("/library")}>Back to Library</button>
                        </div>

                    </div>
                </section>
            </fieldset>
        </form>
    )
}

