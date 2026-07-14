import { useEffect, useState } from "react";
import Product from "../components/Product";
import type { IProduct } from "../components/types/Server";
import { getProducts } from "../components/Services/Api";
import Container from "../components/Container";
import Spinner from "../components/Spinner";

function Products() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [sortOption, setSortOption] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getProducts()
            .then((result) => setProducts(result.products))
            .finally(() => setIsLoading(false));
    }, []);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "highPrice") return b.price - a.price;
        if (sortOption === "lowPrice") return a.price - b.price;
        return 0;
    });

    return (
        <div className="min-h-screen py-8 transition-colors duration-300">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Filters Sidebar */}
                    <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Sort By</h3>
                            <div className="space-y-3 text-sm text-zinc-500">
                                {[
                                    { value: "highPrice", label: "Price: High to Low" },
                                    { value: "lowPrice", label: "Price: Low to High" },
                                    { value: "popular", label: "Popularity" },
                                    { value: "visited", label: "Most Visited" }
                                ].map((opt) => (
                                    <label key={opt.value} className="flex items-center gap-3 cursor-pointer hover:text-[var(--text)]">
                                        <input 
                                            type="radio" 
                                            name="sorting" 
                                            value={opt.value} 
                                            onChange={(e) => setSortOption(e.target.value)} 
                                            className="w-4 h-4 accent-zinc-800"
                                        />
                                        <span>{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="border-t pt-6" style={{ borderColor: 'var(--card-border)' }}>
                            <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4">Colors</h3>
                            <div className="space-y-3 text-sm text-zinc-500">
                                {["White", "Black", "Purple", "Grey", "Blue", "Red"].map((color) => (
                                    <label key={color} className="flex items-center gap-3 cursor-pointer hover:text-[var(--text)]">
                                        <input type="checkbox" className="w-4 h-4 accent-zinc-800 rounded" />
                                        <span>{color}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-8">
                            <p className="text-xs text-zinc-400 uppercase tracking-widest font-mono">Showing {sortedProducts.length} Products</p>
                        </div>

                        {isLoading ? (
                            <div className="flex justify-center py-20"><Spinner /></div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {sortedProducts.map((item) => (
                                    <Product key={item.id} {...item} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Products;