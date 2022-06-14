import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./auth/Authorized"
import { Login } from "./auth/Login"
import { Register } from "./auth/Registration"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"

export const DigitalLibrary = () => {
    
    return <BrowserRouter>
   <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={
                <Authorized>
                    <>
                        <NavBar />
                        <ApplicationViews />
                    </>
                </Authorized>
            } />
        </Routes>
        </BrowserRouter>
}
