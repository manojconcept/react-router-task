import { Link } from "react-router-dom";
import "./Header.css";

let Header = () => {
    return (
        <>
            <nav className="header container">
                <div className="headerContent container">
                    <Link to={"/"}><button className="btnheaderContent">All</button></Link>
                    <Link to={"/FullStackDev"}><button className="btnheaderContent">FULL STACK</button></Link>
                    <Link to={"/DataScience"}> <button className="btnheaderContent">DATA SCIENCE</button></Link>
                    <Link to={"/CyberSecurity"}><button className="btnheaderContent">CYBER SECURITY</button></Link>
                    <Link to={"/Career"}><button className="btnheaderContent">CAREER</button></Link>
                </div>
            </nav>
        </>
    );
}

export default Header;