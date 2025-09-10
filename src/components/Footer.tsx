import paymentImg from "../assets/images/Payment.png"


function Footer() {
    return (
        <div>
            <div className="Footer w-full h-auto bg-[var(--navbar)] p-10 flex justify-between flex-wrap">
                <div className="first_sec w-60 h-75 flex flex-col p-3 text-center">
                    <p>We Accept this Payment</p>
                    <img src={paymentImg} className="mt-5" alt="peyment method image" />

                </div>
                <div className="first_sec w-60 h-75  flex flex-col p-2 text-center">
                    <h3 className="text-2xl font-bold border-b-1 border-gray-400 ">Get Help</h3>
                    <p className="p-2">Privacy Notice</p>
                    <p className="p-2">Shopping FAQs</p>
                    <p className="p-2">Returns & Refunds</p>
                    <p className="p-2">Delivery Information</p>
                    <p className="p-2">Sale Terms & Conditions</p>
                </div>
                <div className="first_sec w-60 h-75  flex flex-col p-2 text-center">
                    <h3 className="text-2xl font-bold border-b-1 border-gray-400">Popular categories</h3>
                    <p className="p-2">Smartwatch</p>
                    <p className="p-2">Smart Phones</p>
                    <p className="p-2">Laptop & Tablet</p>
                    <p className="p-2">Cameras & Video</p>
                    <p className="p-2">Computer Screen</p>
                    <p className="p-2">Audio Equipments</p>
                    <p className="p-2">Gaming Accessories</p>
                </div>
                <div className="first_sec w-60 h-75  flex flex-col p-2 text-center">
                    <h3 className="text-2xl font-bold border-b-1 border-gray-400">Customer Care</h3>
                    <p className="p-2">Blog</p>
                    <p className="p-2">Cart</p>
                    <p className="p-2">Shop</p>
                    <p className="p-2">Wishlist</p>
                    <p className="p-2">Checkout</p>
                    <p className="p-2">My Account</p>
                </div>
                <div className="first_sec w-60 h-75  flex flex-col p-2 text-center">
                    <h3 className="text-2xl font-bold border-b-1 border-gray-400">Contact</h3>
                    <p className="p-2"><i className="fas fa-light fa-location-dot p-3"></i>Istanbul - Turkey</p>
                    <p className="p-2"><i className="fas fa-light fa-phone"></i>+90 (531) 1234567</p>
                    <p className="p-2"><i className="fas fa-light fa-envelope"></i>homayonazar.com</p>
                </div>

            </div>
            <div className="Sletter bg-[#333e48] flex justify-center items-center p-4">
                <h2 className="text-white text-xl">
                    Join our newsletter for $10 offs
                    <span className=" text-white white-force ms-5 text-base">
                        Register now to get latest updates on promotions & coupons.
                    </span>
                </h2>
                <input
                    type="text"
                    placeholder="Enter your email address"
                    className="outline-0 bg-amber-50 w-75 rounded-3xl h-9 ms-5 px-3"
                />
                <button className="bg-red-500 text-amber-50 px-4 py-2 rounded-3xl m-2 text-sm">
                    Subscribe
                </button>
            </div>
            <div className="SocialMedia flex flex-col w-full h-20bg-[var(--navbar)]">
                <div className="flex flex-row justify-center gap-4 p-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
                        <i className="fa-brands fa-instagram text-xl"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
                        <i className="fa-brands fa-telegram text-xl"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
                        <i className="fa-brands fa-x-twitter text-xl"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
                        <i className="fa-brands fa-linkedin text-xl"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400">
                        <i className="fa-brands fa-github text-xl"></i>
                    </div>
                </div>
                <div className="buttom_footer flex justify-center shadow border-t-1 border-gray-200 p-2">
                    <span>© 2025. All right reserved – Designed by <a href="https://homayonazar.com/" className="text-blue-600 font-bold">Homayonazar</a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer