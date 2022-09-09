import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listing, onDeleteListing, searchTerm }) {

  const [filterListings, setFilterListing] = useState([])

  useEffect(() => {
    setFilterListing(listing.filter((list) => list.description.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm, listing])



  const cards = (filterListings.length ? filterListings : listing).map((list) => (
    <ListingCard listing={list} onDeleteListing={onDeleteListing} />
  ))

  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
