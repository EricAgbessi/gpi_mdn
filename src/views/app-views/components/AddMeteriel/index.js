import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
} from "antd";

import { Upload, message } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { AiFillCheckCircle } from "react-icons/ai";

export default function AddMeteriel() {
  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const label = (name) => {
    return <p style={{ color: "white" }}> {name}</p>;
  };
  const InputStyle = {
    backgroundColor: "#f5f7fb",
  };
  const { Dragger } = Upload;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  function success() {
    handleCancel();
    Modal.success({
      icon: "",
      footer: null,
      title: (
        <Row style={{ justifyContent: "center" }}>
          <AiFillCheckCircle style={{ fontSize: "50px", color: "#18B28D" }} />
        </Row>
      ),
      content: (
        <Col>
          <Divider />
          <p>La fonction a été ajouté avec succès.</p>
          <button
            type="primary"
            style={{
              backgroundColor: "#18B28D",
              width: "100%",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Continuer
          </button>
        </Col>
      ),
    });
  }

  return (
    <Card
      title={
        <Row justify="space-between">
          <h4 style={{ color: "#3B5998" }}>Ajouter un matériel</h4>
          <p style={{ fontSize: "12px" }}>29 Juillet 2023</p>
        </Row>
      }
    >
      <Col>
        <Form
          {...layout}
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Card style={{ backgroundColor: "#3B5998" }}>
            <Row style={{ color: "white" }}>
              <Col span={7}>
                <Form.Item
                  label={label("Libellé")}
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  style={{ color: "white" }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={7}>
                <Form.Item
                  name="gender"
                  label={label(" Structure ")}
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Structure"
                    allowClear
                    style={{ width: "100%" }}
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={7}>
                <Form.Item
                  name="gender"
                  label={label("Etat")}
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Etat " allowClear>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row></Row>
          </Card>
          <Row>
            <Col span={12}>
              <Col>
                <Form.Item
                  label="Référence"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  style={{ color: "white" }}
                >
                  <Input style={InputStyle} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Marque "
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input style={InputStyle} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Numéro"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  style={{ color: "white" }}
                >
                  <Input style={InputStyle} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Catégorie "
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  style={{ color: "white" }}
                >
                  <Input style={InputStyle} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Fournisseur"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                  style={{ color: "white" }}
                >
                  <Input style={InputStyle} />
                </Form.Item>
              </Col>
            </Col>
            <Col span={12}>
              <Dragger {...props}>
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  <UploadOutlined /> Ajouter une photo
                </p>
                <p className="ant-upload-text"></p>
                <p className="ant-upload-hint"></p>
              </Dragger>
            </Col>
            <Row style={{ justifyContent: "flex-end" }}>
              <Form.Item {...tailLayout}>
                <Button type="default" htmlType="submit">
                  Annuler
                </Button>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button
                  htmlType="submit"
                  style={{ backgroundColor: "#3b5897", color: "white" }}
                  onClick={success}
                >
                  Enregistrer
                </Button>
              </Form.Item>
            </Row>
          </Row>
        </Form>
      </Col>
    </Card>
  );
}
