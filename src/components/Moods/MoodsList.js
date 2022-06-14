import { useState, useEffect } from "react"
import { getMoods } from "../Managers/APIManager"


export const MoodsList = () => {

    const [moods, setMoods] = useState([])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("library_user"))
        getMoods(user.id).then(setMoods)
    }, [])
    return <>
        <h2>Welcome to your Mood Selection</h2>
        {
            moods.map(
                mood => <section className="mood" key={mood.id}>
                    <div className="mood__type">{mood.type}</div>
                </section>
            )
        }

    </>
    
}