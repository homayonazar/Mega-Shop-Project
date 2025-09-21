import Container from "../components/Container"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import imageMiddle from "../assets/images/middleImage.jpg"
import middleimagePhoto from "../assets/images/img-prd9.webp"
import img1Right from "../assets/images/img1Right.png"
import img2Right from "../assets/images/img2Right.png"
import Product from "../components/Product"
import { useEffect, useState } from "react"
import { getProducts } from "../components/Services/Api"
import tvPic from "../assets/images/tv.webp"
import type { IProduct } from "../components/types/Server"
import boxpic1 from "../assets/images/withOutBg/img-prd10.webp"
import boxpic2 from "../assets/images/withOutBg/img-prd2.webp"
import boxpic3 from "../assets/images/withOutBg/img-prd4.webp"



export default function Home() {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result.products);            
        });
    }, []);





    return (
        <div className="bg-[var(--bg)] w-full">
            <Header />

            <Container>
                <div className="Slide_menu_section flex flex-row gap-6 mt-10">
                    <div className="sideMenu w-1/5 bg-[var(--bg)] h-auto border-1 border-gray-200 rounded-2xl">
                        <div className="allDepartment bg-[#ed3b3b] p-4.5 rounded-t-2xl">
                            <i className="fa-solid fa-bars white-force me-2 text-xl"></i><p className="inline text-lg text-white white-force">All Department</p>
                        </div>
                        <nav>
                            <ul>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Audio Equipments</li></Link>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Laptop & Tablet</li></Link>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Gaming Accessories</li></Link>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Headphone</li></Link>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Smartphone</li></Link>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Camera & Video</li></Link>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Smartwatch</li></Link>
                                <Link to="/"><li className="p-3 border-b-1 border-gray-200">Storage & Digital Devices</li></Link>
                                <Link to="/"><li className="p-3 border-gray-200">Game & Room Furniture</li></Link>
                                {/* <Link to="/"><li className="p-3 border-b-1 border-gray-200">Server & Workstation</li></Link> */}
                                {/* <Link to="/"><li className="p-3 border-b-1 border-gray-200">TV & Computer Screen</li></Link> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="middlegalery w-3/5 h-auto relative ">
                        <div className="middleImage absolute inset-0 rounded-2xl z-10">
                            <img src={imageMiddle} alt="middleImage" className="w-full h-full object-cover rounded-2xl" />
                            <div className="texts z-20 absolute top-20 left-10">
                                <h2 className="text-white text-7xl mb-10">The new <br />standard TV </h2>
                                <p className="yello-force text-5xl p-5">$287 </p>
                                <button className="text-white text-lg cursor-pointer mt-10">Shop Now</button>
                            </div>
                        </div>

                        <div className="middleimagePhoto absolute z-20 top-10 right-5 transform transition duration-300 ease-in-out hover:scale-105">
                            <img src={middleimagePhoto} alt="" className="w-80 h-auto object-contain" />
                        </div>
                    </div>
                    <div className="rightGalery w-1.9/5  h-auto">
                        <div className="img 1">
                            <Link to="/"><img className=" p-2 rounded-2xl" src={img1Right} alt="" /></Link>
                        </div>
                        <div className="img2">
                            <Link to="/"><img className=" p-2 rounded-2xl" src={img2Right} alt="" /></Link>
                        </div>
                    </div>

                </div>

                <div className="2nd_section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 mb-20">
                    <div className="box1 w-full h-27 border border-gray-200 rounded-2xl p-5 flex flex-row items-center">
                        <div className="icon m-4 text-xl text-blue-500">
                            <i className="fas fa-truck"></i>
                        </div>
                        <div className="textBox">
                            <p className="font-bold m-1">Free delivery</p>
                            <p className="text-sm text-gray-600">Free Shipping for orders over $20</p>
                        </div>
                    </div>

                    <div className="box2 w-full h-27 border border-gray-200 rounded-2xl p-5 flex flex-row items-center">
                        <div className="icon m-4 text-xl text-green-500">
                            <i className="fas fa-headset"></i>
                        </div>
                        <div className="textBox">
                            <p className="font-bold m-1">Support 24/7</p>
                            <p className="text-sm text-gray-600">24 hours a day, 7 days a week</p>
                        </div>
                    </div>

                    <div className="box3 w-full h-27 border border-gray-200 rounded-2xl p-5 flex flex-row items-center">
                        <div className="icon m-4 text-xl text-yellow-500">
                            <i className="fas fa-credit-card"></i>
                        </div>
                        <div className="textBox">
                            <p className="font-bold m-1">Payment</p>
                            <p className="text-sm text-gray-600">Pay with Multiple Credit Cards</p>
                        </div>
                    </div>

                    <div className="box4 w-full h-27 border border-gray-200 rounded-2xl p-5 flex flex-row items-center">
                        <div className="icon m-4 text-xl text-red-500">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="textBox">
                            <p className="font-bold m-1">Reliable</p>
                            <p className="text-sm text-gray-600">Trusted by 2000+ major brands</p>
                        </div>
                    </div>

                    <div className="box5 w-full h-27 border border-gray-200 rounded-2xl p-5 flex flex-row items-center">
                        <div className="icon m-4 text-xl text-purple-500">
                            <i className="fas fa-undo"></i>
                        </div>
                        <div className="textBox">
                            <p className="font-bold m-1">Guarantee</p>
                            <p className="text-sm text-gray-600">Within 30 days for an exchange</p>
                        </div>
                    </div>
                </div>

                <div className="DealOfDay mt-10">
                    <div className="textofDeal p-4 border-b border-gray-200">
                        <i className="fa-solid fa-fire red-force text-3xl"></i>
                        <p className="red-force inline text-2xl"><u> Today's Discount</u></p>
                    </div>

                    <div className="products_box w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {products.slice(4,8).map((item) => (
                            <Link key={item.id} to={`/product/${item.id}`}>
                                <Product {...item} />
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>

            {/* WithOutContainer */}
            <div className="FullWidth_add w-full h-auto mt-15 bg-gradient-to-r from-[rgba(15,38,209,1)] to-[rgba(207,31,8,1)] flex flex-row ">
                <div className="tv w-1/2 h-auto">
                    <div className="img  ms-20 mt-10">
                        <img src={tvPic} className="w-2/3 mb-8" alt="tv_picture" />
                    </div>
                </div>
                <div className="tvText w-1/2 h-auto flex flex-col justify-center">
                    <h2 className="text-white text-6xl font-poppins">
                        GameConsole Destiny <br /> Special Edition
                    </h2>
                    <p className="my-10 yello-force text-4xl">$8.000</p>
                    <button className="w-40 h-10 p-2 bg-white rounded my-5">Shop Now</button>
                </div>
            </div>

            <Container>
                <div className="DealOfDay mt-10">
                    <div className="textofDeal p-4 border-b border-gray-200">
                        <i className="fa-solid fa-fire red-force text-3xl"></i>
                        <p className="red-force inline text-2xl"><u> Today's Discount</u></p>
                    </div>

                    <div className="products_box w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {products.slice(0, 8).map((item) => (
                            <Link key={item.id} to={`/product/${item.id}`}>
                                <Product {...item} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="prdctBoxes w-full h-80 flex">
                    <div className="box1 w-1/4 p-5 bg-yellow-200 rounded-lg m-5 border-1 border-gray-400 flex flex-row items-center ">
                        <div className="leftSec">
                            <p className=" text-2xl font-bold">SALE <span>70%</span> <br />CATCH BIG DEALS <br />ON THE CAMERAS</p>
                        </div>
                        <div className="tightSec">
                            <img className="w-30" src={boxpic1} alt="" />
                        </div>
                    </div>
                    <div className="box1 w-1/2 p-5 bg-red-200 rounded-lg m-5 border-1 border-gray-400 flex flex-row items-center ">
                        <div className="leftSec">
                            <p className=" text-2xl font-bold">SALE <span>70%</span> <br />CATCH BIG DEALS <br />ON THE CAMERAS</p>
                        </div>
                        <div className="tightSec">
                            <img className="w-30" src={boxpic1} alt="" />
                        </div></div>
                    <div className="box1 w-1/4 p-5 bg-green-200 rounded-lg m-5 border-1 border-gray-400 flex flex-row items-center ">
                        <div className="leftSec">
                            <p className=" text-2xl font-bold">SALE <span>70%</span> <br />CATCH BIG DEALS <br />ON THE CAMERAS</p>
                        </div>
                        <div className="tightSec">
                            <img className="w-30" src={boxpic1} alt="" />
                        </div></div>
                </div>

                <div className="DealOfDay mt-10">
                    <div className="textofDeal p-4 border-b border-gray-200">
                        <i className="fa-solid fa-fire red-force text-3xl"></i>
                        <p className="red-force inline text-2xl">Top Seller This Week</p>
                    </div>

                    <div className="products_box w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-20">
                        {products.slice(2, 6).map((item) => (
                            <Link key={item.id} to={`/product/${item.id}`}>
                                <Product {...item} />
                            </Link>
                        ))}
                    </div>
                </div>


            </Container>









            <Footer />
        </div>
    )
}

