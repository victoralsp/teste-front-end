import "./App.css";
import { Newsletter } from "./components/Common/Newsletter/Newsletter";
import { Footer } from "./components/Layout/Footer/Footer";
import { Header } from "./components/Layout/Header/Header/Header";
import { CartProvider } from "./context/CartContext/CartContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <Header />
      <Home />
      <Newsletter />
      <Footer />
    </CartProvider>
  );
}

export default App;
