import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const BookMoodsList = () => {
    const { moodId } = useParams()
    const [books, updateBooks] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/books?moodId=${moodId}`)
                .then(response => response.json())
                .then((data) => {
                    const bookArray = data
                    updateBooks(bookArray)

                })
        },
        [moodId]
    )

    const [bookCart, update] = useState({
        bookSelected: "",
    })
    const localLibraryUser = localStorage.getItem("library_user")
    const libraryUserObject = JSON.parse(localLibraryUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const formToSendToAPI = {
            userId: libraryUserObject.id,
            bookSelected: bookCart.title,
            dateSubmitted: new Date()
        }

        // TODO: Perform the fetch() to POST the object to the API

        return fetch(`http://localhost:8088/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                // navigate("/moods")
            })
    }

    if (books) {
        return <div className="cart-group">

            {books.map(book => {
                return (

                    <form className="selectForm" key={book.id}>
                        <fieldset>
                            <div className="selectForm__group">
                                <label htmlFor="bookSelected" className="bookSelection"
                                >{book.title} by {book.author}
                                </label>
                                <input
                                    type="checkbox"
                                    className="bookSave"
                                    value={book.title}
                                    onChange={
                                        (evt) => {
                                            const copy = { ...bookCart }
                                            copy.bookSelected = evt.target.value
                                            update(copy)
                                        }
                                    }
                                />
                            </div>
                        </fieldset>
                    </form>
                )
            }
            )}
            <button
                onClick={(clickEvent) => {
                    // setSuccess(true)
                    handleSaveButtonClick(clickEvent)
                }}
                className="btn btn-primary">
                Submit to Cart
            </button>
        </div>
    } else {
        return "failed"
    }
}





