import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Avatar,
  Button,
  Form,
  Radio,
  Input,
  Select,
} from "antd";
import { Icon } from "components/util-components/Icon";
import {
  employementList,
  interestedList,
  connectionList,
  groupList,
} from "./profileData";
import {
  GlobalOutlined,
  MailOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import Flex from "components/shared-components/Flex";

const ProfileInfo = (props) => (
  <Card
    style={{
      backgroundColor: "transparent",
      paddingTop: "0px",
      border: "none",
    }}
  >
    <Row justify="center" style={{ margin: "0px" }}>
      <Col sm={24} md={23}>
        <div className="d-md-flex">
          <div>
            <Avatar size={props.avatarSize} src="/img/avatars/thumb-15.jpg" />
          </div>
          <div
            className="ml-md-4 w-100"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Flex mobileFlex={false} className="mb-3 text-md-left text-center">
              <h2>Jane Doew</h2>
              {/*<div className="ml-md-3 mt-3 mt-md-0">
                <Button size="small" type="primary">
                  Follow
                </Button>
                <Button size="small" className="ml-2">
                  Message
                </Button>
        </div>*/}
            </Flex>
            {/*<Row gutter="16">
              <Col sm={24} md={8}>
                <p className="mt-0 mr-3 text-muted text-md-left text-center">
                  It is a long established fact that a reader will be
                  distracted.
                </p>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <Row className="mb-2">
                  <Col xs={12} sm={12} md={9}>
                    <Icon
                      type={MailOutlined}
                      className="text-primary font-size-md"
                    />
                    <span className="text-muted ml-2">Email:</span>
                  </Col>
                  <Col xs={12} sm={12} md={15}>
                    <span className="font-weight-semibold">
                      ellarbae@coolmail.io
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={9}>
                    <Icon
                      type={PhoneOutlined}
                      className="text-primary font-size-md"
                    />
                    <span className="text-muted ml-2">Phone:</span>
                  </Col>
                  <Col xs={12} sm={12} md={15}>
                    <span className="font-weight-semibold">+12 123 1234</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <Row className="mb-2 mt-2 mt-md-0 ">
                  <Col xs={12} sm={12} md={9}>
                    <Icon
                      type={HomeOutlined}
                      className="text-primary font-size-md"
                    />
                    <span className="text-muted ml-2">Address:</span>
                  </Col>
                  <Col xs={12} sm={12} md={15}>
                    <span className="font-weight-semibold">
                      Los Angeles, CA
                    </span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={12} sm={12} md={9}>
                    <Icon
                      type={GlobalOutlined}
                      className="text-primary font-size-md"
                    />
                    <span className="text-muted ml-2">Website:</span>
                  </Col>
                  <Col xs={12} sm={12} md={15}>
                    <span className="font-weight-semibold">ellarbae.io</span>
                  </Col>
                </Row>
              </Col>
            </Row>*/}
          </div>
        </div>
      </Col>
    </Row>
  </Card>
);

export const Profile = () => {
  const avatarSize = 150;
  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
  };
  const tailLayout = {
    wrapperCol: { offset: 12, span: 24 },
  };

  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`,
    });
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  return (
    <>
      <PageHeaderAlt background="/img/proj.jpg" cssClass="bg-primary" overlap>
        <div className="container text-center">
          <div className="py-5 my-md-5"></div>
        </div>
      </PageHeaderAlt>
      <div className="container">
        <ProfileInfo avatarSize={avatarSize} />
        <Row style={{ width: "100%" }}>
          <Form
            {...layout}
            layout="vertical"
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ width: "100%" }}
          >
            <Card title="Mes informations" style={{ width: "100%" }}>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Form.Item label="Nom et prenoms" style={{ width: "100%" }}>
                  <Input />
                </Form.Item>

                <Form.Item label="Adresse email" style={{ width: "100%" }}>
                  <Input />
                </Form.Item>
                <Form.Item label="Téléphone" style={{ width: "100%" }}>
                  <Input />
                </Form.Item>
                <Form.Item label="Poste " style={{ width: "100%" }}>
                  <Input />
                </Form.Item>

                <Form.Item label="Direction" style={{ width: "100%" }}>
                  <Input />
                </Form.Item>
              </Col>
            </Card>

            <Card title="Modifier mon mot de passe" style={{ width: "100%" }}>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Form.Item
                  label="Ancien mot de passe"
                  style={{ width: "100%" }}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Nouveau mot de passe"
                  style={{ width: "100%" }}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Confirmer mot de passe"
                  style={{ width: "100%" }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Card>
            <Form.Item style={{ width: "100%" }}>
              <Button
                style={{
                  width: "100%",
                  background: "#3b5897",
                  border: "none",
                  color: "white",
                }}
              >
                Enregistrer
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </div>
    </>
  );
};

export default Profile;
