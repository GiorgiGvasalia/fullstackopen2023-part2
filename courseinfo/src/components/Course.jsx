import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ courses }) => {

 // maping through the courses array 

  return (
    <div>
      <Header />
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <Content parts={course.parts} />
          <p><strong>total of {course.parts.reduce((total, part) => total + part.exercises, 0)} exercises</strong></p>
        </div>
      ))}
    </div>
  );
}

export default Course;
