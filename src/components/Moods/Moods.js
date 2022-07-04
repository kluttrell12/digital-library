import { useNavigate } from "react-router-dom"
import "./Mood.css"



export const Moods = () => {
    const navigate = useNavigate()


    return <>
        <div className="titlePage">Books by Mood</div>
        <article className="moodContainer" >
            <div className="hoverImage">
            <img onClick={() => navigate("/library/moods/happy")} src="https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg" height={"300px"} width={"400px"} />
            <div class="hoverText">Happy</div>
            </div>

            <div className="hoverImage">
            <img onClick={() => navigate("/library/moods/sad")} src="https://www.rd.com/wp-content/uploads/2016/11/02_what_psychologists_wish_people_knew_about_depression_sad_day_PeopleImages.jpg" height={"300px"} width={"400px"} />
            <div className="hoverText">Sad</div>
            </div>

            <div className="hoverImage">
            <img onClick={() => navigate("/library/moods/lonely")} src="https://imgix.bustle.com/inverse/71/cb/2d/b7/319c/4e5c/950c/179d7578a046/loneliness-could-explain-the-associations-between-living-alone-and-higher-odds-of-mental-disorder-s.jpeg?w=2000&auto=format&q=70&fit=max&crop=faces" height={"300px"} width={"400px"} />
            <div className="hoverText">Lonely</div>
            </div>

            <div className="hoverImage">
            <img onClick={() => navigate("/library/moods/bored")} src="https://www.technologyvista.in/wp-content/uploads/2015/09/Bored_smartphone-718x523.jpg" height={"300px"} width={"400px"} />
            <div className="hoverText"> Bored</div>
            </div>

            <div className="hoverImage">
            <img onClick={() => navigate("/library/moods/relaxed")} src="https://www.rd.com/wp-content/uploads/2016/08/05_meditate_consistently_7_secrets_Frazzled_Squaredpixels.jpg" height={"300px"} width={"400px"} />
            <div className="hoverText">Relaxed</div>
            </div>

        </article>
        <article className="mood_button_container">
           <div className="mood_button"><button id="moodB"  onClick={() => navigate("/library/recommendation")}>Recommend a book</button></div>
           <div className="mood_button"><button id="moodB"   onClick={() => navigate("/library/myList")}>See My List of Books</button></div>
        </article>

    </>

}

