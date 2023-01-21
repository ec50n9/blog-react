import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import ArticleDetail, {articleDetailLoader} from "./routes/article-detail";
import Home from "./routes/home/home";
import Articles, {articlesLoader} from "./routes/articles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"articles",
                element: <Articles/>,
                loader: articlesLoader
            },
            {
                path: "articles/:articleId",
                element: <ArticleDetail/>,
                loader: articleDetailLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
