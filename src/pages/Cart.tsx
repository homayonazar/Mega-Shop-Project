import { useEffect, useState } from "react";
import { useShppingCartContext } from "../components/contexts/ShppingCartContext";
import { getProduct } from "../components/Services/Api";
import type { IProduct } from "../components/types/Server";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

    <Header/>
            <div className="">
                {cartItem.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>

            <Container>
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
            </Container>

        <Footer/>
        </>
  )
}

export default Cart