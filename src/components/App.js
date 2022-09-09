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
  }, []);

  const onDeleteHandler = (id) => {
    setNewListing(listing => listing.filter(list => list.id !== id))
  }

  return (
    <div className="app">
      <Header searchTerm={searchTerm}  setSearchTerm={setSearchTerm} />
      <ListingsContainer 
        listing={listing}
        onDeleteHandler={onDeleteHandler}
        searchTerm={searchTerm}
       />
    </div>
  );
}

export default App;
