import { useNavigate } from "react-router-dom"


export const SuccessPage = ({id}) => {
    const navigate = useNavigate()

    return <article>
        <section>
            <h3>Thank your for your Book Recommendation!</h3>
            <button onClick={() => navigate("/library")}>Back to Library</button>
            <br></br>
        </section>
    </article>
}