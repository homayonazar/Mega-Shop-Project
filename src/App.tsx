import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Layout from './components/layout/Layout';
import { ShoppingCartProvider } from './components/contexts/ShppingCartContext';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import CallUs from './pages/CallUs';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
    return (
        <BrowserRouter basename="/projects/Mega-Shop-Project">
            <ScrollToTop />
            <ShoppingCartProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductsPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/callus" element={<CallUs />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </ShoppingCartProvider>
        </BrowserRouter>
    );
}