import { useEffect, useState } from "react";
import { useShppingCartContext } from "../components/contexts/ShppingCartContext";
import { getProduct } from "../components/Services/Api";
import type { IProduct } from "../components/types/Server";
import Container from "../components/Container";
import cartPic from "../assets/images/withOutBg/shopping-cart.png"
import CartItem from "../components/CartItem";

function Cart() {
    const { cartItem } = useShppingCartContext();
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        async function calcTotal() {
            let sum = 0;

            for (let i = 0; i < cartItem.length; i++) {
                const product: IProduct = await getProduct(cartItem[i].id);
                sum += product.price * cartItem[i].qty;
            }

            setTotalPrice(sum);
        }
        calcTotal();
    }, [cartItem]);




    return (
        <>
            <div className="bg-[var(--bg)]">
                {cartItem.length > 0 ? (
                    cartItem.map((item) => <CartItem key={item.id} {...item} />)
                ) : (
                    <div className="text-4xl mt-5 flex justify-center flex-col items-center m-10 shadow p-5">
                        <img src={cartPic} alt="shoppingcart_photo" className="w-15 mb-3 " />
                        <p className="border-t-1 border-gray-200">Your cart is empty!</p>
                    </div>
                )}
            </div>

            <Container>
                {cartItem.length > 0 && (
                    <div>
                        <div className="flex flex-col border-t-1 shadow mt-5">
                            <p>Total Price : {totalPrice}</p>
                            <p>Discount : 0</p>
                            <p>Price after discount : {totalPrice}</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="p-1 m-2 cursor-pointer">Submit Order</button>
                        </div>
                    </div>
                )}
            </Container>
        </>
    )
}

export default Cart