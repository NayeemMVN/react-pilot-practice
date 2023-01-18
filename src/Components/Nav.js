import logo from "../images/logo.svg"
import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav className="md:flex md:justify-between md:items-center">
            <div>
                <Link to="/">
                    <img src={logo} alt="Laracasts Logo" width="165" height="16"></img>
                </Link>
            </div>

            <div className="mt-8 md:mt-0">
                <a href="/" className="text-xs font-bold uppercase">Home Page</a>

                <Link to="/"
                   className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">
                    Subscribe for Updates
                </Link>
            </div>
        </nav>
    )
}


export default Nav