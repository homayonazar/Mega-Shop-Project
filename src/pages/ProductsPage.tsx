import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import pic1 from "../assets/images/o_1301-488x488.webp";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IProduct } from "../components/types/Server";
import { useShppingCartContext } from "../components/contexts/ShppingCartContext";
import { getProduct } from "../components/Services/Api";

export default function ProductsPage() {

    const param = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct>();
    const { handleIncreaseProductQty,
        handleDecreaseProductQty,
        cartItem,
        getProductQty,
        handleRemoveProduct
    } = useShppingCartContext();

    console.log(cartItem);

    useEffect(() => {
        getProduct(param.id as string).then((data) => {
            setProduct(data);
        });
    }, []);
    console.log(cartItem);








    return (
        <div>
            <Header />
            <Container>
                <div className="HomePage_product w-full flex flex-row border-b-1 border-gray-200">
                    <div className="galleryOfProduct w-1/2 h-auto bg-amber-200 m-10">
                        <div className="img1 flex justify-center mt-10">
                            <img src={product?.imageUrl} alt=""/>
                        </div>
                    </div>
                    <div className="detailOfProduct w-1/2 h-auto m-10">
                        <h1 className="text-3xl">{product?.ModelName}</h1>
                        <p className="border-b-1 border-gray-200 py-5">Price is : <span className="red-force text-2xl"> {product?.price}</span></p>

                        <dl className="specs border-b border-gray-200 py-5 space-y-2">
                            <div className="flex">
                                <dt className="font-medium w-40">Brand</dt>
                                <dd className="flex-1 text-center">{product?.brandName}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40">Model Name</dt>
                                <dd className="flex-1 text-center">{product?.ModelName}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40">Age Range</dt>
                                <dd className="flex-1 text-center">{product?.AgeRange}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40">Color</dt>
                                <dd className="flex-1 text-center">{product?.Color}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40">Video Capture</dt>
                                <dd className="flex-1 text-center">{product?.VideoCapture}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40">Warranty</dt>
                                <dd className="flex-1 text-center">{product?.Warranty}</dd>
                            </div>
                        </dl>
                        <button className="p-2 w-70 h-15 bg-red-400 my-10 rounded-lg text-white cursor-pointer ">Add to cart</button>
                        <div className="aboutProdct border-t-1 border-gray-200 pt-4">
                            <h3 className="text-lg font-semibold mb-2" onClick={() => handleIncreaseProductQty(parseInt(param.id as string))}>About this item</h3>
                            <span>
                                {product?.content}
                            </span>
                            
                        </div>

                    </div>
                </div>

                <div className="relatedPdct w-full h-250 bg-amber-100">

                </div>
            </Container>






            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}

