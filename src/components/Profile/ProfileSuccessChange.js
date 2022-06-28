import { useNavigate } from "react-router-dom"

import "./Profile.css"



export const ProfileSuccessChange = () => {
    const navigate = useNavigate()

    return <article>
        <section>
            <div className="profile__title">Your information has been updated!</div>
          <div className="profile__title">  <button onClick={() => navigate("/home")}>Back to Home Page</button> </div>
        </section>
    </article>
}