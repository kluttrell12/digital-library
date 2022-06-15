import { Outlet, Route, Routes } from "react-router-dom"
import { BookList } from "../Library/BookList"
import { Library } from "../Library/Library"
import { Moods } from "../Moods/Moods"
import { BookMoodsList } from "../Moods/MoodsList"
import { Form } from "../Recommendation Form/Form"

export const ApplicationViews = () => {
	return <Routes>
        <Route path="/" element={
        <>
            <h1 className="title--main">Welcome to The Digital Library</h1>
            <Outlet />
        </>
        }>
        <Route path="moods/:moodId" element={<BookMoodsList/>}/>
        <Route path="moods" element ={<Moods/>}/>
        <Route path="library" element={<Library/>}/>
        <Route path="library/:bookGenreId" element={ <BookList />}/>
        <Route path="recommendations" element={ <Form/>} />

        </Route>
    </Routes>
}