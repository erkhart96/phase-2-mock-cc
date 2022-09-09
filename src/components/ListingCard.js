import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {

  const { description, image, location, id } = listing
  const [clicked, setClicked] = useState(false)

  const handleDeleteClick = (e) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
   onDeleteListing(id)
};

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {clicked ? (
          <button className="emoji-button favorite active" onClick={() => {setClicked(!clicked)}}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => {setClicked(!clicked)}}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
