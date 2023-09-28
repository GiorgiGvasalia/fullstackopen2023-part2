import React from "react";

const Filter = ({ filterValue, handleFilter, filteredPerson }) => {
  return (
    <div>
      <input
        value={filterValue}
        onChange={handleFilter}
        placeholder="search by name"
      />
      <ul>
        {filterValue ? (
          filteredPerson.length > 0 ? (
            filteredPerson.map((person) => (
              <li key={person.id}>{person.name}</li>
            ))
          ) : (
            <p>no results matching</p>
          )
        ) : null}
      </ul>
    </div>
  );
};

export default Filter;
