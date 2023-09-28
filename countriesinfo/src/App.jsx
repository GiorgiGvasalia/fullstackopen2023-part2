import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryBasicInfo from "./components/CountryBasicInfo";
import CountriesAdvancedInfo from "./components/CountriesAdvancedInfo";

function App() {
  // state management

  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showAdvancedInfo, setShowAdvancedInfo] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleInputChange = (e) => {
    const typedValue = e.target.value.toLowerCase();
    setSearchInput(typedValue);

    const filteredValue = countries.filter((country) =>
      country.name.common.toLowerCase().includes(typedValue)
    );
    setFilteredCountries(filteredValue);
    if (typedValue.length === 0) {
      setFilteredCountries([]);
    }
    setShowAdvancedInfo(false);
    setSelectedCountry(null); 
  };

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleAdvancedInfoShow = (country) => {
    setSelectedCountry(country);
    setShowAdvancedInfo(true);
    console.log(`ADVANCED INFO OF ${country}`);
  };

  // FUNCTIONALITY TO CONDITIONALLY RENDER COMPONENTS FOR DIFFERENT SITUATIONS

  const manyResponse = filteredCountries.length > 10;
  const onlyOneCountry = filteredCountries.length === 1;
  const noCountry =
    countries.length > 0 &&
    searchInput.length > 0 &&
    filteredCountries.length === 0;

  // GOOD WAY TO AUTOMATICALLY RENDER ADVANCED INFO COMPONENT WHEN ONLY ONE COUNTRY IS FILTERED
  useEffect(() => {
    if (onlyOneCountry) {
      handleAdvancedInfoShow(filteredCountries[0]);
    }
  }, [onlyOneCountry, filteredCountries]);

  

  return (
    <>
      <div>
        Find country
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Type a country name"
        />
        {noCountry ? (
          <p>no such country</p>
        ) : manyResponse || showAdvancedInfo ? (
          <CountriesAdvancedInfo filteredCountries={[selectedCountry]} />
        ) : (
          <CountryBasicInfo
            filteredCountries={filteredCountries}
            handleAdvancedInfoDisplay={handleAdvancedInfoShow}
          />
        )}
      </div>
    </>
  );
}

export default App;
