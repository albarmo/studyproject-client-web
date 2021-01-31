import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarLogin from "../components/navbarLogin";
import { Player } from "video-react";
import "./courseDetails.css";
import "../../node_modules/video-react/dist/video-react.css";
<link rel="stylesheet" href="/css/video-react.css" />;

const courseDetails = () => {
  return (
    <>
      <NavbarLogin />
      <div className="course-details-header">
        <h1 className="course-detail-title">Nama Mata Pelajaran</h1>
        <h3 className="course-detail-title">Nama Jurusan</h3>
      </div>
      <div className="container-course-details">
        <div className="course-details">
          <div className="course-details-left">
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              videoWidth="50%"
              videoHeight="20px"
            />
          </div>
          <div className="course-details-right">
            <h1 style={{ fontWeight: "bold" }}>Title Materi</h1>
            <p>
              Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
              vestibulum sed facilisi et nulla id bibendum elementum. Lectus dui
              sollicitudin id elementum aliquam placerat pretium ornare turpis.
              Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
              vestibulum sed facilisi et nulla id bibendum elementum. Lectus dui
              sollicitudin id elementum aliquam placerat pretium ornare turpis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default courseDetails;
