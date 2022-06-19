import { Outlet, Route, Routes } from "react-router-dom"
import { Genres } from "../Genres/Genres"
import { Home } from "../Home/Home"
import { Library } from "../Library/Library"
import { Moods } from "../Moods/Moods"
import { MyList } from "../MyList/MyList"


export const ApplicationViews = () => {
	return <Routes>
        <Route path="/" element={
        <>
            
            <Outlet />
        </>
        }>
            <Route path="home" element={ <Home />}/>
            <Route path="genres" element={< Genres/>}/>
            <Route path="moods" element={ <Moods />}/>
            <Route path="library" element = {< Library/>} />
            <Route path="myList" element = {< MyList/>} />

        </Route>
    </Routes>
}