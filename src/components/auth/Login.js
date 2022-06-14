import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("library_user", JSON.stringify({
                        id: user.id
                    }))
                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }
    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Digital Library</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Become a member today!</Link>
            </section>
            <footer>
            <div className="footer__Copyright">&copy;Digital Mood Library</div>
            <div className="footer__Contact">
                <p>Contact</p>
                <p>Digital Mood Library</p>
                <p>Town, State Zip Code</p>
                <p>Phone Number</p>
                <p>Email</p>
                </div>
            </footer>
        </main>
    )
}