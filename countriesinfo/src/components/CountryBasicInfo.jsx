import React from "react";
import ShowInfoButton from "./showInfoButton";

// BASIC INFO FOR COUNTRIES WITH SIMPLE SHOWBUTTON COMPONENT AND COUNTRY NAME DISPLAY
const CountryBasicInfo = ({ filteredCountries, handleAdvancedInfoDisplay }) => {
  return (
    <div>
      {filteredCountries.map((country, index) => (
        <div key={index}>
          <p>{country.name.common}</p>
          <ShowInfoButton
            country={country}
            handleAdvancedInfoDisplay={handleAdvancedInfoDisplay}
          />
        </div>
      ))}
    </div>
  );
};

export default CountryBasicInfo;
