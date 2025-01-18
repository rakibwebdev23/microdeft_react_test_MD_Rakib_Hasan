import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);