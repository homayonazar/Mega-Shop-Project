import { useEffect, useState } from "react"
import Product from "../components/Product"
import type { IProduct } from "../components/types/Server"
import { getProducts } from "../components/Services/Api";
import Container from "../components/Container";

function Products() {

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result.products);
        });
    }, []);

    return (
        <div>
            <Container>
                <div className="pdctSec flex flex-row ">
                    <div className="filterSec w-1/4  h-auto bg-amber-400 hidden sm:block">
                        <div className="fff w-full ">
                            Filter
                        </div>
                    </div>
                    <div className="productSec sm:w-3/4 w-full">
                        <div className="products_box w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  p-4">
                            {products.map((item) => (
                                <Product {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Products