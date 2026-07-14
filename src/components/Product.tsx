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

        // Reset state after 2 seconds
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-850 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col justify-between h-full">
            
            {/* ۱. بخش تصویر محصول با افکت زوم هاور */}
            <Link to={`/product/${id}`} className="block overflow-hidden relative pt-[100%] bg-zinc-50/50 dark:bg-zinc-950/20">
                <img
                    className="absolute inset-0 w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={imageUrl}
                    alt={title}
                />
            </Link>

            {/* ۲. بخش اطلاعات محصول - یکپارچه و تمیز */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-1.5">
                    <Link to={`/product/${id}`} className="block">
                        <h2 className="font-bold text-base text-zinc-800 dark:text-zinc-200 line-clamp-2 hover:text-black dark:hover:text-white transition-colors tracking-tight leading-snug">
                            {title}
                        </h2>
                    </Link>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <p className="text-xl font-extrabold text-zinc-950 dark:text-white">
                        ${price.toLocaleString()}
                    </p>

                    {/* ۳. دکمه افزودن به سبد خرید مینی‌مال و هوشمند */}
                    <button
                        onClick={handleAddToCart}
                        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                            added
                                ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                                : "bg-zinc-50 hover:bg-zinc-900 text-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-white dark:hover:text-black"
                        }`}
                    >
                        {added ? (
                            <>
                                <i className="fa-solid fa-check text-xs"></i>
                                <span>Added</span>
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-plus text-xs"></i>
                                <span>Add</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}