import img1 from "../assets/images/o_1301-488x488.webp"



function Product() {
    return (
        <div className="PdctBox w-1/4 h-auto bg-white shadow-lg m-6 rounded-2xl flex flex-col items-center p-4 hover:bg-[var(--myBlue)] transition-transform duration-300 relative  ">
            <div className="discount absolute rounded-full bg-red-600 text-white p-2 top-0 left-0 m-5 ">75%</div>
            <div className="img w-full flex flex-col items-center text-center">
                <img src={img1} alt="image-1" className="rounded-xl w-40 h-40 object-cover mb-4" />
                <h2 className="text-lg font-semibold mb-2">Name of Product</h2>
                <p className="text-gray-700">Price is : <span className="text-red-600 font-bold">56$</span></p>
                <button className=" w-1/2 outline-0 bg-red-400 text-white rounded-md p-1 mt-3">Add To Cart</button>
            </div>

        </div>
    )
}

export default Product