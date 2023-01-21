import {Link, useLoaderData} from "react-router-dom";
import ArticleItem from "./article-item";

export async function articlesLoader() {
    const response = await fetch("http://localhost:8080/api/articles")
    const json = await response.json()
    const articles = json.data
    return {articles}
}

export default function Articles() {
    const {articles} = useLoaderData()
    return (
        <div className="container mx-auto pt-10 overflow-auto">
            {articles.length ? (
                <ul className="flex flex-col gap-8 p-8">
                    {articles.map(article => (
                        <li key={article.id}>
                            <ArticleItem article={article}/>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>
                    <i>暂时没有文章哦</i>
                </p>
            )}
        </div>
    )
}