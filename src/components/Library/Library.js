import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Library = ({id, bookGenre, bookTitle, bookAuthor, bookGenreId}) => {
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
     
     <article>
     {
         genres.map(
             (genre) =>{
                 return <section className="library">
                 <div>
                     <Link to={`/library`}>{genre.genre}</Link>
                 </div>
                 <button
                  onClick={() => navigate(`/library/${id}`)}>See Books
                </button>
             </section>
             }
         )
     
    }   
     </article>
     </>
 }