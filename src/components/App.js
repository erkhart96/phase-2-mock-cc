import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing, setNewListing] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((data) => setNewListing(data))
  }, [])

  const onDeleteListing = (id) => {
    setNewListing(listing => listing.filter(list => list.id !== id))
  }

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <ListingsContainer
      onDeleteListing={onDeleteListing}
      listing={listing}
      searchTerm={searchTerm} 
       />
    </div>
  );
}

export default App;
