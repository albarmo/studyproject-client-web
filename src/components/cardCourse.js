import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./cardCourse.css";

const CardCourse = ({ courses }) => {
  const history = useHistory();
  function goDetailCourse(id) {
    console.log(`Redirected to => /course/details/${id}`);
    history.push(`/course/details/${id}`);
  }

  return (
    <div className="card-course" onClick={(e) => goDetailCourse(courses.id)}>
      <div className="card-course-image">
        <img
          src="https://vscode.github.com/assets/img/github-vscode-icon.svg"
          alt="tes"
          width="150px"
          height="180px"
        />
      </div>
      <div className="card-course-content">
        <h1 className="card-title">{courses.title}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <p>courseDate</p>
      </div>
    </div>
  );
};

export default CardCourse;
