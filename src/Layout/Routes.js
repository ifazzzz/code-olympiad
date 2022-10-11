import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import Topics from "../Components/Topics";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        loader: (() => fetch('https://openapi.programming-hero.com/api/quiz')),
        children : [
            {
                path : '/',
                element: <Home></Home>,

            },
            {
                path : '/home',
                element: <Home></Home>,

            },
            {
                path : '/topics',
                element: <Topics></Topics>,

            },
            {
                path : '/Statistics',
                element: <Statistics></Statistics> 
            },
            {
                path : '/blog',
                element: <Blog></Blog> 
            },
            {
                path : '/about',
                element: <About></About> 
            }
        ],
    }
])

export default router;