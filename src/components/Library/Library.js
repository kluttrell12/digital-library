import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Library = () => {
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
                 return <section className="library" key={genre.id}>
                 <div>
                     {genre.genre}
                 </div>
                 <button
                  onClick={() => navigate(`/library/${genre.id}`)}>See Books
                </button>
             </section>
             }
         )
     
    }   
     </article>
     </>
 }