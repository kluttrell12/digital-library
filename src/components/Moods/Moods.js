import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MoodBookList } from "./MoodBookMatch"

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

    <h2>Books by Mood</h2>
    <button onClick={() => navigate("/library")}>Back to Library</button>
    <br></br>
    <button onClick={() => navigate("/library/genres")}>See Books sorted by Genre</button>
    <br></br>
    <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button>
    <br></br>
    <button onClick={() => navigate("/library/myList")}>See My List of Books</button>
        <article>
            {
                moods.map(
                    (mood) => {
                        return <section className="moods" key={mood.id}>
                            <div>
                                
                            <h3>{mood.type}</h3>
                            <div>
                                <MoodBookList mood={mood}/>
                            </div>
                                
                                </div>
                        </section>

                    })
            }
        </article>


    </>

}

