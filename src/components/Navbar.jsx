import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-base-100 h-24 fixed z-20">
            <div className="navbar-start">
                <Link to={"/"} className="btn btn-ghost lg:flex hidden text-xl">
                    Jo's Beauty Balm
                </Link>
                <Link to={"/"}>
                    <img
                        src="./logo-black.png"
                        alt=""
                        className="lg:hidden visible btn"
                        width={"75rem"}
                        height={"75rem"}
                    />
                </Link>
            </div>
            <div className="navbar-center">
                <Link to={"/"}>
                    <img
                        src="./logo-black.png"
                        alt=""
                        className="hidden lg:flex btn"
                        width={"75rem"}
                        height={"75rem"}
                    />
                </Link>

                <Link
                    to={"/"}
                    className="btn btn-ghost text-xl visible lg:hidden font-semibold"
                >
                    Jo's Beauty Balm
                </Link>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About Us</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <li>
                            <Link to={"/services"}>Services</Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content right-0 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/about"}>About Us</Link>
                        </li>
                        <li>
                            <Link to={"/contactus"}>Contact</Link>
                        </li>
                        <li>
                            <Link to={"/services"}>Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
