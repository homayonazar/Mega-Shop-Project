import paymentImg from "../assets/images/Payment.png"

function Footer() {
    return (
        <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
            {/* بخش ۱: خبرنامه لوکس و کشیده */}
            <div className="border-b border-zinc-100 dark:border-zinc-900 py-12 hidden sm:block">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 className="text-xl font-bold tracking-tight">Join our newsletter for $10 off</h3>
                        <p className="text-sm text-zinc-400 mt-1">Register now to get latest updates on promotions & coupons.</p>
                    </div>
                    <div className="flex items-center gap-3 w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm px-5 py-3 rounded-xl outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                        />
                        <button className="bg-zinc-950 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* بخش ۲: ستون‌های ناوبری فوتر */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
                {/* پذیرش پرداخت */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Payment Support</h4>
                    <p className="text-sm text-zinc-500">We securely accept worldwide card processors.</p>
                    <img src={paymentImg} className="h-6 w-auto object-contain brightness-95 dark:brightness-125" alt="Payment methods" />
                </div>

                {/* دریافت راهنما */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Get Help</h4>
                    <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                        {["Privacy Notice", "Shopping FAQs", "Returns & Refunds", "Delivery Information", "Sale Terms & Conditions"].map((item) => (
                            <li key={item} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* دسته‌بندی‌های محبوب */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Popular Categories</h4>
                    <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                        {["Smartwatch", "Smartphones", "Laptop & Tablet", "Cameras & Video", "Audio Equipments"].map((item) => (
                            <li key={item} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* مراقبت از مشتری */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Customer Care</h4>
                    <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                        {["Blog", "Cart", "Shop", "Wishlist", "My Account"].map((item) => (
                            <li key={item} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* تماس و آدرس */}
                <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Contact us</h4>
                    <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                        <li className="flex items-center gap-2"><i className="fa-solid fa-location-dot text-zinc-400 w-4"></i><span>Istanbul, Turkey</span></li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-phone text-zinc-400 w-4"></i><span>+90 (531) 1234567</span></li>
                        <li className="flex items-center gap-2"><i className="fa-solid fa-envelope text-zinc-400 w-4"></i><span>contact@homayonazar.com</span></li>
                    </ul>
                </div>
            </div>

            {/* بخش ۳: شبکه‌های اجتماعی و حقوق مادی و معنوی */}
            <div className="border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/10">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* آیکون‌های شبکه‌های اجتماعی بدون قابِ زمخت */}
                    <div className="flex gap-4">
                        {["instagram", "telegram", "x-twitter", "linkedin", "github"].map((social) => (
                            <a 
                                key={social}
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                            >
                                <i className={`fa-brands fa-${social} text-sm`}></i>
                            </a>
                        ))}
                    </div>

                    {/* کپی رایت */}
                    <div className="text-xs text-zinc-400 text-center md:text-right">
                        <span>© 2026. All rights reserved – Designed by <a href="https://homayonazar.com/" className="text-zinc-900 dark:text-white font-bold hover:underline">Homayonazar</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;