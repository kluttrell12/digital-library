import { useEffect, useState } from "react"
import { GenreBookList } from "./GenreBookList"


export const Genres = () => {
    const [genres, setGenres] = useState([])

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