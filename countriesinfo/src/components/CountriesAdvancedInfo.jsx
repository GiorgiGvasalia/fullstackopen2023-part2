import React from "react";

const CountriesAdvancedInfo = ({ filteredCountries }) => {
  // HERE SOME ADVANCED INFO FOR COUNTRIES AND ACCESSING OBJECT VALUES FOR DISPLAYING LANGUAGES
  // FLAG DISPLAY AND ALSO WEATHER DISPLAY

  return (
    <div>
      {filteredCountries.map((country, index) => {
        if (country) { 
          return (
            <div key={index}>
              <h2>{country.name.common}</h2>
              <p>{country.area}</p>
              <p>{country.capital}</p>
              <p>area {country.area}</p>
              <h4>languages</h4>
              <ul>
                {Object.values(country.languages).map((language, langIndex) => (
                  <li key={langIndex}>{language}</li>
                ))}
              </ul>
              {
                <img
                  src={country.flags.png}
                  alt={`flag of ${country.name.common}`}
                />
              }
            </div>
          );
        } else {
          return null; 
        }
      })}
    </div>
  );
};

export default CountriesAdvancedInfo;
