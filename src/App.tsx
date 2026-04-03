import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Newsletter } from "./components/Common/Newsletter/Newsletter";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header/Header";
import { CartProvider } from "./context/CartContext/CartContext";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/Pdp/ProductDetail"; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;