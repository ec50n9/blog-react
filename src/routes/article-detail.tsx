import {useLoaderData} from "react-router-dom";
import showdown from 'showdown'

export async function articleDetailLoader({params}) {
    const response = await fetch(`http://localhost:8080/api/articles/${params.articleId}`)
    const json = await response.json()
    const articleDetail = json.data
    return {articleDetail}
}

export default function ArticleDetail() {
    const {articleDetail} = useLoaderData()
    const converter = new showdown.Converter()
    const contentHtml = converter.makeHtml(articleDetail.content)
    return (
        <div className="container mx-auto px-8 py-16">
            <article className="prose" dangerouslySetInnerHTML={{__html: contentHtml}}/>
        </div>
    )
}