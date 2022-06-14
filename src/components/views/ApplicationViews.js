import { Outlet, Route, Routes } from "react-router-dom"
import { Library } from "../Library/Library"
import { MoodsList } from "../Moods/MoodsList"
import { Form } from "../Recommendation Form/Form"

export const ApplicationViews = () => {
	return <Routes>
        <Route path="/" element={
        <>
            <h1 className="title--main">Welcome to The Digital Library</h1>
            <Outlet />
        </>
        }>
        <Route path="moods" element={<MoodsList/>}/>
        <Route path="library" element={<Library/>}/>
        <Route path="library/:bookId" element={ <Library />}/>
        <Route path="recommendations" element={ <Form/>} />
        </Route>
    </Routes>
}