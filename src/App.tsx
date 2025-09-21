import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import Layout from './components/layout/Layout';
import { ShoppingCartProvider } from './components/contexts/ShppingCartContext';

function App() {
    return (
        <BrowserRouter>
      <ShoppingCartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductsPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </ShoppingCartProvider>
    </BrowserRouter>

    );
}

export default App;