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
    <div className="button__library">
    <button onClick={() => navigate("/library")}>Back to Library</button>
    <button onClick={() => navigate("/library/moods")}>See Books sorted by Mood</button>
    <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button>
    <button onClick={() => navigate("/library/myList")}>See My List of Books</button>
    </div>
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


    </>

}