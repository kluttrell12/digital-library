import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return <>
        <div className="logo__navbar">
        <img  src="https://ncwc.edu/wp-content/uploads/2016/06/library-icon.png" height={"50px"} width={"50px"}/>
        <div className="logo__navbar__title">Digital Library</div>
        </div>
        <ul className="navbar">
             <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/library">Library</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="library/myList"> My List</Link>
            </li>
            {
                localStorage.getItem("library_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("library_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    
    </>
}