import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return <>
        <div className="navBarContainer">
            
            <a className="navbar">
                <div className="logoImg">
                <img src="https://ncwc.edu/wp-content/uploads/2016/06/library-icon.png" height={"35px"} width={"35px"} />
                </div>
                <div className="logo__navbar__title">Digital Library</div>
                <div className="navBar_item_container">
                <a className="navbar__item active">
                    <Link className="navbar__link" to="/home">Home</Link>
                </a>
                <a className="navbar__item active">
                    <Link className="navbar__link" to="/library">Library</Link>
                </a>
                <a className="navbar__item active">
                    <Link className="navbar__link" to="/profile">Profile</Link>
                </a>
                <a className="navbar__item active">
                    <Link className="navbar__link" to="library/myList"> My List</Link>
                </a>
                </div>
                <div className="logout__">
                {
                    localStorage.getItem("library_user")
                        ? <a className="navbar__item navbar__logout">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("library_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </a>
                        : ""
                }
                </div>
            </a>
        </div>

    </>
}