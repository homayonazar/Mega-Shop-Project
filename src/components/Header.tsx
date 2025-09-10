import { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png"
import Container from "./Container"
import Navbar from "./Navbar"
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






    return (
        <div className="shadow bg-[var(--bg)]">
            <div className="Upper_section_of_header w-full h-7 flex justify-between border-b-1 border-gray-200">                <div className="Left_side ms-3">
                <i className="fas fa-light fa-phone"></i>
                <span className="text-gray-700 m-1"> Call us : +90 (531) 123 4567</span>
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
            <Container>
                <div className="Header_section w-full h-auto flex justify-between items-center ">
                    <div className="Logo_of_Site w-50 py-2">
                        <img src={Logo} alt="logo picture" />
                    </div>
                    <div className="Search_box flex w-full max-w-lg mx-auto border rounded-full overflow-hidden border-[var(--text)]">
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
                    <div className="Calling">
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