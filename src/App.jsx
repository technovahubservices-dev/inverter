import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import CartDrawer from "./components/layout/CartDrawer";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import InverterShowcase from "./components/home/InverterShowcase";
import PowerFlow from "./components/home/PowerFlow";
import InverterRange from "./components/home/InverterRange";
import FindYourInverter from "./components/home/FindYourInverter";
import Technology from "./components/home/Technology";
import Support from "./components/home/Support";
import HeroAboutStack from "./components/home/HeroAboutStack";

import ProductDetails from "./components/pages/ProductDetails";
import Checkout from "./components/pages/Checkout";
import ContactUs from "./components/pages/ContactUs";

const CART_STORAGE_KEY = "volterra-cart";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartItems]
  );

  const addToCart = (product, openCart = true) => {
    setCartItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });

    if (openCart) {
      setCartOpen(true);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((current) =>
      current.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <ScrollToTop />

      {!isContactPage && (
        <Navbar
          cartCount={cartCount}
          onCartOpen={() => setCartOpen(true)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroAboutStack
                hero={<Hero />}
                about={<InverterShowcase />}
              />

              <PowerFlow />

              <InverterRange
                onAddToCart={addToCart}
                cartItems={cartItems}
              />

              <FindYourInverter />

              <Technology />

              <Support />
            </main>
          }
        />

        <Route
          path="/contact"
          element={<ContactUs />}
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onClear={clearCart}
            />
          }
        />

        <Route
          path="/products/:productId"
          element={
            <ProductDetails
              onAddToCart={addToCart}
            />
          }
        />
      </Routes>

      {!isContactPage && <Footer />}

      {!isContactPage && (
        <CartDrawer
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cartItems={cartItems}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClear={clearCart}
        />
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
