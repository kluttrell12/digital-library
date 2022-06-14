import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/moods">Moods</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/library">Library</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/recommendations">Recommendation Form</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/cart">Cart</Link>
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
    )
}