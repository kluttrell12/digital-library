import { useNavigate } from "react-router-dom"


export const Home = () => {

    const navigate = useNavigate()

    return <article>


        <div className="titlePage">Welcome to The Digital Library</div>


        <div className="button__library">

        <button onClick={() => navigate("/library")}>See entire Library Selection</button>
        <button onClick={() => navigate("/library/moods")}>See books sorted by Mood</button>
        <button onClick={() => navigate("/library/genres")}>See Books sorted by Genre</button>
        <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button>

        </div>



    </article>

}