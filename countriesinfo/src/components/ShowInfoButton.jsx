import React from "react";

// BUTTON THAT COMES WITH FILTERED COUNTRIES AND AFTER CLICKING SHOWS ADVANCED INFO OF COUNTRY
const ShowInfoButton = ({ country, handleAdvancedInfoDisplay }) => {
  const handleClick = () => {
    handleAdvancedInfoDisplay(country);
  };

  return <button onClick={handleClick}>show</button>;
};

export default ShowInfoButton;
