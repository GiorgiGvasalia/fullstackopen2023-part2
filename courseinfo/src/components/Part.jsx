import React from "react";

const Part = ({  partName, exercises }) => {
    
  return (
    <div>
      <p>
        {partName} {exercises} exercises
      </p>
    </div>
  );
};

export default Part;
