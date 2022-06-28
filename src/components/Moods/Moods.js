import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MoodBookList } from "./MoodBookMatch"
import "./Mood.css"

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
        <div className="titlePage">Books by Mood</div>
        <div className="button__library">
            <button onClick={() => navigate("/library")}>Back to Library</button>
            <button onClick={() => navigate("/library/genres")}>See Books sorted by Genre</button>
            <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button>
            <button onClick={() => navigate("/library/myList")}>See My List of Books</button>
        </div>

        <article className="moodContainer" >
            {
                moods.map(
                    (mood) => {
                        return <section className="moods" key={mood.id}>

                            <div className="mood">{mood.type}</div>
                            <div id="book">
                                <MoodBookList mood={mood} />
                            </div>


                        </section>

                    })
            }
        </article>


    </>

}

