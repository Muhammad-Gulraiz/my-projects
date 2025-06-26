import React, { useState } from "react";
import "../css/ecom3.css";

function Ecom3() {
  const [product, setProduct] = useState("laptop");
  const [date, setDate] = useState("");
  const [quote, setQuote] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const prices = {
    laptop: 1200,
    mobile: 800,
    headphones: 150,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuote(prices[product]);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Product-Based Ecommerce</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Choose a product:
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="headphones">Headphones</option>
          </select>
        </label>

        <label>
          Delivery Date:
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <button type="submit">Get Price</button>

        {submitted && (
          <div className="quote">
            <p>Price: ${quote}</p>
            <button onClick={() => alert("Redirecting to payment...")}>
              Pay Now
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Ecom3;
