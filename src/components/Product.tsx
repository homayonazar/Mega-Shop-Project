import type { IProduct } from "./types/Server";

type ProductProps = IProduct

export default function Product({ title, price, imageUrl, /*productDetail*/ }: ProductProps) {
    return (
        <div className="bg-[var(--bg)] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 m-5 overflow-hidden">
            <img className="w-full h-auto object-cover rounded-t-2xl" src={imageUrl} alt={title} />
            <div className="flex justify-between items-center p-4">
                <h2 className="font-poppins font-semibold text-lg">{title}</h2>
                <p className="red-force font-bold text-lg"> {price} $  </p>
            </div>
            {/* <p className="px-4 pb-4 text-gray-600 text-sm">{productDetail}</p> */}
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 
                rounded-b-2xl hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300">
                Add to Cart
            </button>
        </div>
    )
}
