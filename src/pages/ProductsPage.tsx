import Container from "../components/Container";
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
        getProductQty,
        handleRemoveProduct
    } = useShppingCartContext();

    useEffect(() => {
        getProduct(param.id as string).then((data) => {
            setProduct(data);
        });
    }, []);
    








    return (
        <div className="bg-[var(--bg)]">

            <Container>
                <div className="HomePage_product w-full flex flex-col justify-center items-center p-6 sm:p-1 sm:flex-row border-b-1 border-gray-200 ">
                    <div className="galleryOfProduct w-full sm:w-1/2 h-auto m-10">
                        <div className="img1 flex justify-center mt-10">
                            <img src={product?.imageUrl} alt="" />
                        </div>
                    </div>

                    <div className="detailOfProduct w-full sm:w-1/2 h-auto m-10">
                        <h1 className="text-3xl text-[var(--text)]">{product?.ModelName}</h1>
                        <p className="border-b-1 border-gray-200 py-5 ">
                            Price is: <span className="red-force text-2xl text-[var(--text)]">{product?.price} $</span>
                        </p>

                        <dl className="specs border-b border-gray-200 py-5 space-y-2">
                            <div className="flex">
                                <dt className="font-medium w-40 text-[var(--text)]">Brand</dt>
                                <dd className="flex-1 text-center text-[var(--text)]">{product?.brandName}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40 text-[var(--text)]">Model Name</dt>
                                <dd className="flex-1 text-center text-[var(--text)]">{product?.ModelName}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40 text-[var(--text)]">Age Range</dt>
                                <dd className="flex-1 text-center text-[var(--text)]">{product?.AgeRange}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40 text-[var(--text)]">Color</dt>
                                <dd className="flex-1 text-center text-[var(--text)]">{product?.Color}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40 text-[var(--text)]">Video Capture</dt>
                                <dd className="flex-1 text-center text-[var(--text)]">{product?.VideoCapture}</dd>
                            </div>
                            <div className="flex">
                                <dt className="font-medium w-40 text-[var(--text)]">Warranty</dt>
                                <dd className="flex-1 text-center text-[var(--text)]">{product?.Warranty}</dd>
                            </div>
                        </dl>

                        {/* Add to Cart Section */}
                        <div className="flex justify-between w-full mt-5">
                            {getProductQty(parseInt(param.id as string)) === 0 ? (
                                <button
                                    className="py-3 bg-[var(--myFontColor)] w-full rounded cursor-pointer transition-transform hover:scale-105 active:scale-95"
                                    onClick={() => handleIncreaseProductQty(parseInt(param.id as string))}
                                >
                                    Add To Cart
                                </button>
                            ) : (
                                <div className="flex flex-col w-full gap-2">
                                    <div className="flex flex-row gap-2">
                                        <button
                                            className="flex-1 py-3 bg-[var(--myFontColor)] rounded text-xl transition-transform hover:scale-105 active:scale-95"
                                            onClick={() => handleIncreaseProductQty(parseInt(param.id as string))}
                                        >
                                            +
                                        </button>
                                        <span className="flex-1 flex items-center justify-center font-bold text-lg transition-transform hover:scale-105 active:scale-95">
                                            {getProductQty(parseInt(param.id as string))}
                                        </span>
                                        <button
                                            className="flex-1 py-3 bg-[var(--myFontColor)] rounded text-xl transition-transform hover:scale-105 active:scale-95"
                                            onClick={() => handleDecreaseProductQty(parseInt(param.id as string))}
                                        >
                                            -
                                        </button>
                                    </div>
                                    <button
                                        className="py-3 bg-[var(--myFontColor)] w-full rounded cursor-pointer mt-2 transition-transform hover:scale-105 active:scale-95"
                                        onClick={() => handleRemoveProduct(parseInt(param.id as string))}
                                    >
                                        Delete From Cart
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="aboutProdct border-t-1 border-gray-200 pt-4 mt-5">
                            <h3 className="text-lg font-semibold mb-2">About this item</h3>
                            <span>{product?.content}</span>
                        </div>
                    </div>
                </div>

                {/* <div className="relatedPdct w-full h-250 bg-amber-100 mt-10"></div> */}
            </Container>






            <br /><br />
        </div>
    )
}

