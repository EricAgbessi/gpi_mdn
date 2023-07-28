import { Card, Col, Row } from "antd";
import { StarOutlined } from "@ant-design/icons";
import React from "react";
import Materiel from "./Components/Materiel";

export default function Reporting() {
  return (
    <Col>
      <Row
        justify="space-around"
        align="middle"
        style={{ width: "100%", height: "250px", backgroundColor: "#3B5998" }}
      >
        <Col span={6}>
          <Card
            title={
              <Row justify="center" align="center" color="#8674fc">
                <StarOutlined style={{ color: "#8674fc" }} />
              </Row>
            }
            bordered={false}
          >
            <Col justify="center" align="center">
              <h1 style={{ color: "#8674fc" }}>100</h1>
              <p>Requetes Total</p>
            </Col>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title={
              <Row justify="center" align="center">
                <StarOutlined style={{ color: "#5898fa" }} />
              </Row>
            }
            bordered={false}
          >
            <Col justify="center" align="center" color="5898fa">
              <h1 style={{ color: "#5898fa" }}>100</h1>
              <p>Requetes résolues</p>
            </Col>
          </Card>
        </Col>
        <Col span={6} justify="center" align="center">
          <Card
            title={
              <Row justify="center" align="center">
                <StarOutlined style={{ color: "#de7dff" }} />
              </Row>
            }
            bordered={false}
          >
            <Col justify="center" align="center">
              <h1 style={{ color: "#de7dff" }}>100</h1>
              <p>Requetes en cours</p>
            </Col>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Materiel />
        </Col>
      </Row>
    </Col>
  );
}
