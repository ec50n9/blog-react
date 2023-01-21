import {Link, useNavigate} from "react-router-dom";
import "./nav.css"

export default function Nav() {
    const navigate = useNavigate()

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                         className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </li>
                <li className="w-0.5 h-5 bg-gray-300 rounded-full"></li>
                <li className="nav-list__item">
                    <Link to={`/`}>主页</Link>
                </li>
                <li className="nav-list__item">
                    <Link to={`articles`}>文章</Link>
                </li>
                <li className="nav-list__item">
                    <a href="https://github.com/ec50n9">Github</a>
                </li>
            </ul>
        </nav>
    )
}