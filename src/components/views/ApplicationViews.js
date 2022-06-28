import { Outlet, Route, Routes } from "react-router-dom"
import { Genres } from "../Genres/Genres"
import { Home } from "../Home/Home"
import { Library } from "../Library/Library"
import { Moods } from "../Moods/Moods"
import { MyList } from "../MyList/MyList"
import { NewReaderForm } from "../newReaderForm/NewReaderForm"
import { ProfileSuccessChange } from "../Profile/ProfileSuccessChange"
import { ReaderForm } from "../Profile/ReaderForm"
import { Form } from "../RecommendationForm/Form"
import { SuccessPage } from "../SuccessPage/SuccessPage"


export const ApplicationViews = () => {
	return <Routes>
        <Route path="/" element={
        <>
            
            <Outlet />
        </>
        }>
            <Route path="home" element={ <Home />}/>
            <Route path="library" element = {< Library/>} />
            <Route path="library/genres" element={< Genres/>}/>
            <Route path="library/moods" element={ <Moods />}/>
            <Route path="profile" element={ <ReaderForm />}/>
            <Route path="library/recommendation" element={ <Form /> } />
            <Route path="library/success" element={ <SuccessPage /> } />
            <Route path="library/myList" element = {< MyList/>} />
            <Route path="newReaderForm" element = {< NewReaderForm/>} />
            <Route path="successChange" element = {< ProfileSuccessChange/>} />

        </Route>
    </Routes>
}