import { useEffect, useState } from "react"
import { MoodBookList } from "./MoodBookMatch"

export const Moods = () => {
    const [moods, setMoods] = useState([])

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

