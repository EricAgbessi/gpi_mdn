import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Avatar,
  Dropdown,
  Table,
  Menu,
  Tag,
} from "antd";
import StatisticWidget from "components/shared-components/StatisticWidget";
import ChartWidget from "components/shared-components/ChartWidget";
import AvatarStatus from "components/shared-components/AvatarStatus";
import GoalWidget from "components/shared-components/GoalWidget";
import { Divider } from "antd";
import ApexChart from "react-apexcharts";
import { apexLineChartDefaultOption, COLOR_2 } from "constants/ChartConstant";
import {
  UserAddOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  StopOutlined,
  StarOutlined,
  QuestionCircleOutlined,
  PoweroffOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import utils from "utils";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MembersChart = (props) => <ApexChart {...props} />;

const headTitle = (color) => {
  <Row style={color}>
    <StarOutlined />
    <p>kmsdkmsfpm</p>
  </Row>;
};
const columns = [
  {
    title: "Requetes",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Heure",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Technicien",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool"],
  },
];
export const DefaultDashboard = () => {
  return (
    <Row span={24}>
      <Col span={24}>
        <Row justify="space-between" style={{ width: "100%", flexGrow: 1 }}>
          <Col span={7}>
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
          <Col span={7}>
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
          <Col span={7} justify="center" align="center">
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
        <Row span={24}>
          <Card style={{ width: "100%" }}>
            <Table
              columns={columns}
              dataSource={data}
              title={() => {
                return (
                  <Row justify="space-between">
                    <p style={{ fontWeight: "bold", color: "black" }}>
                      Mes dernières requetes
                    </p>
                    <Button
                      style={{ backgroundColor: "#3b5998" }}
                      type="primary"
                      icon={<QuestionCircleOutlined />}
                    >
                      <a href="askquestion" style={{ color: "white" }}>
                        {" "}
                        Poser un problème
                      </a>
                    </Button>
                  </Row>
                );
              }}
            />
          </Card>
        </Row>
      </Col>
    </Row>
  );
};

export default withRouter(DefaultDashboard);
