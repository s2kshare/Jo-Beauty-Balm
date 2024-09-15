import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppWrapper />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/contactus",
                element: <Contact />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

function AppWrapper() {
    return (
        <div className="">
            <Navbar />
            <div className="pt-24">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
