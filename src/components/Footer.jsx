import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <img
                    src="./logo-black.png"
                    height={50}
                    width={50}
                    alt=""
                    srcset=""
                />
                <p>
                    Jo's Beauty Balm
                    <br />
                    &copy; 2024
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Pages</h6>
                <Link to={"/"} className="link link-hover">
                    Home
                </Link>
                <Link to={"/about"} className="link link-hover">
                    About us
                </Link>
                <Link to={"/services"} className="link link-hover">
                    Services
                </Link>
                <Link to={"/contactus"} className="link link-hover">
                    Contact us
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <Link to={"/"} className="link link-hover">
                    Email
                </Link>
                <Link to={"/"} className="link link-hover">
                    Facebook
                </Link>
            </nav>
        </footer>
    );
}

export default Footer;
