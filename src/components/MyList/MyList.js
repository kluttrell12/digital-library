import { useEffect, useState } from "react"
import { Book } from "../Book/Book"

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
        <h2>Your List of Books</h2>

        <article>
            {
                selectedBooks.map(
                    (book) => {
                        return <section key={book.id}>
                                <Book book={book} />
                                <button
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
                            </section>
                        
                    }

                )
            }
        </article>




    </>


}