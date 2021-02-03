import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// form component input
import { Select } from "antd";
import { Form, Input, Typography, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import logo from "../images/logo.png";
// antd uploader
import { Upload , message} from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ImgCrop from "antd-img-crop";
// css
import "../components/custom.css";
import "antd/dist/antd.css";

import { userRegister } from "../store/action/userAction";
import { useDispatch } from "react-redux";

const RegisterPage = () => {

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }


  const state = {
    loading: false,
  };

  const { loading, imageUrl } = state.loading;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

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
    setImage(e.file[0]);
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
        <div className="col-md-4 register-caption">
          <div className="register-caption-content">
            <h2>Studyproject</h2>
            <p>
              Quis lobortis massa vel morbi ac mi, eu senectus. A nullam
              vestibulum sed facilisi et nulla id bibendum elementum
            </p>
          </div>
          <div className="regsister-caption-login">
            <p>Have an account ?</p>
            <div className="login-link">
              <Link to="/login">
                <h3>Sign In</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-8 register-form">
          <div className="register-form-header">
            <Title style={{ fontWeight: "bold" }}>Registration</Title>
            <img src={logo} alt="logo" width="150" height="150"></img>
          </div>
          <div className="register-form-input">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-3 register-form-upload">
                      {/* profile image */}
                      <Upload
                        name="profile_image"
                        id="profile_image"
                        listType="picture-card"
                        className="upload-profile"
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={imageHandler}
                      >
                        {profile_image ? <img src={URL.createObjectURL(profile_image)} alt={profile_image.name} style={{ width:"90px" , height:"auto" }} /> : uploadButton}
                      </Upload>
                  </div>
                  <div className="col-sm-9 form-input-group">
                    {/* firtst name */}
                      <label for="firstname">First Name</label>
                      <Input
                        placeholder="First Name"
                        name="firstname"
                        id="firstname"
                        onChange={(e) => firstNameHandler(e)}
                        style={{
                          width: "100%",
                          height: "65px",
                          top: "10px",
                          borderStyle: "none",
                          borderRadius: "6px",
                          border: "0.5px solid #000000",
                          boxSizing : "border-box",
                          fontWeight: "600",
                          fontSize: "16px",
                          lineHeight: "21px",
                          color: "#585858"
                        }}
                      />
                  </div>
                </div>
              </div>
              <div className="col-md-6 form-input-group">
                {/* lastname */}
                <label for="lastname">Last Name</label>
                <Input
                  placeholder="Last Name"
                  name="lastname"
                  id="lastname"
                  className=""
                  onChange={(e) => lastNameHandler(e)}
                  style={{
                    width: "100%",
                    height: "65px",
                    top: "10px",
                    borderStyle: "none",
                    borderRadius: "6px",
                    border: "0.5px solid #000000",
                    boxSizing : "border-box",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "21px",
                    color: "#585858"
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 form-input-group">
                {/* email */}
                <label for="email">e-mail</label>
                <Input
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={(e) => emailHandler(e)}
                  style={{
                    width: "100%",
                    height: "65px",
                    top: "10px",
                    borderStyle: "none",
                    borderRadius: "6px",
                    border: "0.5px solid #000000",
                    boxSizing : "border-box",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "21px",
                    color: "#585858"
                  }}
                />
              </div>
              <div className="col-md-6 form-input-group">
                {/* phone number */}
                <label for="phone_number">Phone Number</label>
                <Input.Group
                  size="large"
                >
                  <Row gutter={8}>
                    <Col span={5}>
                      <Input defaultValue="+62" 
                            style={{
                            width: "100%",
                            height: "65px",
                            top: "10px",
                            borderStyle: "none",
                            borderRadius: "6px",
                            border: "0.5px solid #000000",
                            boxSizing : "border-box",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "21px",
                            color: "#585858"
                          }}/>
                    </Col>
                    <Col span={19}>
                      <Input
                        defaultValue=""
                        name="phone_number"
                        id="phone_number"
                        placeholder="123-123-123"
                        style={{
                          width: "100%",
                            height: "65px",
                            top: "10px",
                            borderStyle: "none",
                            borderRadius: "6px",
                            border: "0.5px solid #000000",
                            boxSizing : "border-box",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "21px",
                            color: "#585858"
                        }}
                        onChange={(e) => phoneNumberHandler(e)}
                      />
                    </Col>
                  </Row>
                </Input.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 form-input-group">
                {/* password */}
                <label for="password">Password</label>
                <Input.Password
                  placeholder="Password"
                  onChange={(e) => passwordHandler(e)}
                  style={{
                    width: "100%",
                    height: "65px",
                    top: "10px",
                    borderStyle: "none",
                    borderRadius: "6px",
                    border: "0.5px solid #000000",
                    boxSizing : "border-box",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "21px",
                    color: "#585858"
                  }}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>
              <div className="col-md-6 form-input-group">
                {/* re-password */}
                <label for="re-password">Retype Password</label>
                <Input.Password
                  placeholder="Confrim Password"
                  name="password"
                  id="re-password"
                  onChange={(e) => retypePasswordHandler(e)}
                  style={{
                    width: "100%",
                    height: "65px",
                    top: "10px",
                    borderStyle: "none",
                    borderRadius: "6px",
                    border: "0.5px solid #000000",
                    boxSizing : "border-box",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "21px",
                    color: "#585858"
                  }}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 form-input-group">
                {/* school */}
                <label for="school">School</label>
                <Input
                  placeholder="School name"
                  name="school"
                  id="school"
                  onChange={(e) => schoolHandler(e)}
                  style={{
                    width: "100%",
                    height: "65px",
                    top: "10px",
                    borderStyle: "none",
                    borderRadius: "6px",
                    border: "0.5px solid #000000",
                    boxSizing : "border-box",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "21px",
                    color: "#585858"
                  }}
                />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6 form-input-group">
                    {/* class selcet */}
                    <label for="class">Class</label>
                    <Select
                      defaultValue="Class"
                      name="class"
                      id="class"
                      className="form-input-select"
                      onChange={classHandleChange}
                      style={{
                        width: "100%",
                        height: "65px",
                        top: "10px",
                      }}
                    >
                      <Option value="1" >Class 1</Option>
                      <Option value="2">Class 2</Option>
                      <Option value="3">Class 3</Option>
                    </Select>
                  </div>
                  <div className="col-sm-6 form-input-group">
                    {/* gender selcet */}
                    <label for="gender">Gender</label>
                    <Select
                      defaultValue="gender"
                      name="gender"
                      id="gender"
                      className="form-input-select"
                      onChange={genderHandleChange}
                      style={{
                        width: "100%",
                        height: "65px",
                        top: "10px",
                      }}
                    >
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 form-input-group">
                <div className="form-input-checkbox">
                  <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  value="confrimed"
                  style={{
                    width: "40px",
                    height: "40px",
                    top: "10px",
                  }}
                ></input>
                <label for="confirmation">
                  <p>
                    Data yang diinputkan adalah data valid, dan data menyetujui
                    terms and condition
                  </p>
                </label>
                </div>
              </div>
              <div className="col-md-6 form-input-group">
              <button className="btn-register" htmlType="submit" onClick={register}>
                CREATE ACCOUNT
              </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
