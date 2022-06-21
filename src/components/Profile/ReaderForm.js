import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ReaderForm = () => {

    const [profile, updateProfile] = useState({
        favoriteGenre: "",
        booksRead: 0,
        userId: 0
    })
    const localLibraryUser = localStorage.getItem("library_user")
    const libraryUserObject = JSON.parse(localLibraryUser)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/readers?userId=${libraryUserObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const readerData = data[0]
                updateProfile(readerData)
            })
    },
        []
    )

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
                <div>Favorite Genre: {profile.favoriteGenre}</div>
                <select 
                onChange={
                    (evt) => {
                        const copy = { ...profile }
                        copy.favoriteGenre = evt.target.value
                        updateProfile(copy)
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

        return fetch(`http://localhost:8088/readers/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/successChange")
            })
    }

    return (
        <form className="profile">
            <h2 className="profile__title">Edit Your Reader Profile</h2>
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
                        value={profile.booksRead}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.booksRead = parseInt(evt.target.value)
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Changes
            </button>
        </form>
    )
}