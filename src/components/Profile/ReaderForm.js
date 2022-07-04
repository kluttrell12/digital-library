import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Profile.css"

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

        return <article className="genre__profile_container">
            <div className="genreSelect">
                <div>Favorite Genre:    {profile.favoriteGenre}
                <br />
                <br />
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
        <form className="profile__container">
            <div className="profile__title">Edit Your Reader Profile</div>
            <fieldset>
                {HandleGenreRadioButtons()}
            </fieldset>
            <fieldset>
                <div className="form-group_profile2">
                    <div className="label__genreSelect">
                        <label className="label" htmlFor="booksRead">Books Read:</label>
                        <input type="number"
                            className="input"
                            value={profile.booksRead}
                            onChange={
                                (evt) => {
                                    const copy = { ...profile }
                                    copy.booksRead = parseInt(evt.target.value)
                                    updateProfile(copy)
                                }
                            } />
                        <div className="btn-submit">
                            <button id="boredB"
                                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}