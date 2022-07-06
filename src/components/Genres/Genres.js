import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GenreBookList } from "./GenreBookList"
import "./Genres.css"


export const Genres = () => {
    const [genres, setGenres] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/bookGenres`)
                .then(response => response.json())
                .then((genreArray) => {
                    setGenres(genreArray)
                })
        },
        []
    )

    return <>
    <div className="titlePage">Books by Genre</div>
        <article className="genreContainer" >
            {
                genres.map(
                    (genre) => {
                        return <section className="genres" key={genre.id}>
                            <div className="genre">{genre.genre}</div>
                               
                                <div>
                                <GenreBookList genre={genre}/>
                            </div>
                        </section>
                    })
            }
              
        </article>
    <div className="buttonGenre__library">
    <div className="genre_button"><button id="genreB" onClick={() => navigate("/library/recommendation")}>Recommend a book</button></div>
    <div className="genre_button"><button id="genreB" onClick={() => navigate("/library/myList")}>See My List of Books</button></div>
    </div>


    </>

}