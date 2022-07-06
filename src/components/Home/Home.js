import { useNavigate } from "react-router-dom";

import "./Home.css"

export const Home = () => {

    const navigate = useNavigate()

    return <>
            <div className="titleHome">
                <div>Welcome to The Digital Library</div>
                </div>
        <article className="home_Container">
                <div>
                   <div className="home_button"> <button onClick={() => navigate("/library/moods")}>See books sorted by Mood</button> </div>
                    <img src={"https://images.pexels.com/photos/545068/pexels-photo-545068.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} height={"300px"} width={"300px"} />
                </div>
                <div>
                <div className="home_button">  <button onClick={() => navigate("/library/genres")}>See Books sorted by Genre</button> </div>
                    <img src={"https://www.trainingzone.co.uk/sites/default/files/elenaleonova-books.jpg"} height={"300px"} width={"300px"} />
                </div>
                <div>
                <div className="home_button">   <button onClick={() => navigate("/library/recommendation")}>Recommend a book</button> </div>
                    <img src={"https://cdn.elearningindustry.com/wp-content/uploads/2018/07/ld-book-recommendations-what-books-to-read-1024x574.jpg"} height={"300px"} width={"300px"} />
                </div>
        </article>
    </>
}






