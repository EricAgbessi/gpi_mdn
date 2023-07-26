import { Card, Form, Row, Input, Button, Checkbox, Col } from "antd";
import React from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function index() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row span={24}>
      <Card
        style={{ width: "100%", height: "100%", padding: "40px" }}
        title={<h3 style={{ color: "#3b5998" }}>Poser un problème</h3>}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row wrap="wrap" justify="space-between">
            <Col span={10}>
              {" "}
              <Form.Item
                label="Choisir le matériel concerné"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input style={{ backgroundColor: "#f5f7fb" }} />
              </Form.Item>
            </Col>
            <Col span={10}>
              {" "}
              <Form.Item
                label="Quel est votre problème * "
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input style={{ backgroundColor: "#f5f7fb" }} />
              </Form.Item>
            </Col>

            <Col span={10}>
              {" "}
              <Form.Item
                name={["user", "introduction"]}
                label="Décrivez-nous clairement votre problème * "
              >
                <Input.TextArea
                  rows={4}
                  style={{ backgroundColor: "#f5f7fb" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center" align="center">
            <Form.Item>
              <Button danger style={{ width: "150px", marginRight: "50px" }}>
                Annuler
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#3b5998", width: "150px" }}
              >
                Envoyer
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Card>
    </Row>
  );
}
