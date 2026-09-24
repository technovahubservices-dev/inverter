import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";

function Checkout({
  cartItems,
  onIncrease,
  onDecrease,
  onClear,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    payment: "Cash on Delivery",
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    }

    if (!form.address.trim()) {
      nextErrors.address = "Address is required.";
    }

    if (!form.city.trim()) nextErrors.city = "City is required.";
    if (!form.state.trim()) nextErrors.state = "State is required.";

    if (!form.pin.trim()) {
      nextErrors.pin = "PIN code is required.";
    } else if (!/^\d{6}$/.test(form.pin)) {
      nextErrors.pin = "Enter a valid 6-digit PIN.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;

    const orderItems = cartItems
      .map(
        (item) =>
          `${item.name} × ${item.quantity} — ₹${(
            item.price * item.quantity
          ).toLocaleString("en-IN")}`
      )
      .join("\n");

    const subject = encodeURIComponent(
      `VOLTERRA Order Request - ${form.name}`
    );

    const body = encodeURIComponent(
      `Hello VOLTERRA Team,

I would like to place an order.

CUSTOMER DETAILS
----------------
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

DELIVERY ADDRESS
----------------
${form.address}
${form.city}, ${form.state} - ${form.pin}

PAYMENT PREFERENCE
------------------
${form.payment}

ORDER DETAILS
-------------
${orderItems}

Subtotal: ₹${subtotal.toLocaleString("en-IN")}

Please contact me to confirm the order, delivery details and next steps.

Thank you,
${form.name}`
    );

    window.location.href =
      `mailto:orders@volterra.in?subject=${subject}&body=${body}`;
  };

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <section className="checkout-empty">
          <div className="container">
            <div className="checkout-empty-icon">
              <ShoppingBag size={28} strokeWidth={1.4} />
            </div>

            <span>YOUR CART IS EMPTY</span>

            <h1>
              Nothing to check out
              <strong>yet.</strong>
            </h1>

            <p>
              Explore the VOLTERRA range and choose the
              inverter that fits your home.
            </p>

            <Link to="/#products" className="checkout-primary-button">
              Explore our products
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <div className="checkout-glow" />

        <div className="container">
          <Link to="/#products" className="checkout-back">
            <ArrowLeft size={15} />
            Continue shopping
          </Link>

          <motion.div
            className="checkout-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span>VOLTERRA CHECKOUT</span>
            <h1>
              Complete your
              <strong>order.</strong>
            </h1>
            <p>
              Enter your details and send your order request
              directly to the VOLTERRA team.
            </p>
          </motion.div>

          <div className="checkout-grid">
            <motion.div
              className="checkout-form-card"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="checkout-card-heading">
                <span>01</span>
                <div>
                  <small>CUSTOMER INFORMATION</small>
                  <h2>Your details</h2>
                </div>
              </div>

              <div className="checkout-fields">
                <div className="checkout-field full">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <small>{errors.name}</small>
                  )}
                </div>

                <div className="checkout-field">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <small>{errors.email}</small>
                  )}
                </div>

                <div className="checkout-field">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      updateField("phone", e.target.value)
                    }
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && (
                    <small>{errors.phone}</small>
                  )}
                </div>

                <div className="checkout-field full">
                  <label>Delivery Address *</label>
                  <textarea
                    rows="4"
                    value={form.address}
                    onChange={(e) =>
                      updateField("address", e.target.value)
                    }
                    placeholder="House / flat number, street, area"
                  />
                  {errors.address && (
                    <small>{errors.address}</small>
                  )}
                </div>

                <div className="checkout-field">
                  <label>City *</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) =>
                      updateField("city", e.target.value)
                    }
                    placeholder="City"
                  />
                  {errors.city && (
                    <small>{errors.city}</small>
                  )}
                </div>

                <div className="checkout-field">
                  <label>State *</label>
                  <input
                    type="text"
                    value={form.state}
                    onChange={(e) =>
                      updateField("state", e.target.value)
                    }
                    placeholder="State"
                  />
                  {errors.state && (
                    <small>{errors.state}</small>
                  )}
                </div>

                <div className="checkout-field">
                  <label>PIN Code *</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength="6"
                    value={form.pin}
                    onChange={(e) =>
                      updateField(
                        "pin",
                        e.target.value.replace(/\D/g, "")
                      )
                    }
                    placeholder="6-digit PIN"
                  />
                  {errors.pin && (
                    <small>{errors.pin}</small>
                  )}
                </div>
              </div>

              <div className="checkout-section-divider" />

              <div className="checkout-card-heading">
                <span>02</span>
                <div>
                  <small>PAYMENT PREFERENCE</small>
                  <h2>Choose a method</h2>
                </div>
              </div>

              <div className="checkout-payment-options">
                <button
                  type="button"
                  className={
                    form.payment === "Cash on Delivery"
                      ? "checkout-payment active"
                      : "checkout-payment"
                  }
                  onClick={() =>
                    updateField(
                      "payment",
                      "Cash on Delivery"
                    )
                  }
                >
                  <span className="checkout-payment-radio">
                    {form.payment === "Cash on Delivery" && (
                      <Check size={12} />
                    )}
                  </span>

                  <span>
                    <strong>Cash on Delivery</strong>
                    <small>
                      Payment details confirmed with the
                      VOLTERRA team.
                    </small>
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    form.payment === "Online Payment"
                      ? "checkout-payment active"
                      : "checkout-payment"
                  }
                  onClick={() =>
                    updateField(
                      "payment",
                      "Online Payment"
                    )
                  }
                >
                  <span className="checkout-payment-radio">
                    {form.payment === "Online Payment" && (
                      <Check size={12} />
                    )}
                  </span>

                  <span>
                    <strong>Online Payment</strong>
                    <small>
                      Payment will be arranged with the
                      VOLTERRA team.
                    </small>
                  </span>
                </button>
              </div>

              <p className="checkout-demo-note">
                Online payment is not connected yet. Your
                selected preference will be included in the
                order request email.
              </p>
            </motion.div>

            <motion.aside
              className="checkout-summary-card"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="checkout-summary-heading">
                <span>03</span>
                <div>
                  <small>ORDER SUMMARY</small>
                  <h2>Your order</h2>
                </div>
              </div>

              <div className="checkout-summary-items">
                {cartItems.map((item) => (
                  <div
                    className="checkout-summary-item"
                    key={item.id}
                  >
                    <div className="checkout-summary-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                      <span>{item.quantity}</span>
                    </div>

                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.category}</small>
                    </div>

                    <b>
                      ₹
                      {(
                        item.price * item.quantity
                      ).toLocaleString("en-IN")}
                    </b>
                  </div>
                ))}
              </div>

              <div className="checkout-summary-divider" />

              <div className="checkout-total-row">
                <span>Subtotal</span>
                <strong>
                  ₹{subtotal.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="checkout-total-row muted">
                <span>Delivery</span>
                <span>Confirmed later</span>
              </div>

              <div className="checkout-summary-divider" />

              <div className="checkout-grand-total">
                <span>Total</span>
                <strong>
                  ₹{subtotal.toLocaleString("en-IN")}
                </strong>
              </div>

              <button
                type="button"
                className="checkout-place-button"
                onClick={handlePlaceOrder}
              >
                Place order
                <ArrowRight size={17} />
              </button>

              <p className="checkout-secure-note">
                Your order request will open in your email
                application with all entered details.
              </p>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
