import SearchOverlay from "./SearchOverlay";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
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

          {/* Logo */}
          <Link
            to="/"
            className="brand"
            aria-label="VOLTERRA home"
          >
            <span className="brand-mark">
              <span />
              <span />
            </span>

            <span className="brand-name">
              VOLTERRA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Navbar Actions */}
          <div className="navbar-actions">

            {/* Search */}
            <button
              type="button"
              className="nav-icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search
                size={18}
                strokeWidth={1.8}
              />
            </button>

            {/* Cart */}
            <button
              type="button"
              className="nav-icon cart-button"
              aria-label={`Shopping bag with ${cartCount} ${
                cartCount === 1 ? "item" : "items"
              }`}
              onClick={onCartOpen}
            >
              <ShoppingBag
                size={18}
                strokeWidth={1.8}
              />

              <span
                className={`cart-count ${
                  cartCount > 0 ? "has-items" : ""
                }`}
              >
                {cartCount}
              </span>
            </button>

            {/* Explore Inverters */}
            <Link
              to="/#products"
              className="quote-button"
            >
              Explore Inverters
              <ArrowUpRight size={15} />
            </Link>

            {/* Mobile Menu Button */}
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

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Mobile Menu Header */}
            <div className="mobile-menu-header">

              <Link
                to="/"
                className="brand-name"
                onClick={closeMenu}
              >
                VOLTERRA
              </Link>

              <button
                type="button"
                className="nav-icon"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav
              className="mobile-nav"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
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
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.label}

                    <ArrowUpRight size={20} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Explore Button */}
            <Link
              to="/#products"
              className="mobile-contact"
              onClick={closeMenu}
            >
              Explore Inverters
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;