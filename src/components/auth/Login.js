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
                    navigate("/home")
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
                        <button>
                            Sign in
                        </button>
            <section className="link--register">
                <Link to="/register">Become a member today!</Link>
            </section>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}