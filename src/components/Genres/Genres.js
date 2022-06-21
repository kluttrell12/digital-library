import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GenreBookList } from "./GenreBookList"


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

    <h3>Books by Genre</h3>
    <button onClick={() => navigate("/library")}>Back to Library</button>
    <br></br>
    <button onClick={() => navigate("/library/moods")}>See Books sorted by Mood</button>
    <br></br>
    <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button>
    <br></br>
    <button onClick={() => navigate("/library/myList")}>See My List of Books</button>
        <article>
            {
                genres.map(
                    (genre) => {
                        return <section className="genres" key={genre.id}>
                            <div>
                                <h3>{genre.genre}</h3>
                                <div>
                                <GenreBookList genre={genre}/>
                            </div>

                            </div>
                        </section>

                    })
            }
        </article>


    </>

}