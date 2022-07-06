import React, { useState } from "react"
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
                    <div className="form__login__up">
                        <div className="login__logo">
                        <img src="https://ncwc.edu/wp-content/uploads/2016/06/library-icon.png" height={"50px"} width={"50px"}/>
                        </div>
                    <h1>Digital Library</h1>
                    </div>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control__login"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <div>
                            <button id="boredB" className="button__login">
                                Sign in
                            </button>
                        </div>
                        <section >
                            <div className="button__register">
                                <button id="boredB"
                                    onClick={
                                        () => {
                                            navigate("/register")
                                        }
                                    }>
                                    Become a member today!
                                </button>
                            </div>
                        </section>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}