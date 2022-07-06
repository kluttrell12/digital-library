import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
export const Register = (props) => {
    const [reader, setReader] = useState({
        email: "",
        fullName: ""
    })
    let navigate = useNavigate()
    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reader)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("library_user", JSON.stringify({
                        id: createdUser.id,
                    }))
                    navigate("/newReaderForm")
                }
            })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${reader.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }
    const updateReader = (evt) => {
        const copy = {...reader}
        copy[evt.target.id] = evt.target.value
        setReader(copy)
    }
    return (
        <main className="container--login" style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
            <div className="form__login__up">
                        <div className="login__logo">
                        <img src="https://ncwc.edu/wp-content/uploads/2016/06/library-icon.png" height={"50px"} width={"50px"}/>
                        </div>
                    <h1>Please Register to use Digital Library</h1>
                    </div>
               <fieldset>
                    <label htmlFor="fullName"> Full Name </label>
                    <input onChange={updateReader}
                           type="text" id="fullName" className="form-control__login"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateReader}
                        type="email" id="email" className="form-control__login"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <button
                    id="boredB"
                    className="button__login"
                    type="submit"> Register </button>
                </fieldset>
            </form>
           
        </main>
    )
}