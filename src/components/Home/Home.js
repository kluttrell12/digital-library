import { useNavigate } from "react-router-dom"


export const Home = () => {

    const navigate = useNavigate()

    return <article>

        <div>

        <h1>Welcome to The Digital Library</h1>

        <button onClick={() => navigate("/library")}>See entire Library Selection</button>
        <br></br>
        <button onClick={() => navigate("/library/moods")}>See books sorted by Mood</button>
        <br></br>
        <button onClick={() => navigate("/library/genres")}>See Books sorted by Genre</button>
        <br></br>
        <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button>

        </div>



    </article>

}