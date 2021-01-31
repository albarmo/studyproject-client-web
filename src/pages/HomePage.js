import React, { useState, useEffect } from "react";
import NavbarLogin from "../components/navbarLogin";
import { Row, Col, Divider } from "antd";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { useHistory } from "react-router-dom";
import "./homepage.css";

// redux state management
import { getFaculty } from "../store/action/facultyAction";
import { useDispatch, useSelector } from "react-redux";

const { Meta } = Card;
const data = [
  { title: "One", id: 1 },
  { title: "Two", id: 2 },
  { title: "Three", id: 3 },
  { title: "Four", id: 4 },
  { title: "Five", id: 5 },
  { title: "Six", id: 6 },
  { title: "Seven", id: 7 },
  { title: "Eight", id: 8 },
  { title: "Nine", id: 9 },
  { title: "Ten", id: 10 },
];

const Background =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftowardsdatascience.com%2Fread-text-from-image-with-one-line-of-python-code-c22ede074cac&psig=AOvVaw0my57A-A3Yb-sAXw4hWkTG&ust=1612191161947000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCToqG2xu4CFQAAAAAdAAAAABAD";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const faculties = useSelector((state) => state.facultyReducer.faculties);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getFaculty());
    // faculties ? setFaculty(faculties) : setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const onChange = () => {
    setLoading(!loading);
  };

  const goToCourse = (name) => {
    history.push(`/course/${name}`);
    console.log(`clicked id ${name}`);
  };

  return (
    <>
      <NavbarLogin />
      <h1>Classroom</h1>

      {/* content classroom */}
      <div className="classroom-container">
        <div className="content-items">
          <Row gutter={[8, 8]}>
            {faculties
              ? faculties.map((val, id) => {
                  return (
                    <Col key={id} className="gutter-row" span={6}>
                      {/* card classroom */}
                      <Card
                        style={{
                          width: 300,
                          height: 300,
                          marginTop: 16,
                          background: "#F4F4F4",
                          border: "none",
                          textAlign: "center",
                          fontWeight: "bolder",
                          cursor: "pointer",
                        }}
                        loading={loading}
                        onClick={(e) => goToCourse(val.name)}
                      >
                        <Meta
                          title={
                            <h3 style={{ fontWeight: "bold" }}>{val.name}</h3>
                          }
                          description={val.id}
                        />
                      </Card>
                    </Col>
                  );
                })
              : null}
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomePage;
