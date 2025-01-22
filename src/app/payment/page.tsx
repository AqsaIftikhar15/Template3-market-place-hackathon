"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";  // Updated import

// Define types for the cart items
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  
  const totalAmount = searchParams.get("totalAmount");
  const cartData = searchParams.get("cartData");

  // Parse the cart data from the query string
  const cartItems: CartItem[] = cartData ? JSON.parse(cartData) : [];

  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  // Calculate Subtotal (price * quantity)
  const calculateSubtotal = (item: CartItem) => item.price * item.quantity;

  // Calculate Total Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  // Fixed shipping cost (this could be dynamic, but here it is static for simplicity)
  const shipping = 10.0;

  // Fixed tax rate of 10%
  const taxRate = 0.10;
  const taxes = subtotal * taxRate;

  // Calculate Total Price
  const totalPrice = subtotal + shipping + taxes;

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment successful! This is a mock implementation.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Checkout</h2>

      {/* Cart Summary */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl mb-4 font-semibold">Order Summary</h3>
        
        {/* Display cart items */}
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-sm sm:text-base">
              <span>{item.name}</span>
              <span>₹{item.price} x {item.quantity} = ₹{calculateSubtotal(item).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        {/* Subtotal */}
        <div className="flex justify-between mt-4 font-bold text-sm sm:text-base">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between mt-2 font-semibold text-sm sm:text-base">
          <span>Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>

        {/* Taxes */}
        <div className="flex justify-between mt-2 font-semibold text-sm sm:text-base">
          <span>Taxes (10%)</span>
          <span>{taxes.toFixed(2)}</span>
        </div>

        {/* Total Price */}
        <div className="flex justify-between mt-4 font-bold text-sm sm:text-base">
          <span>Total Price</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-xl sm:text-2xl mb-4 font-semibold">Payment Method</h3>
        
        <div className="mb-4">
          <label className="block text-sm sm:text-base mb-2" htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {paymentMethod === "creditCard" && (
          <>
            <div className="mb-4">
              <label className="block text-sm sm:text-base mb-2" htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter card number"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm sm:text-base mb-2" htmlFor="expiryDate">Expiry Date</label>
                <input
                  id="expiryDate"
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm sm:text-base mb-2" htmlFor="cardHolderName">Cardholder Name</label>
                <input
                  id="cardHolderName"
                  type="text"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter cardholder's name"
                  required
                />
              </div>
            </div>
          </>
        )}

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md text-sm sm:text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
