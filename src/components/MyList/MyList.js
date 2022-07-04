import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MyList.css"

const localLibraryUser = localStorage.getItem("library_user")
const libraryUserObject = JSON.parse(localLibraryUser)

const DeleteBookFromList = (id) => {

    fetch(`http://localhost:8088/selectedBooks/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {

        })
}

export const MyList = () => {

    const [selectedBooks, setSelected] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/selectedBooks?userId=${libraryUserObject.id}&_expand=book`)
                .then(response => response.json())
                .then((bookArray) => {
                    setSelected(bookArray)
                })
        },
        []
    )


    return <>
        <div className="titlePage">Your List of Books</div>
        <div className="buttonListContainer">
        <div className="button_List">
        <button id="buttonListB" onClick={() => navigate("/library")}>Return to Library</button>
        </div>
        </div>


        <article className="bookContainer">
            {
                selectedBooks.map(
                    (book) => {
                        return <section className="selectedBooks">
                            <img src={book?.book?.imageURL} height="150px" width="120px" />
                            <div className="library__title">{book?.book?.title}</div>
                            <div className="library__author">Written by {book?.book?.author}</div>
                            <div className="delete__button">
                            <button
                                className="listB"
                                onClick={
                                    () => {
                                        DeleteBookFromList(book.id)
                                        fetch(`http://localhost:8088/selectedBooks?userId=${libraryUserObject.id}&_expand=book`)
                                            .then(response => response.json())
                                            .then((bookArray) => {
                                                setSelected(bookArray)
                                            })
                                    }
                                }
                            >
                                Delete Book
                            </button>
                            </div>
                        </section>

                    }

                )
            }
        </article>




    </>


}