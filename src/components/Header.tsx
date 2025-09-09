import Logo from "../assets/images/Logo.png"
import Container from "./Container"
function Header() {
    return (
        <div className="shadow">
            <div className="Upper_section_of_header w-full h-7 flex justify-between border-b-1 border-gray-200">                <div className="Left_side ms-3">
                <i className="fas fa-light fa-phone"></i>
                <span className="text-gray-700 m-1"> Call us : +90 (531) 123 4567</span>
            </div>
                <div className="flex items-center gap-6 text-gray-600">
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
                    <div className="Search_input ">
                        <input type="text" placeholder="what are you looking for" />
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
        </div>
    )
}

export default Header