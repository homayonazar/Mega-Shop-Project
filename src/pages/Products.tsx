import { useEffect, useState } from "react"
import Product from "../components/Product"
import type { IProduct } from "../components/types/Server"
import { getProducts } from "../components/Services/Api";
import Container from "../components/Container";

function Products() {

    // maping pdcts
    const [products, setProducts] = useState<IProduct[]>([]);
    const [sortOption, setSortOption] = useState<string>("");

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result.products);
        });
    }, []);

    // Sorting Func
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "highPrice") {
            return b.price - a.price; 
        }
        if (sortOption === "lowPrice") {
            return a.price - b.price;
        }
        return 0; 
    });

    return (
        <div>
            <Container>
                <div className="pdctSec flex flex-row ">
                    <div className="filterSec w-[250px]  h-auto hidden sm:block mt-5 border p-2 rounded-2xl border-gray-300 mb-10 ">
                        <div className="Sorting fff w-full flex flex-col border p-3 rounded-2xl border-gray-300">
                            <h2 className="text-center font-bold text-lg mt-2 border-b-1 border-b-gray-300 mb-2">Sorting</h2>

                            <label className="flex gap-2 ">
                                <input type="radio" name="sorting" value="highPrice" onChange={(e) => setSortOption(e.target.value)} />
                                High Price
                            </label>

                            <label className="flex gap-2">
                                <input type="radio" name="sorting" value="lowPrice" onChange={(e) => setSortOption(e.target.value)} />
                                Low Price
                            </label>

                            <label className="flex gap-2">
                                <input type="radio" name="sorting" value="popular" />
                                Popular products
                            </label>

                            <label className="flex gap-2">
                                <input type="radio" name="sorting" value="visited" />
                                Most Visited
                            </label>
                        </div>
                        <div className="colorCheck fff w-full flex flex-col border mt-5 p-3 rounded-2xl border-gray-300">
                            <h2 className="text-center font-bold text-lg mt-2 border-b-1 border-b-gray-300 mb-2">Color Filter</h2>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="highPrice" />
                                White
                            </label>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="lowPrice" />
                                Black
                            </label>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="popular" />
                                Purple
                            </label>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="visited" />
                                Gary
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="visited" />
                                Blue
                            </label>
                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="visited" />
                                Red
                            </label>
                        </div>
                        <div className="colorCheck fff w-full flex flex-col border mt-5 p-3 rounded-2xl border-gray-300">
                            <h2 className="text-center font-bold text-lg mt-2 border-b-1 border-b-gray-300 mb-2">AnyThing else</h2>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="highPrice" />
                                Choice-1
                            </label>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="lowPrice" />
                                Choice-2
                            </label>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="popular" />
                                Choice-3
                            </label>

                            <label className="flex gap-2">
                                <input type="checkbox" name="sorting" value="visited" />
                                Choice-4
                            </label>
                        </div>
                    </div>
                    <div className="productSec sm:w-3/4 w-full">
                        <div className="products_box w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                            {sortedProducts.map((item) => (
                                <Product key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Products