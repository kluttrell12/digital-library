import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const NewReaderForm = () => {

    const [newReader, updateNewReader] = useState({
        favoriteGenre: "",
        booksRead: 0
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
                        const copy = { ...newReader }
                        copy.favoriteGenre = evt.target.value
                        updateNewReader(copy)
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

        const readerToSendToAPI = {

            userId: libraryUserObject.id,
            favoriteGenre: newReader.favoriteGenre,
            booksRead: newReader.booksRead,
            dateCompleted: new Date()
        }
        return fetch(`http://localhost:8088/readers`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(readerToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/home")

            })



    }

    return (
        <form className="newReaderForm">
            <h2 className="recForm__title">Please Fill Out our New Reader Form</h2>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="favoriteGenre">Select a Favorite Genre</label>
                    <div>
                        {HandleGenreRadioButtons()}
                    </div>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="booksRead">Books Read:</label>
                    <input type="number"
                        className="form-control"
                        value={newReader.booksRead}
                        onChange={
                            (evt) => {
                                const copy = { ...newReader }
                                copy.booksRead = parseInt(evt.target.value)
                                updateNewReader(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={
                    (clickEvent) => handleSaveButtonClick(clickEvent)
                }
                className="btn btn-primary">
                Go to Digital Library
            </button>
        </form>
    )
}

