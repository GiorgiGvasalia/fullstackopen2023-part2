import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
 

  // maping through parts array which is inside courses array and getting its id, name and number of exercises

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} partName={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
