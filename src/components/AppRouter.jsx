import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import UserPostsPage from "../pages/user-posts-page/UserPostsPage";

const AppRouter = () => {
    return (
        <Routes >
            <Route path="/">
                <Route index element={<Home/>} />
                <Route path="user/:id" element={<UserPostsPage/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouter;