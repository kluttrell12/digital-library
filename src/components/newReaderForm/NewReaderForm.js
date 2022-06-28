import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./NewReaderForm.css"

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
            <div className="readerForm__title">Please Fill Out our New Reader Form</div>
            <fieldset>
                <section className="reader_form">
                    <div className="favoriteGenreSelect">
                        <label htmlFor="favoriteGenre">Select a Favorite Genre</label>
                        {HandleGenreRadioButtons()}
                    </div>
                </section>
            </fieldset>
            <fieldset>
                <div className="form-group_reader">
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
            <div className="buttonNewReader">
            <button
                onClick={
                    (clickEvent) => handleSaveButtonClick(clickEvent)
                }
                className="readerFormButton">
                Go to Digital Library
            </button>
            </div>
        </form>
    )
}

