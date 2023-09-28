import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

import personsArray from "../db.json";
import personsServices from "./services/persons";

console.log("this is from personsArray  ", personsArray);

export const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [ notification, setNotification ] = useState(null)





  useEffect(() => {
    personsServices.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleFilter = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredName = persons.filter((person) => {
      return person.name.toLowerCase().startsWith(searchValue);
    });

    setFilterValue(e.target.value);
    setFilteredPerson(filteredName);
  };

  const handleDeletePerson = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}`);

    if (confirmDelete) {
      personsServices.deletePerson(id).then(returnedPerson => {
        setPersons(persons.filter((person) => person.id !== returnedPerson));
        setNotification({message: `${name} deleted from phonebook` , messageType: 'delete'})
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      });
      
    }
    
  };

  // HERE GOES FUNCTION THAT ADDS PERSON TO A SERVER IT ALSO CHECKS VALIDITY OF USER INPUTS

  const handleAddingPersons = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);
    const confirmUpdate =
      existingPerson && window.confirm(`Update the number for ${newName}?`);

    if (confirmUpdate) {
      const updatedPersonObject = {
        ...existingPerson,
        number: newNumber,
      };

      personsServices
        .updateNumber(existingPerson.id, updatedPersonObject)
        .then(() => {
          setPersons(
            persons.map((person) =>
              person.id === existingPerson.id ? updatedPersonObject : person
            )
          );
          setNewName("");
          setNewNumber("");
        });
    } else {
      const newPersonObject = {
        name: newName,
        number: newNumber,
      };

      const checkValidInputs = (nameInput, numberInput) => {
        return nameInput.length > 0 && numberInput.length > 0;
      };

      if (checkValidInputs(newName, newNumber)) {
        personsServices.create(newPersonObject).then((response) => {
          setPersons(persons.concat(response.data));
          
          setNewName("");
          setNewNumber("");
          setNotification({ message: `${newName} added succesfully!`, messageType: 'success'})
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        });
      } else {
        alert("Please type both name and number.");
      }
    }
  };

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const handleUserInput = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <Notification message={notification?.message} messageType={notification?.messageType}/>
      <h2>Phonebook</h2>
      filter shown with:
      <Filter
        filterValue={filterValue}
        handleFilter={handleFilter}
        filteredPerson={filteredPerson}
      />
      <PersonForm
        handleUserInput={handleUserInput}
        handleNumberInput={handleNumberInput}
        handleAddingPersons={handleAddingPersons}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} onDeletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;