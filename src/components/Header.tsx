import { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png"
import Container from "./Container"
import Navbar from "./Navbar"
import { Link } from "react-router-dom";
import { getProduct } from "./Services/Api";
import type { IProduct } from "./types/Server";
import { useShppingCartContext } from "./contexts/ShppingCartContext";
import cartImg from "../assets/images/shopping-cart.png"

function Header() {
    const { cartItem, handleIncreaseProductQty, handleDecreaseProductQty, handleRemoveProduct, cartQty } = useShppingCartContext();
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const data = await Promise.all(cartItem.map(item => getProduct(item.id)));
            setProducts(data);
        }
        if (cartItem.length > 0) {
            fetchProducts();
        } else {
            setProducts([]);
        }
    }, [cartItem]);

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
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenSign, setIsOpenSign] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="border-b transition-colors duration-300" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
            
            {/* Top Bar */}
            <div className="hidden sm:block border-b py-3.5 text-sm text-zinc-500 transition-colors" style={{ borderColor: 'var(--card-border)' }}>
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-phone text-base"></i>
                            <span>Call us: <span className="font-bold text-zinc-950 dark:text-zinc-200">+90 (531) 123 4567</span></span>
                        </div>
                        <div className="flex items-center gap-8">
                            <button
                                className="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity font-medium"
                                onClick={toggleDarkMode}
                            >
                                {darkMode ? (
                                    <>
                                        <i className="fa-regular fa-sun text-amber-500 text-base"></i>
                                        <span>Light Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-regular fa-moon text-base"></i>
                                        <span>Dark Mode</span>
                                    </>
                                )}
                            </button>

                            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity font-medium">
                                <i className="fa-solid fa-globe text-base"></i>
                                <span>English</span>
                            </button>

                            <button 
                                className="flex items-center gap-2.5 font-bold hover:opacity-80 transition-opacity"
                                onClick={() => setIsOpenSign(true)}
                            >
                                <i className="fa-regular fa-user text-base"></i>
                                <span>Sign In</span>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Middle Section */}
            <Container>
                <div className="py-8 flex justify-between items-center gap-12">
                    <Link to="/" className="flex-shrink-0">
                        <img src={Logo} alt="Mega Shop" className="h-12 w-auto object-contain dark:brightness-125" />
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-2xl items-center border rounded-2xl overflow-hidden p-1.5 shadow-sm" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}>
                        <select className="bg-transparent text-sm px-5 py-2.5 outline-none font-bold border-r" style={{ borderColor: 'var(--card-border)' }}>
                            <option className="bg-[var(--card-bg)] text-[var(--text)]">All categories</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search for products, brands..."
                            className="flex-1 bg-transparent px-5 py-3 text-base outline-none text-[var(--text)]"
                        />
                        <button className="px-5 py-2.5 transition-colors cursor-pointer hover:text-indigo-400">
                            <i className="fa-solid fa-magnifying-glass text-base"></i>
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 text-right">
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Support 24/7</span>
                            <span className="font-extrabold text-base mt-1">+90 (531) 123 4567</span>
                        </div>
                    </div>
                </div>
            </Container>

            <Navbar />

            {/* Sign-In / Sign-Up Modal */}
            {isOpenSign && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-md" onClick={() => setIsOpenSign(false)} />
                    
                    <div className="relative border w-full max-w-lg rounded-[32px] p-10 shadow-2xl z-10" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                        
                        <button 
                            onClick={() => setIsOpenSign(false)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full text-zinc-500 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors"
                            style={{ backgroundColor: 'var(--input-bg)' }}
                        >
                            <i className="fa-solid fa-xmark text-lg"></i>
                        </button>

                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-black">
                                {!isSignUp ? "Welcome Back" : "Create Account"}
                            </h3>
                            <p className="text-sm text-zinc-400 mt-2">
                                {!isSignUp ? "Please sign in to your account" : "Join us to enjoy premium features"}
                            </p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            {!isSignUp ? (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Username</label>
                                        <input type="text" placeholder="Username" className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Password</label>
                                        <input type="password" placeholder="••••••••" className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }} />
                                    </div>
                                    <button className="w-full font-extrabold text-base py-4 rounded-2xl hover:opacity-90 transition-opacity mt-8 shadow-lg" style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}>
                                        Login
                                    </button>
                                    <p className="text-center text-sm text-zinc-500 mt-8 pt-6 border-t" style={{ borderColor: 'var(--card-border)' }}>
                                        Don't have an account?{" "}
                                        <button type="button" className="font-bold underline text-[var(--text)]" onClick={() => setIsSignUp(true)}>
                                            Sign Up
                                        </button>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">National ID</label>
                                        <input type="text" placeholder="123456789" className="w-full px-5 py-4 rounded-2xl border text-base outline-none focus:border-zinc-500 transition-colors" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }} />
                                    </div>
                                    <button className="w-full font-extrabold text-base py-4 rounded-2xl hover:opacity-95 transition-opacity mt-8 shadow-lg" style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}>
                                        Register Account
                                    </button>
                                    <p className="text-center text-sm text-zinc-500 mt-8 pt-6 border-t" style={{ borderColor: 'var(--card-border)' }}>
                                        Already have an account?{" "}
                                        <button type="button" className="font-bold underline text-[var(--text)]" onClick={() => setIsSignUp(false)}>
                                            Login
                                        </button>
                                    </p>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            )}

            {/* Mobile Navigation Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-50 sm:hidden shadow-xl"
                style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
            >
                <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
            </div>
            
            <div className={`fixed inset-0 bg-black/30 backdrop-blur-xs z-40 sm:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)} />
            
            <div className="fixed top-0 right-0 w-80 h-full border-l transition-transform duration-300 z-40 sm:hidden p-10 flex flex-col justify-between"
                 style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', transform: isOpen ? "translateX(0)" : "translateX(100%)" }}>
                <div className="space-y-12 mt-16">
                    <img src={Logo} alt="Logo" className="h-10 w-auto dark:brightness-125" />
                    <nav className="flex flex-col gap-6 text-xl font-bold">
                        <Link to="/" onClick={() => setIsOpen(false)} className="hover:opacity-80">Home</Link>
                        <Link to="/Products" onClick={() => setIsOpen(false)} className="hover:opacity-80">Products</Link>
                        <Link to="/aboutus" onClick={() => setIsOpen(false)} className="hover:opacity-80">About Us</Link>
                        <Link to="/callus" onClick={() => setIsOpen(false)} className="hover:opacity-80">Contact Us</Link>
                    </nav>
                </div>
            </div>

            {/* Floating Cart Trigger */}
            <div className="fixed bottom-8 left-8 z-50">
                <button 
                    onClick={() => setIsOpen2(!isOpen2)}
                    className="relative w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                    <img src={cartImg} className="w-7 h-7 brightness-0 invert" alt="Cart" />
                    {cartQty !== 0 && (
                        <span className="absolute -top-2 -right-2 w-7 h-7 text-xs font-black bg-zinc-950 text-white flex justify-center items-center rounded-full border-2 border-white dark:border-zinc-950">
                            {cartQty}
                        </span>
                    )}
                </button>
            </div>

            {/* Drawer Backdrop */}
            {isOpen2 && (
                <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-xs" onClick={() => setIsOpen2(false)} />
            )}

            {/* Cart Side Drawer */}
            <div
                className="fixed top-0 right-0 w-full sm:w-[460px] h-full border-l z-[60] transform transition-transform duration-500 ease-in-out shadow-2xl flex flex-col justify-between"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', transform: isOpen2 ? "translateX(0)" : "translateX(100%)" }}
            >
                <div className="p-8 border-b flex justify-between items-center" style={{ borderColor: 'var(--card-border)' }}>
                    <p className="text-2xl font-black">Your Cart</p>
                    <button onClick={() => setIsOpen2(false)} className="text-zinc-400 hover:text-zinc-600">
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-6">
                    {cartItem.length === 0 ? (
                        <div className="text-center py-20 text-zinc-400 text-base font-medium">
                            Your cart is empty.
                        </div>
                    ) : (
                        cartItem.map((item, index) => {
                            const product = products[index];
                            return (
                                <div key={item.id} className="flex gap-5 p-5 rounded-3xl border" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}>
                                    {product && (
                                        <img
                                            className="h-20 w-20 object-cover rounded-2xl border flex-shrink-0"
                                            style={{ borderColor: 'var(--card-border)' }}
                                            src={product.imageUrl}
                                            alt={product.title}
                                        />
                                    )}
                                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-bold text-base truncate">{product?.title}</h4>
                                            <p className="text-sm font-semibold text-zinc-400 mt-1">${product?.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex items-center rounded-xl p-1 bg-zinc-200/50 dark:bg-zinc-800">
                                                <button onClick={() => handleDecreaseProductQty(item.id)} className="w-8 h-8 flex items-center justify-center text-sm font-bold">-</button>
                                                <span className="px-3 text-sm font-bold">{item.qty}</span>
                                                <button onClick={() => handleIncreaseProductQty(item.id)} className="w-8 h-8 flex items-center justify-center text-sm font-bold">+</button>
                                            </div>
                                            <button onClick={() => handleRemoveProduct(item.id)} className="text-sm font-bold text-rose-500 hover:text-rose-600">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="p-8 border-t" style={{ borderColor: 'var(--card-border)' }}>
                    <Link to="/cart" onClick={() => setIsOpen2(false)}>
                        <button className="w-full text-base uppercase tracking-wider font-extrabold py-5 rounded-2xl hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}>
                            Go to Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;