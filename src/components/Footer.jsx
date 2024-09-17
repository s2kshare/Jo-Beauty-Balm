import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer relative bottom-0 bg-neutral text-white p-10">
            <aside>
                <img
                    src="./logo-black.png"
                    height={50}
                    width={50}
                    alt=""
                    srcset=""
                    className="invert"
                />
                <p>
                    Jo's Beauty Balm
                    <br />
                    &copy; 2024
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Pages</h6>
                <Link to={"/Jo-Beauty-Balm/"} className="link link-hover">
                    Home
                </Link>
                {/* <Link to={"/Jo-Beauty-Balm/about"} className="link link-hover">
                    About us
                </Link> */}
                <Link
                    to={"/Jo-Beauty-Balm/services"}
                    className="link link-hover"
                >
                    Services
                </Link>
                <Link
                    to={"/Jo-Beauty-Balm/contactus"}
                    className="link link-hover"
                >
                    Contact us
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <Link
                    to={"mailto:josbeautybalm@gmail.com"}
                    className="link link-hover"
                >
                    Email
                </Link>
                <Link
                    target="_blank"
                    to={"https://www.facebook.com/JosBeautyBalm"}
                    className="link link-hover"
                >
                    Facebook
                </Link>
            </nav>
        </footer>
    );
}

export default Footer;
