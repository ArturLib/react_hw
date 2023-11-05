import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PublicLayout, AuthLayout} from "./layouts";
import {LoginPage, CarsPage, RegisterPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'login'}/>},
            {
                element: <PublicLayout/>, children: [
                    {path: 'login', element: <LoginPage/>},
                    {path: 'register', element: <RegisterPage/>}
                ]
            },
            {
                element: <AuthLayout/>, children: [
                    {path: 'cars', element: <CarsPage/>}
                ]
            }
        ]
    }
]);

export {router}