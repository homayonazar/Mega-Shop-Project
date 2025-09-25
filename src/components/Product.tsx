import { Link } from "react-router-dom";
import type { IProduct } from "./types/Server";
import { useShppingCartContext } from "./contexts/ShppingCartContext";
import { useState } from "react";

type ProductProps = IProduct;

export default function Product({ id, title, price, imageUrl }: ProductProps) {
    const { handleIncreaseProductQty } = useShppingCartContext();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        handleIncreaseProductQty(Number(id));
        setAdded(true);

        // delete message after 2sec
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-[var(--bg)] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 m-5 overflow-hidden">
            <img
                className="w-full h-auto object-cover rounded-t-2xl"
                src={imageUrl}
                alt={title}
            />
            <div className="flex justify-between items-center p-4 bg-[var(--navbar)]">
                <Link to={`/product/${id}`}>
                    <h2 className="font-poppins font-semibold text-lg text-[var(--text)]">{title}</h2>
                </Link>
                <p className="red-force font-bold text-lg">{price} $</p>
            </div>

            <button
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 
                rounded-b-2xl hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300 cursor-pointer"
                onClick={handleAddToCart}
            >
                {added ? "Added" : "Add to Cart"}
            </button>
        </div>
    );
}
