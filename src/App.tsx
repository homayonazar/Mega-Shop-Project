import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Layout from './components/layout/Layout';
import { ShoppingCartProvider } from './components/contexts/ShppingCartContext';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import CallUs from './pages/CallUs';


function App() {
  return (
    <BrowserRouter basename="/projects/Mega-Shop-Project">
      <ShoppingCartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductsPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/callus" element={<CallUs />} />
          </Routes>
        </Layout>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;