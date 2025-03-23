import React, { useState } from "react";
import "../styleCss/Challan7.css";

const Challan7 = () => {
  const [formData, setFormData] = useState({ name: "", amount: "", purpose: "", date: "" });
  const [challans, setChallans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setChallans((prev) => [...prev, formData]);
    setFormData({ name: "", amount: "", purpose: "", date: "" });
    setCurrentPage(challans.length + 1);
  };

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredChallans = challans.filter((challan) => !filter || challan.purpose === filter);
  const counts = ["small scale mining", "large scale mining", "minor minerals"].reduce((acc, type) => {
    acc[type] = challans.filter((challan) => challan.purpose === type).length;
    return acc;
  }, {});

  const currentChallans = filteredChallans.slice((currentPage - 1) * 1, currentPage * 1); // One per page

  return (
    <div className="challan-container">
      <h2>Challan Form 32-A</h2>

      <div className="challan-main">
        <form onSubmit={handleSubmit} className="challan-form">
          <div className="filter-container">
            <label>
              Filter by Purpose:
              <select onChange={handleFilterChange} value={filter}>
                <option value="">All</option>
                <option value="small scale mining">Small Scale Mining</option>
                <option value="large scale mining">Large Scale Mining</option>
                <option value="minor minerals">Minor Minerals</option>
              </select>
            </label>
          </div>

          <label>
            Name of Participants:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Amount:
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
          </label>
          <label>
            Purpose:
            <select name="purpose" value={formData.purpose} onChange={handleChange} required>
              <option value="">Select Purpose</option>
              <option value="small scale mining">Small Scale Mining</option>
              <option value="large scale mining">Large Scale Mining</option>
              <option value="minor minerals">Minor Minerals</option>
            </select>
          </label>
          <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </label>
          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <div className="challan-list">
          <h3>Generated Challans</h3>
          <p>Small Scale Mining: {counts["small scale mining"]}</p>
          <p>Large Scale Mining: {counts["large scale mining"]}</p>
          <p>Minor Minerals: {counts["minor minerals"]}</p>

          <ul>
            {currentChallans.map((challan, index) => (
              <li key={index}>
                <p>Name: {challan.name}</p>
                <p>Amount: {challan.amount}</p>
                <p>Purpose: {challan.purpose}</p>
                <p>Date: {challan.date}</p>
              </li>
            ))}
          </ul>

          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredChallans.length) }, (_, index) => (
              <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challan7;
