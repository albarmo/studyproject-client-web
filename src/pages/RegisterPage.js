import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// form component input
import { Select } from "antd";
import { Form, Input, Typography, Button, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import logo from "../images/logo.png";
// antd uploader
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
// css
import "./register.css";
import "antd/dist/antd.css";

const RegisterPage = () => {
  const { Title } = Typography;
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "avatar.png",
      status: "done",
      url: "https://vimakdentalcentre.co.ke/assets/fe/images/avatar.png",
    },
  ]);

  // select
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  //image uploader
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  console.log(fileList.length, fileList, "<<< file list");

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
                    <ImgCrop>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                      >
                        {fileList.length < 1 && "+ Upload"}
                      </Upload>
                    </ImgCrop>
                  </div>

                  {/* firtst name */}
                  <Input
                    placeholder="First Name"
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
                  style={{
                    width: "90%",
                    height: "50px",
                    left: "5px",
                    border: "",
                  }}
                />

                {/* email */}
                <Input
                  placeholder="Email"
                  style={{
                    width: "90%",
                    height: "50px",
                    left: "5px",
                    border: "",
                  }}
                />

                {/* gender selcet */}
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
                      <Input defaultValue="" placeholder="123-123-123" />
                    </Col>
                  </Row>
                </Input.Group>
              </div>

              <div className="register-form-right">
                {/* password */}
                <Input.Password
                  placeholder="Password"
                  style={{
                    top: "8px",
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
                  style={{
                    top: "26px",
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
                  style={{
                    width: "90%",
                    top: "15px",
                    left: "5px",
                  }}
                  onChange={handleChange}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>

                {/* class selcet */}
                <Select
                  defaultValue="Class"
                  style={{
                    width: "90%",
                    top: "15px",
                    left: "5px",
                  }}
                  onChange={handleChange}
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
              <h4 className="btn-register" htmlType="submit">
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
