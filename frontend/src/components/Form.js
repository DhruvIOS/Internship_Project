import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rent: '',
    address: '',
    rooms: '',
    contact: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Listing submitted!");
        setFormData({
          title: '',
          description: '',
          rent: '',
          address: '',
          rooms: '',
          contact: ''
        });
      } else {
        alert("Submission failed!");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center' }}>Submit a New Listing</h2>
      <form onSubmit={handleSubmit}>
        {['title', 'description', 'rent', 'address', 'rooms', 'contact'].map((field) => (
          <div key={field} style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', textTransform: 'capitalize' }}>{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </div>
        ))}
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%',
          fontWeight: 'bold'
        }}>Submit Listing</button>
      </form>

      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <Link to="/listings" style={{ textDecoration: 'none', color: '#007bff' }}>View All Listings</Link>
      </div>
    </div>
  );
}

export default Form;
