import React from 'react';
import Form from './components/Form'
import ListingPage from './components/ListingPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App(){
  return(
    
    <div>
      <Router>
      
      <h1>Rental Listing</h1>
      

      <hr />

  

      <Routes>
      <Route path="/" element={<Form />} />

        <Route path="/listings" element={<ListingPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>

 
    </div>
  )
}

export default App