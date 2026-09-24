import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import products from "../../data/products";

function ProductDetails({ onAddToCart }) {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(
    () => products.find((item) => item.id === productId),
    [productId]
  );

  if (!product) {
    return (
      <main className="product-not-found">
        <div className="container">
          <span>PRODUCT NOT FOUND</span>

          <h1>
            This inverter
            <strong>doesn't exist.</strong>
          </h1>

          <Link to="/#products" className="product-back-button">
            <ArrowLeft size={16} />
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const total = product.price * quantity;

  const handleAddToCart = () => {
    for (let index = 0; index < quantity; index += 1) {
      onAddToCart(product, false);
    }
  };

  return (
    <main className="product-details-page">
      <section className="product-details-hero">
        <div className="product-details-glow" />

        <div className="container">
          <Link to="/#products" className="product-back-link">
            <ArrowLeft size={15} />
            Back to products
          </Link>

          <div className="product-details-grid">
            <motion.div
              className="product-details-visual"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="product-details-orb" />

              <span className="product-details-badge">
                {product.badge}
              </span>

              <motion.img
                src={product.image}
                alt={product.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
              />
            </motion.div>

            <motion.div
              className="product-details-content"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="product-details-category">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <h2>{product.tagline}</h2>

              <p className="product-details-description">
                {product.description}
              </p>

              <div className="product-details-price">
                <small>FROM</small>

                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="product-details-divider" />

              <div className="product-details-feature-list">
                {product.features.map((feature) => (
                  <div key={feature}>
                    <span>
                      <Check size={14} />
                    </span>

                    {feature}
                  </div>
                ))}
              </div>

              <div className="product-details-purchase">
                <div className="product-quantity">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.max(1, current - 1)
                      )
                    }
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>

                  <span>{quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) => current + 1)
                    }
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>

                <button
                  type="button"
                  className="product-add-button"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={17} />

                  <span className="product-add-label">
                    Add to cart
                  </span>

                  <span>
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </button>
              
                <button
                  type="button"
                  className="product-checkout-button"
                  onClick={() => {
                    handleAddToCart();
                    window.location.href = "/checkout";
                  }}
                >
                  Buy now
                  <ArrowRight size={17} />
                </button></div>

              <div className="product-details-note">
                <ShoppingBag size={15} />

                <span>
                  Add this inverter to your shopping bag and continue
                  exploring VOLTERRA.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="product-details-engineering">
        <div className="container">
          <div className="product-engineering-heading">
            <span>ENGINEERED FOR EVERYDAY POWER</span>

            <h2>
              Designed around
              <strong>real everyday life.</strong>
            </h2>
          </div>

          <div className="product-engineering-grid">
            {product.features.map((feature, index) => (
              <motion.div
                className="product-engineering-item"
                key={feature}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <span>0{index + 1}</span>

                <Check size={17} />

                <strong>{feature}</strong>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-details-discovery">
        <div className="container">
          <div>
            <span>NOT SURE WHICH ONE?</span>

            <h2>
              Find the inverter
              <strong>that fits your home.</strong>
            </h2>
          </div>

          <Link
            to="/#find-your-inverter"
            className="product-discovery-button"
          >
            Find your inverter
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;

