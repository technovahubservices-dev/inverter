import SearchOverlay from "./SearchOverlay";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";

const navItems = [
  {
    label: "Our Products",
    href: "/#products",
  },
  {
    label: "Technology",
    href: "/#technology",
  },
  {
    label: "How It Works",
    href: "/#how-it-works",
  },
  {
    label: "Support",
    href: "/#support",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar({ cartCount, onCartOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="navbar"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-inner">
          <a href="/" className="brand" aria-label="VOLTERRA home">
            <span className="brand-mark">
              <span />
              <span />
            </span>

            <span className="brand-name">VOLTERRA</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <button
              type="button"
              className="nav-icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className="nav-icon cart-button"
              aria-label={`Shopping bag with ${cartCount} ${
                cartCount === 1 ? "item" : "items"
              }`}
              onClick={onCartOpen}
            >
              <ShoppingBag size={18} strokeWidth={1.8} />

              <span
                className={`cart-count ${
                  cartCount > 0 ? "has-items" : ""
                }`}
              >
                {cartCount}
              </span>
            </button>

            <a
              href="/#products"
              className="quote-button"
            >
              Explore Inverters
              <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-menu-header">
              <a
                href="/"
                className="brand-name"
                onClick={closeMenu}
              >
                VOLTERRA
              </a>

              <button
                type="button"
                className="nav-icon"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.label}

                  <ArrowUpRight size={20} />
                </motion.a>
              ))}
          </nav>

            <a
              href="/#products"
              className="mobile-contact"
              onClick={closeMenu}
            >
              Explore Inverters
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;







