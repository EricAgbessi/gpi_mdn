import React, { useState } from "react";
import { Card, Row, Col, Form, Input, Button, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const backgroundStyle = {
  backgroundImage: "url(/img/others/img-17.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const ResetPassword = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onSend = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("New password has send to your email!");
    }, 1500);
  };
  const theme = useSelector((state) => state.theme.currentTheme);

  const rules = {
    email: [
      {
        required: true,
        message: "Please input your email address",
      },
      {
        type: "email",
        message: "Please enter a validate email!",
      },
    ],
    password: [
      {
        required: true,
        message: "Please input your password",
      },
    ],
    confirm: [
      {
        required: true,
        message: "Please confirm your password!",
      },
      ({ getFieldValue }) => ({
        validator(rule, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject("Passwords do not match!");
        },
      }),
    ],
  };

  return (
    <div className={`h-100 ${theme === "light" ? "bg-white" : ""}`}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={0} sm={0} md={0} lg={8}>
          <div className="d-flex flex-column justify-content-between h-100 px-4">
            <div className="text-right">
              {/* <img src="/img/images.jpeg" alt="logo" />*/}
            </div>
            <Row justify="center">
              <Col xs={0} sm={0} md={0} lg={20}>
                <img className="img-fluid mb-5" src="/img/images.jpeg" alt="" />
              </Col>
            </Row>
            <div className="d-flex justify-content-end pb-4">
              <div>
                <a
                  className="text-white"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  Term & Conditions
                </a>
                <span className="mx-2 text-white"> | </span>
                <a
                  className="text-white"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy & Policy
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={16}
          style={{ backgroundColor: "#3b5897" }}
        >
          <div className="h-100">
            <div className="container d-flex flex-column justify-content-center h-100">
              <Row justify="center">
                <Col xs={20} sm={20} md={20} lg={14}>
                  <Card style={{ border: "1px solid black", width: "100%" }}>
                    <div className="my-2">
                      <div className="text-center">
                        <h2
                          className="mt-3 font-weight-bold"
                          style={{ color: "#3b5897" }}
                        >
                          Réinitialisation{" "}
                        </h2>
                        <p className="mb-4">Entrez votre adresse email </p>
                      </div>
                      <Row justify="center">
                        <Col xs={24} sm={24} md={20} lg={20}>
                          <Form
                            form={form}
                            layout="vertical"
                            name="forget-password"
                            onFinish={onSend}
                          >
                            <Form.Item
                              name="password"
                              label="Mot de passe"
                              rules={rules.password}
                              hasFeedback
                            >
                              <Input.Password
                                prefix={
                                  <LockOutlined className="text-primary" />
                                }
                              />
                            </Form.Item>
                            <Form.Item
                              name="confirm"
                              label="Confirmer mot de passe"
                              rules={rules.confirm}
                              hasFeedback
                            >
                              <Input.Password
                                prefix={
                                  <LockOutlined className="text-primary" />
                                }
                              />
                            </Form.Item>
                            <Form.Item>
                              <Button
                                loading={loading}
                                type="primary"
                                htmlType="submit"
                                block
                              >
                                {loading ? "Envoyer ..." : "Envoyer"}
                              </Button>
                            </Form.Item>
                          </Form>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPassword;
