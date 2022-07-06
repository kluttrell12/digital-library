import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Happy.css"




const localLibraryUser = localStorage.getItem("library_user")
const libraryUserObject = JSON.parse(localLibraryUser)

const AddBookToMyList = (userId, bookId) => {

    fetch(`http://localhost:8088/selectedBooks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId,
            bookId
        })
    })
}


export const HappyList = () => {

    const [books, updateBooks] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/books?moodId=1`)
                .then(response => response.json())
                .then((bookArray) => {
                    updateBooks(bookArray)
                })
        },
        []
    )

    return <>

        <div className="titlePage__happy">Happy List</div>
        
        <article className="happy__Container">

            {
                books.map(
                    (book) => {
                        return <section className="happy_library" key={book.id}>
                            <div className="happy__">
                                <div className="happy__pic">
                                    <img src={book.imageURL} height="150px" width="120px" />
                                </div>
                                <div className="library__title">{book.title}</div>
                                <div className="library__author">Written by {book.author}</div>
                                <button
                                
                                    onClick={() => AddBookToMyList(libraryUserObject.id, book.id)}
                                >Add to My List</button>
                            </div>
                        </section>

                    })

            }
        </article>
        <div className="happy_button_container">
        <div className="happy_button"><button id="happyB" onClick={() => navigate("/library/recommendation")}>Recommend a book</button></div>
        <div className="happy_button"><button id="happyB" onClick={() => navigate("/library/myList")}>See My List of Books</button></div>
        </div>
      
    </>

}
