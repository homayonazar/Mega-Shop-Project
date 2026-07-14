import { useEffect, useState } from "react";
import { useShppingCartContext } from "../components/contexts/ShppingCartContext";
import { getProduct } from "../components/Services/Api";
import type { IProduct } from "../components/types/Server";
import Container from "../components/Container";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import cartPic from "../assets/images/shopping-cart.png";

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
        if (cartItem.length > 0) calcTotal();
    }, [cartItem]);

    return (
        <div className="min-h-screen py-12 transition-colors duration-300">
            <Container>
                <h1 className="text-3xl font-black tracking-tight mb-12 border-b pb-6" style={{ borderColor: 'var(--card-border)' }}>Your Shopping Cart</h1>

                {cartItem.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <img src={cartPic} alt="Empty Cart" className="w-16 opacity-30 mb-6" />
                        <h3 className="text-xl font-bold mb-2">Your cart is feeling light</h3>
                        <p className="text-zinc-400 text-sm mb-8">When you add items, they will appear here.</p>
                        <Link to="/products" className="text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-full" style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}>
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* List Items */}
                        <div className="lg:col-span-2 divide-y" style={{ borderColor: 'var(--card-border)' }}>
                            {cartItem.map((item) => (
                                <div key={item.id} className="py-6 first:pt-0">
                                    <CartItem {...item} />
                                </div>
                            ))}
                        </div>

                        {/* Order Invoice Block */}
                        <div className="p-8 rounded-2xl border space-y-6" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <h3 className="text-lg font-bold">Order Summary</h3>
                            <div className="space-y-4 text-sm text-zinc-400">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-[var(--text)] font-semibold">${totalPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-500 font-bold">Free</span>
                                </div>
                                <div className="flex justify-between border-t pt-4 text-base font-extrabold text-[var(--text)]" style={{ borderColor: 'var(--card-border)' }}>
                                    <span>Total Price</span>
                                    <span>${totalPrice.toLocaleString()}</span>
                                </div>
                            </div>
                            <button className="w-full text-xs uppercase tracking-wider font-extrabold py-4 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Cart;