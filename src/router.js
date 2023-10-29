import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ToDosPage} from "./pages/ToDosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element:<Navigate to={'todos'}/>},
            {path: 'todos', element: <ToDosPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {path: 'comments', element: <CommentsPage/>, children:[
                    {path: 'post', element: <PostsPage/>}
                ]},
        ]},
]);

export {router}