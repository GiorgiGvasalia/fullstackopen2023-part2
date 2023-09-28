import React from "react";

const Persons = ({ persons, onDeletePerson }) => {

  // CHECKING IF ARRAYS LENGTH IS > THAN 0 AND ALSO TYPES OF TYPES OF PERSON VALUES

  if (!Array.isArray(persons) || persons.length === 0) {
    return <p>No persons to display.</p>;
  }

  return (
    <div>
      {persons.map((person) => {
        if (!person || typeof person !== "object") {
          return null; 
        }

        const { id, name, number } = person;

        if (typeof id !== "number" || typeof name !== "string" || typeof number !== "string") {
          return null; 
        }

        return (
          <div key={id}>
            <p>
              {name} {number}
              <button onClick={() => onDeletePerson(id, name)}>delete</button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
