import { Link } from "react-router-dom"
import Container from "./Container"

function Navbar() {
    return (
        <div className="border-y transition-colors hidden sm:block" style={{ backgroundColor: 'var(--navbar-bg)', borderColor: 'var(--card-border)' }}>
            <Container>
                <div className="flex justify-between items-center py-3.5">
                    <ul className="flex items-center gap-8 text-sm font-semibold">
                        <li>
                            <Link to="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                                <i className="fa-solid fa-house text-xs opacity-70"></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Products" className="hover:opacity-80 transition-opacity">Products</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="hover:opacity-80 transition-opacity">About Us</Link>
                        </li>
                        <li>
                            <Link to="/callus" className="hover:opacity-80 transition-opacity">Contact Us</Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-2 text-sm font-semibold">
                        <Link to="/" className="flex items-center gap-1.5 hover:text-rose-500 transition-colors">
                            <i className="fa-regular fa-heart opacity-70 hover:text-rose-500"></i>
                            <span>Favorites</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar;