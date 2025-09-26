import { useEffect, useState } from "react";
import type { IProduct } from "./types/Server";
import { getProduct } from "./Services/Api";
import { useShppingCartContext } from "./contexts/ShppingCartContext";
import Container from "./Container";


interface ICartItem {
    id: number;
    qty: number;
}
export default function CartItem({ id, qty }: ICartItem) {

    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        getProduct(id).then((data) => {
            setProduct(data)
        });
    }, []);

    const { handleDecreaseProductQty, handleIncreaseProductQty, handleRemoveProduct } = useShppingCartContext();

    return (
        <Container>
            <div className="flex justify-between bg-[var(--myBlue)] w-full h-40 m-2 rounded-2xl mt-10 mb-10 ">
                <div className="flex flex-row">
                    <img className="h-40 p-2 rounded-2xl" src={product?.imageUrl} alt="" />
                    <div className=" mt-2 flex flex-col">
                        <h2 className='font-bold text-[var(--text)]' >{product?.title}</h2>
                        <span className="text-green-600"><span className='text-black'>Price is :</span> {product?.price}</span>
                    </div>
                </div>
                <div className="flex items-center me-5 flex-row-reverse">
                    <button onClick={() => handleIncreaseProductQty(id)} className="mx-2 p-2 cursor-pointer text-[var(--text)] bg-[var(--bg)] rounded-full"> + </button>
                    <span className="text-2xl"> {qty}  </span>
                    <button onClick={() => handleDecreaseProductQty(id)} className="mx-2 p-2 cursor-pointer text-[var(--text)] bg-[var(--bg)] rounded-full"> - </button>
                    <button onClick={() => handleRemoveProduct(id)} className="mx-2 p-2 cursor-pointer">Remove</button>

                </div>
            </div>
        </Container>
    )
}

