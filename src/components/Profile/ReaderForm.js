import { useEffect, useState } from "react"

export const ReaderForm = () => {

    const [profile, updateProfile] = useState({
        favoriteGenre: "",
        booksRead: 0,
        userId: 0
    })
    const localLibraryUser = localStorage.getItem("library_user")
    const libraryUserObject = JSON.parse(localLibraryUser)


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


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/readers/${profile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
        })
    }

    return (
        <form className="profile">
            <h2 className="profile__title">Edit Your Reader Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="favorite_Genre">Favorite Genre:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.favoriteGenre}
                        onChange={
                            (evt) => {
                                const copy = { ...profile }
                                copy.favoriteGenre = evt.target.value
                                updateProfile(copy)
                            }
                        } />
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