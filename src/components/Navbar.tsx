import { Link } from "react-router-dom"
import Container from "./Container"
import { useShppingCartContext } from "./contexts/ShppingCartContext";

function Navbar() {

    const { cartQty } = useShppingCartContext();

    return (
        <div>
            <nav className="Navbar w-full h-auto bg-[var(--myGreen)]">
                <Container>
                    <div className="navbar flex justify-between items-center">
                        <ul className="flex gap-4 py-3">
                            <li className="inline">
                                <Link to="/">
                                    <i className="far fa-light fa-house me-1"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/Products">Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About - us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Call - us</Link>
                            </li>
                        </ul>
                        <div className="cart">
                            <Link to="/cart">
                            <button 
                                className="relative p-4 cursor-pointer transition-colors duration-300"
                            >
                                Cart
                                {cartQty !== 0 && (
                                    <span className="absolute top-2 -right-2 w-6 h-6 text-xs font-bold bg-red-500 text-white flex justify-center items-center rounded-full">
                                        {cartQty}
                                    </span>
                                )}
                            </button>
                        </Link>
                            <Link to="/"><i className="fas fa-light fa-heart ms-10 text-lg"></i><p className="inline px-1">Favorite</p></Link>

                        </div>

                    </div>

                </Container>
            </nav>
        </div>
    )
}

export default Navbar