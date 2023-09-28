import React from "react";

const PersonForm = ({
  handleUserInput,
  handleNumberInput,
  handleAddingPersons,
  newName,
  newNumber,
}) => {
  return (
    <div>
      <form>
        <div>
          name: <input type="text" onChange={handleUserInput} value={newName} />
          number:{" "}
          <input type="text" onChange={handleNumberInput} value={newNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleAddingPersons}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
