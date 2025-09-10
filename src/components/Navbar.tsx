import { Link } from "react-router-dom"
import Container from "./Container"

function Navbar() {
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
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About - us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Call - us</Link>
                            </li>
                        </ul>
                        <div className="cart">
                            <Link to="/"><i className="fas fa-light fa-cart-shopping me-1 text-lg"></i><p className="inline px-1">Cart</p></Link>
                            <Link to="/"><i className="fas fa-light fa-heart ms-10 text-lg"></i><p className="inline px-1">Favorite</p></Link>

                        </div>

                    </div>

                </Container>
            </nav>
        </div>
    )
}

export default Navbar