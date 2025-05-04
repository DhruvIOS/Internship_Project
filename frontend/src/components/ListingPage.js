import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListingPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings')
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/">Home</Link>

      <h1>All Listings</h1>
      {listings.length === 0 ? (
        <p>No listings available.</p>
      ) : (
        listings.map(listing => (
          <div key={listing._id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
            <h2>{listing.title}</h2>
            <p><strong>Description:</strong> {listing.description}</p>
            <p><strong>Rent:</strong> ${listing.rent}</p>
            <p><strong>Address:</strong> {listing.address}</p>
            <p><strong>Rooms:</strong> {listing.rooms}</p>
            <p><strong>Contact:</strong> {listing.contact}</p>
            <p><strong>Posted:</strong> {new Date(listing.createdAt).toLocaleString()}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default ListingPage;
