import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Moods = () => {
    const [moods, setMoods] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            fetch(`http://localhost:8088/moods`)
            .then(response => response.json())
            .then((moodArray) => {
                setMoods(moodArray)
            })
        },
        []
    )
      
     return <>
     
     <article>
     {
         moods.map(
             (mood) =>{
                 return <section className="library" key={mood.id}>
                 <div>
                     {mood.type}?
                 </div>
                 <button
                  onClick={() => navigate(`/moods/${mood.id}`)}>Click Here to find a book!
                </button>
             </section>
             }
         )
     
    }   
     </article>
     </>
 }