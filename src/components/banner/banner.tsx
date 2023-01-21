import {useEffect, useState} from "react";
import noisePng from "../../assets/noise.png";
import {Link} from "react-router-dom";

function useRoleText() {
    const roleArr = ["前端开发者", "学生", "青年"]
    let roleIndex = 0
    const [roleText, setRoleText] = useState(roleArr[roleIndex])
    useEffect(() => {
        const timer = setInterval(() => {
            if (roleIndex < roleArr.length - 1) roleIndex++
            else roleIndex = 0
            setRoleText(roleArr[roleIndex])
        }, 1500)
        return () => clearInterval(timer)
    }, [])
    return {roleText}
}

function Banner() {
    const {roleText} = useRoleText()

    return (
        <header className="header"
                style={{backgroundImage: `url(${noisePng})`}}>
            <h1 className="header__title">我是<br/>一名 <span className="header__role">{roleText}</span> ...</h1>
        </header>
    )
}

export default Banner
