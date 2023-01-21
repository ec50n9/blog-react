import Footer from "../components/footer/footer";
import {Outlet} from "react-router-dom";
import Nav from "../components/nav/nav";

export default function Root() {
    return <>
        <Nav/>
        <main className="box-bg">
            <Outlet/>
        </main>
        <Footer/>
    </>
}