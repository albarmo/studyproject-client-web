import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// form component input
import { Select } from "antd";
import { Form, Input, Typography, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import logo from "../images/logo.png";
// antd uploader
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
// css
import "./register.css";
import "antd/dist/antd.css";

import { userRegister } from "../store/action/userAction";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { Title } = Typography;
  const { Option } = Select;

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [gender, setGender] = useState("");
  const [classType, setclassType] = useState("");
  const [profile_image, setImage] = useState("");

  function firstNameHandler(e) {
    e.preventDefault();
    setFirstName(e.target.value);
  }

  function lastNameHandler(e) {
    e.preventDefault();
    setLastName(e.target.value);
  }
  function emailHandler(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function phoneNumberHandler(e) {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  }

  function schoolHandler(e) {
    e.preventDefault();
    setSchool(e.target.value);
  }

  function passwordHandler(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function retypePasswordHandler(e) {
    e.preventDefault();
    setRetypePassword(e.target.value);
  }

  function classTypeHandler(e) {
    e.preventDefault();
    setclassType(e.target.value);
  }
  // select
  function genderHandleChange(value) {
    setGender(value);
  }

  function classHandleChange(value) {
    setclassType(value);
  }

  function imageHandler(e) {
    console.log("image handler");
    setImage(e.target.files[0]);
    console.log(profile_image, "image loaded");
  }

  function clearProfileImage() {
    setImage("");
    console.log("Profile Image Removed");
  }

  function register() {
    // dispatch register
    console.log("register");
    let fullname = `${firstname} ${lastname}`;
    var data = new FormData();
    data.append("profile_image", profile_image);
    data.append("fullname", fullname);
    data.append("email", email);
    data.append("school", school);
    data.append("phone_number", phone_number);
    data.append("password", password);
    data.append("class", classType);
    data.append("gender", gender);
    console.log(data, "<< from formdata");

    const payload = {
      fullname,
      profile_image,
      phone_number,
      email,
      gender,
      classType,
      school,
      password,
    };
    dispatch(userRegister(data, payload.email));
    // history.push("/login");
  }

  return (
    <>
      <div className="register">
        <div className="section-register">
          <div className="section-left-register">
            <div className="clear"></div>
            <div className="content-up">
              <h2 id="register-header">Studyproject</h2>
              <p>
                Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
                vestibulum sed facilisi et nulla id bibendum elementum
              </p>
            </div>
            <div className="content-down">
              <p>Have account ?</p>
              <Link to="/login">
                <h3>Sign In</h3>
              </Link>
            </div>
          </div>

          {/* register form */}
          <div className="section-right-register">
            <div className="register-right-header">
              <Title style={{ fontWeight: "bold" }}>Register</Title>
              <img src={logo} alt="logo" width="150" height="150"></img>
            </div>

            <div className="register-right-content">
              <div className="register-form-left">
                <div className="top-form-register">
                  <div className="input-file">
                    {/* profile image */}
                    {profile_image ? (
                      <>
                        <img
                          src={URL.createObjectURL(profile_image)}
                          alt={profile_image.name}
                          width="90px"
                          height="auto"
                        />
                        <p
                          style={{ fontWeight: "normal" }}
                          onClick={clearProfileImage}
                        >
                          {profile_image.name}
                        </p>
                      </>
                    ) : null}

                    {!profile_image ? (
                      <input
                        type="file"
                        name="profile_image"
                        id="profile_image"
                        onChange={imageHandler}
                      />
                    ) : null}
                  </div>

                  {/* firtst name */}
                  <Input
                    placeholder="First Name"
                    name="firstname"
                    id="firstname"
                    onChange={(e) => firstNameHandler(e)}
                    style={{
                      width: "90%",
                      height: "50px",
                      top: "25px",
                      left: "5px",
                    }}
                  />
                </div>

                {/* lastname */}
                <Input
                  placeholder="Last Name"
                  name="lastname"
                  id="lastname"
                  onChange={(e) => lastNameHandler(e)}
                  style={{
                    width: "90%",
                    height: "50px",
                    left: "5px",
                    border: "",
                    top: "20px",
                  }}
                />

                {/* email */}
                <Input
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={(e) => emailHandler(e)}
                  style={{
                    width: "90%",
                    height: "50px",
                    top: "10px",
                    left: "5px",
                    border: "",
                  }}
                />

                {/* school */}
                <Input
                  placeholder="School name"
                  name="school"
                  id="school"
                  onChange={(e) => schoolHandler(e)}
                  style={{
                    width: "90%",
                    height: "50px",
                    left: "5px",
                  }}
                />

                {/* phone number */}
                <Input.Group
                  size="large"
                  style={{
                    left: "50px",
                    border: "none",
                    left: "30px",
                  }}
                >
                  <Row gutter={8}>
                    <Col span={5}>
                      <Input defaultValue="+62" />
                    </Col>
                    <Col span={16} style={{ left: "15px" }}>
                      <Input
                        defaultValue=""
                        name="phone_number"
                        id="phone_number"
                        placeholder="123-123-123"
                        onChange={(e) => phoneNumberHandler(e)}
                      />
                    </Col>
                  </Row>
                </Input.Group>
              </div>

              <div className="register-form-right">
                {/* password */}
                <Input.Password
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={(e) => passwordHandler(e)}
                  style={{
                    top: "-10px",
                    width: "90%",
                    height: "50px",
                    left: "5px",
                    border: "",
                  }}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />

                {/* re-password */}
                <Input.Password
                  placeholder="Confrim Password"
                  onChange={(e) => retypePasswordHandler(e)}
                  style={{
                    top: "-5px",
                    width: "90%",
                    height: "50px",
                    left: "5px",
                    border: "",
                  }}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />

                {/* gender selcet */}
                <Select
                  defaultValue="gender"
                  name="gender"
                  id="gender"
                  onChange={genderHandleChange}
                  style={{
                    width: "90%",
                    top: "-30px",
                    left: "5px",
                  }}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>

                {/* class selcet */}
                <Select
                  defaultValue="Class"
                  name="class"
                  id="class"
                  onChange={(e) => classTypeHandler(e.value)}
                  style={{
                    width: "90%",
                    top: "-30px",
                    left: "5px",
                  }}
                  onChange={classHandleChange}
                >
                  <Option value="1">Class 1</Option>
                  <Option value="2">Class 2</Option>
                  <Option value="3">Class 3</Option>
                </Select>
              </div>
            </div>

            <div className="register-form-bottom">
              <div className="checkbox-register">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  value="confrimed"
                ></input>
                <label for="confirmation">
                  <p>
                    Data yang diinputkan adalah data valid, dan data menyetujui
                    terms and condition
                  </p>
                </label>
              </div>
              <h4 className="btn-register" htmlType="submit" onClick={register}>
                CREATE ACCOUNT
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
