import { useNavigate } from "react-router-dom"


export const ProfileSuccessChange = () => {
    const navigate = useNavigate()

    return <article>
        <section>
            <h3>Your information has been updated!</h3>
            <button onClick={() => navigate("/home")}>Back to Home Page</button>
            <br></br>
        </section>
    </article>
}