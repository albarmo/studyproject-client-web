import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./allCourse.css";
import NavbarLogin from "../components/navbarLogin";
import { getCourse } from "../store/action/courseAction";
import { Card, Tabs } from "antd";

import CardCourse from "../components/cardCourse";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const CourseMaterials = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer.course);

  useEffect(() => {
    dispatch(getCourse());
  }, []);

  return (
    <div className="course">
      <NavbarLogin />
      <h1>Course</h1>
      <p>fetch course by faculty id</p>
      <div className="container-course">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Courses" key="1">
            {courses
              ? courses.map((val, id) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <CardCourse courses={courses[id]} />
                    </div>
                  );
                })
              : null}
          </TabPane>
          <TabPane tab="Bimbingan" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tata Usaha" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseMaterials;
