import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {ToDosPage} from "./pages/ToDosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {path: 'todos', element: <ToDosPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]},
]);

export {router}