import { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png"
import Container from "./Container"
import Navbar from "./Navbar"
import { Link } from "react-router-dom";
function Header() {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");
        return saved ? saved === "dark" : false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(v => !v);

    const [isOpen, setIsOpen] = useState(false);





    return (
        <div className="shadow bg-[var(--bg)]">
            <div className="upper_section py-2 hidden sm:block">
                <div className="Upper_section_of_header w-full h-7 flex justify-between border-b-1 border-gray-200">
                    <div className="Left_side ms-3">
                        <i className="fas fa-light fa-phone"></i>
                        <span className="text-gray-700 m-1 py-10"> Call us : +90 (531) 123 4567</span>
                    </div>
                    <div className="flex items-center gap-6 text-gray-600">

                        <button
                            className="Day|Night_button cursor-pointer"
                            type="button" onClick={toggleDarkMode}
                            title={darkMode ? "Switch to light" : "Switch to dark"}>

                            {darkMode ? (
                                <p> <i className="far fa-regular fa-sun me-1"></i>Day</p>
                            ) : (
                                <p> <i className="far fa-light fa-moon me-1"></i>Night</p>
                            )}
                        </button>



                        <button className="flex items-center gap-2 cursor-pointer">
                            <i className="fas fa-light fa-language "></i>
                            <span className="">Language:</span>
                            <span className="font-semibold">English</span>
                        </button>

                        <button className="flex items-center gap-2 text-gray-700 cursor-pointer ">
                            <i className="far fa-user text-lg"></i>
                            <span className="font-medium me-3">Sign-in</span>
                        </button>

                    </div>
                </div>
            </div>


            <div
                onClick={() => setIsOpen(!isOpen)}
                className="hamburgerMenu fixed top-3 right-5 w-12 h-12 bg-[var(--text)]  items-center justify-center cursor-pointer z-50 sm:hidden"
            >
                <i className="fa-solid fa-bars text-3xl white-force "></i>
            </div>
            <div
                className={`fixed top-0 right-0 w-70 h-full bg-[var(--bg)] transition-transform duration-500 z-40 sm:hidden
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="middleSection flex flex-col items-center">
                    <div className="HelloLogo w-40 h-20 bg-amber-300 mt-10">
                        <p className="text-center">Logo will disappear here</p>
                    </div>
                    <ul className="flex flex-col gap-4 py-3 mt-10">
                        <li className="inline">
                            <Link to="/">
                                <i className="far fa-light fa-house me-1"></i> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Products">Products</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About - us</Link>
                        </li>
                        <li>
                            <Link to="/callus">Call - us</Link>
                        </li>
                    </ul>
                </div>
            </div>


            <Container>
                <div className="Header_section w-full h-auto flex justify-between items-center">
                    <div className="Logo_of_Site w-50 py-2 ">
                        <img src={Logo} alt="logo picture" />
                    </div>
                    <div className="Search_box w-full max-w-lg mx-auto border rounded-full overflow-hidden border-[var(--text)] hidden sm:flex">
                        <button className="px-4 py-2 bg-white flex items-center gap-1">
                            All categories ▼
                        </button>
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="flex-1 px-5 py-3 outline-none text-[var(--text)]"
                        />
                        <button className="px-4 py-2 bg-gray-600 text-white">
                            <i className="fas fa-light fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className="Calling hidden lg:block">
                        <div className="up mb-2">
                            <i className="fas fa-light fa-phone"></i>
                            <span className="text-gray-500 m-1"> Call us : +90 (531) 123 4567</span>
                        </div>
                        <div className="down">
                            <i className="fas fa-light fa-envelope"></i>
                            <span className="text-gray-500 m-1"> Our E-mail : contact@homayonazar.com</span>
                        </div>
                    </div>
                </div>
            </Container>
            <Navbar />
        </div>
    )
}

export default Header