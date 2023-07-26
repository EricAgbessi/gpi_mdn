import { Button, Row, Table, Tag } from "antd";
import React from "react";

export default function Requetes() {
  const columns = [
    {
      title: "Matériel",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "N. Réference",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Origine",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Utilisateur",
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

    {
      title: "Action",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <a href="./requestdetails">
          <Button>View</Button>
        </a>
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

  return (
    <Row span={24} style={{ width: "100%" }}>
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={data}
        title={() => {
          return (
            <Row justify="space-between">
              <p style={{ fontWeight: "bold", color: "black" }}>Requetes</p>
            </Row>
          );
        }}
      />
    </Row>
  );
}
