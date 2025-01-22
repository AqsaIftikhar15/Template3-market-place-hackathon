"use client";

import React, { useState} from "react";
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Next.js Image component

// Define the CartItem type
type CartItem = {
  _id: string;
  productName: string;
  price: number;
  image: { asset: { url: string } };
  quantity: number;
  color: string;
  description: string;
  category: string;
  colors: string[]; // Assuming colors is an array
};

const CartComponent = () => {
  const router = useRouter();

  // Get the cart items from localStorage when the page loads
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Checkout form state
  const [step, setStep] = useState(1);
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to increase quantity
  const increaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove item from the cart
  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle Checkout (go to the next step)
  const handleCheckout = () => {
    setStep(2); // Move to the next step (shipping)
  };

  // Handle form changes
  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  // Handle shipping information submission
  const handleShippingSubmit = () => {
    // On submit of shipping, navigate to the payment page
    const totalAmount = calculateTotal();
    const cartData = JSON.stringify(cart);

    router.push(`/payment?totalAmount=${totalAmount}&cartData=${encodeURIComponent(cartData)}`);
  };

  // Render checkout form
  const renderCheckoutForm = () => {
    if (step === 1) {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Customer Information</h2>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={billingDetails.name}
              onChange={handleBillingChange}
              className="block w-full p-2 border mb-4"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleBillingChange}
              className="block w-full p-2 border mb-4"
            />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={billingDetails.phone}
              onChange={handleBillingChange}
              className="block w-full p-2 border mb-4"
            />
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={billingDetails.address}
              onChange={handleBillingChange}
              className="block w-full p-2 border mb-4"
            />
          </div>
          <button
            onClick={() => setStep(2)}
            className="bg-black text-white py-3 px-6 rounded-md w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleShippingChange}
              className="block w-full p-2 border mb-4"
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleShippingChange}
              className="block w-full p-2 border mb-4"
            />
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={shippingDetails.postalCode}
              onChange={handleShippingChange}
              className="block w-full p-2 border mb-4"
            />
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={shippingDetails.country}
              onChange={handleShippingChange}
              className="block w-full p-2 border mb-4"
            />
          </div>
          <button
            onClick={handleShippingSubmit}
            className="bg-black text-white py-3 px-6 rounded-md w-full sm:w-auto"
          >
            Next
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="font-sans max-w-4xl mx-auto bg-white py-4 px-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="cart-list space-y-6">
        {cart.map((item) => (
          <div
            key={item._id}
            className="cart-item flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 border-b border-gray-300 pb-4"
          >
            {/* Left Section: Image */}
            <div className="flex items-center space-x-4">
              <Image
                src={item.image.asset.url}
                alt={item.productName}
                width={100}
                height={100}
                className="object-contain"
                priority // Optional: Use the 'priority' prop if it's a hero image
              />
              <div className="product-details">
                <h3 className="text-xl font-bold">{item.productName}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm">Color: {item.color}</p>
                <p className="text-lg font-semibold">₹ {item.price}</p>
              </div>
            </div>

            {/* Quantity and Remove Section */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="bg-gray-200 p-2 rounded-md"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="bg-gray-200 p-2 rounded-md"
                >
                  +
                </button>
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeItem(item._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="total mt-6 flex justify-between">
        <h3 className="text-xl font-semibold">Total</h3>
        <span className="text-lg font-semibold">₹ {calculateTotal()}</span>
      </div>

      {/* Checkout button */}
      <div className="checkout mt-6 flex justify-end">
        <button
          onClick={handleCheckout}
          className="bg-black text-white py-3 px-6 rounded-md w-full sm:w-auto"
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Checkout form */}
      <div className="checkout-form mt-6">{renderCheckoutForm()}</div>
    </div>
  );
};

export default CartComponent;
