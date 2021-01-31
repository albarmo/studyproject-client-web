import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./allCourse.css";
import NavbarLogin from "../components/navbarLogin";

import { getCourse } from "../store/action/courseAction";

import { Tabs } from "antd";

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
          <TabPane tab="Tab 1" key="1">
            {/* {courses.map((val, id) => {
              return (
                <>
                  <h1>{val.title}</h1>
                  <p>{val.id}</p>
                </>
              );
            })} */}
            <p>{JSON.stringify(courses)}</p>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseMaterials;
