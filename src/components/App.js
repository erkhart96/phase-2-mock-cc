import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing, setListing] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((data) => setListing(data))
  }, [])


  const onDeleteListing = (id) => {
    setListing(listing => listing.filter(list => list.id !== id))
  }


  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      <ListingsContainer 
        listing={listing}
        onDeleteListing={onDeleteListing}
        searchTerm={searchTerm} 
      />
    </div>
  );
}

export default App;
