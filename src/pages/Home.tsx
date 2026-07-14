import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../components/Services/Api"
import type { IProduct } from "../components/types/Server"

// کامپوننت‌ها
import Container from "../components/Container"
import Product from "../components/Product"
import Spinner from "../components/Spinner"

// تصاویر
import imageMiddle from "../assets/images/middleImage.jpg"
import middleimagePhoto from "../assets/images/img-prd9.webp"
import img1Right from "../assets/images/img1Right.png"
import img2Right from "../assets/images/img2Right.png"
import tvPic from "../assets/images/tv.webp"
import boxpic1 from "../assets/images/withOutBg/img-prd10.webp"

export default function Home() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getProducts()
            .then((result) => setProducts(result.products))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="transition-colors duration-300">
            <Container>
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 pb-16 items-stretch">
                    
                    {/* Sidebar Categories */}
                    <div className="hidden lg:block lg:col-span-3 border rounded-3xl p-6 shadow-sm" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                        <div className="flex items-center gap-2 pb-4 mb-4 border-b" style={{ borderColor: 'var(--card-border)' }}>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Categories</h3>
                        </div>
                        <nav className="flex flex-col gap-1">
                            {[
                                "Audio Equipments", "Laptop & Tablet", "Gaming Accessories", 
                                "Headphone", "Smartphone", "Camera & Video", "Smartwatch"
                            ].map((cat, idx) => (
                                <Link 
                                    key={idx} 
                                    to="/products" 
                                    className="px-3 py-2.5 rounded-xl text-zinc-500 hover:text-[var(--text)] hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40 transition-all text-sm font-medium flex items-center justify-between group"
                                >
                                    {cat}
                                    <i className="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Main Hero Slider Area */}
                    <div className="lg:col-span-6 relative rounded-3xl overflow-hidden group min-h-[460px] flex items-center p-8 md:p-12 border shadow-sm" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--card-bg)] via-[var(--card-bg)]/95 to-transparent z-10" />
                        <img 
                            src={imageMiddle} 
                            alt="" 
                            className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                        
                        <div className="relative z-20 max-w-sm md:max-w-md space-y-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-wide" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}>
                                ✨ Latest Generation
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                                The New Standard <br />
                                <span className="opacity-50 font-light">Smart Television</span>
                            </h1>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold">$287.00</span>
                                <span className="text-sm text-zinc-400 line-through">$399.00</span>
                            </div>
                            <Link 
                                to="/products" 
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-xl shadow-md transition-all active:scale-95"
                                style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
                            >
                                Shop Now
                                <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                        </div>
                        
                        <img 
                            src={middleimagePhoto} 
                            alt="" 
                            className="absolute right-6 bottom-6 w-60 h-auto object-contain hidden md:block z-20 drop-shadow-xl pointer-events-none group-hover:translate-y-[-6px] transition-transform duration-500" 
                        />
                    </div>

                    {/* Promo Mini Cards */}
                    <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-6">
                        <Link 
                            to="/products" 
                            className="flex-1 relative overflow-hidden rounded-3xl group border shadow-sm"
                            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                        >
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img1Right} alt="" />
                        </Link>
                        <Link 
                            to="/products" 
                            className="flex-1 relative overflow-hidden rounded-3xl group border shadow-sm"
                            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                        >
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={img2Right} alt="" />
                        </Link>
                    </div>

                </div>
            </Container>

            {/* Key Features Banner */}
            <div className="border-y py-10 my-12" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { icon: "fa-truck-fast", title: "Free Delivery", desc: "For orders over $20" },
                            { icon: "fa-headset", title: "Premium Support", desc: "24/7 dedicated assistance" },
                            { icon: "fa-credit-card", title: "Flexible Payment", desc: "Secure multiple methods" },
                            { icon: "fa-shield-halved", title: "Certified Reliable", desc: "Trusted by 2000+ brands" },
                            { icon: "fa-rotate-left", title: "Easy Return", desc: "30-day exchange window" }
                        ].map((item, idx) => (
                            <div 
                                key={idx} 
                                className="p-5 rounded-2xl border flex flex-col items-center lg:items-start text-center lg:text-left hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300"
                                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                            >
                                <div className="p-3 rounded-xl mb-4 text-base shadow-sm" style={{ backgroundColor: 'var(--input-bg)' }}>
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <h4 className="font-semibold text-sm">{item.title}</h4>
                                <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Discounts Block */}
            <Container>
                <div className="my-20">
                    <div className="flex items-center justify-between mb-10 pb-4 border-b" style={{ borderColor: 'var(--card-border)' }}>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                            <h2 className="text-2xl font-bold tracking-tight">Today's Discount</h2>
                        </div>
                        <Link to="/products" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[var(--text)] transition-colors">
                            Explore All <i className="fa-solid fa-arrow-right ml-1"></i>
                        </Link>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center py-20"><Spinner /></div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.slice(4, 8).map((item) => (
                                <div key={item.id} className="hover:scale-[1.02] transition-transform duration-300">
                                    <Product {...item} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Container>

            {/* Premium Destiny Console Full Width Banner */}
            <div className="relative my-24 overflow-hidden py-20 border-y" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                <Container>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-5 flex justify-center order-2 md:order-1">
                            <img 
                                src={tvPic} 
                                className="max-w-xs md:max-w-md w-full object-contain filter drop-shadow-2xl transform hover:translate-y-[-6px] transition-transform duration-500" 
                                alt="" 
                            />
                        </div>
                        <div className="md:col-span-7 space-y-6 text-center md:text-left order-1 md:order-2">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--card-border)' }}>
                                Collector's Limited Edition
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                                GameConsole Destiny <br />
                                <span className="font-light opacity-50">Special Edition Suite</span>
                            </h2>
                            <p className="text-3xl font-bold">$8,000.00</p>
                            <Link 
                                to="/products" 
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold px-8 py-4.5 rounded-xl shadow-lg transition-all"
                                style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
                            >
                                Shop Console
                                <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Bottom Highlights & Camera Promo */}
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-24">
                    {[
                        { hideOnMobile: false },
                        { hideOnMobile: true },
                        { hideOnMobile: true, hideOnDesktop: true }
                    ].map((card, idx) => (
                        <div 
                            key={idx} 
                            className={`p-8 border rounded-3xl flex items-center justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-sm group ${card.hideOnMobile ? 'hidden sm:flex' : ''} ${card.hideOnDesktop ? 'hidden lg:flex' : ''}`}
                            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                        >
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Limited Deal</span>
                                <h4 className="text-xl font-bold tracking-tight leading-snug">
                                    SALE 70% <br />
                                    CATCH THE CAMERA
                                </h4>
                                <Link to="/products" className="inline-flex items-center gap-1 text-xs font-bold border-b border-[var(--text)] pb-0.5 hover:opacity-50 transition-all">
                                    Explore <i className="fa-solid fa-chevron-right text-[8px]"></i>
                                </Link>
                            </div>
                            <img 
                                className="w-24 h-auto object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300" 
                                src={boxpic1} 
                                alt="" 
                            />
                        </div>
                    ))}
                </div>

                {/* Top Weekly Sellers */}
                <div className="my-24 pb-16">
                    <div className="flex items-center justify-between mb-10 pb-4 border-b" style={{ borderColor: 'var(--card-border)' }}>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-zinc-400"></span>
                            <h2 className="text-2xl font-bold tracking-tight">Top Seller This Week</h2>
                        </div>
                        <Link to="/products" className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[var(--text)] transition-colors">
                            Explore All <i className="fa-solid fa-arrow-right ml-1"></i>
                        </Link>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center py-20"><Spinner /></div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.slice(2, 6).map((item) => (
                                <div key={item.id} className="hover:scale-[1.02] transition-transform duration-300">
                                    <Product {...item} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}