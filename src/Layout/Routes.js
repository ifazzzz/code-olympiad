import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Home from "../Components/Home";
import Statistics from "../Components/Statistics";
import TopicQuiz from "../Components/TopicQuiz";
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
                path : '/topics/:id',
                loader : (({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)),
                element : <TopicQuiz></TopicQuiz>,
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