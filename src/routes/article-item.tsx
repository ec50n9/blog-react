import {Link} from "react-router-dom";

export default function ArticleItem(props) {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{props.article.title}</h2>
                <p>{props.article.headline}</p>
                <div className="card-actions justify-end">
                    <Link to={`/articles/${props.article.id}`}>
                        <button className="btn btn-accent">
                            查看
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}