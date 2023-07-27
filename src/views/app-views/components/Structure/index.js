import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Table,
  Tag,
} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { BiSolidEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function Structures() {
  const columns = [
    {
      title: "Nom de la structure",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Code",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Désignation",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Réfferant",
      dataIndex: "tags",
      key: "tags",
    },

    {
      title: "Action",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <div>
          <BiSolidEdit
            style={{ cursor: "pointer", marginRight: "20px", color: "3B5998" }}
          />
          <BsTrash style={{ cursor: "pointer", color: "red" }} />
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Direction des Systèmes Informatique",
      age: "DSI",
      address: "DSI",
      tags: "John Doe",
    },

    {
      key: "1",
      name: "Direction des Systèmes Informatique",
      age: "DSI",
      address: "DSI",
      tags: "John Doe",
    },

    {
      key: "1",
      name: "Direction des Systèmes Informatique",
      age: "DSI",
      address: "DSI",
      tags: "John Doe",
    },
  ];

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

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

  const { Option } = Select;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Check here to configure the default column

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideDefaultSelections: true,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      },
    ],
  };
  return (
    <Row span={24} style={{ width: "100%" }}>
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        title={() => {
          return (
            <Row justify="space-between">
              <p style={{ fontWeight: "bold", color: "black" }}>Structures</p>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#3b5897",
                  border: "none",
                }}
                icon={<PlusCircleOutlined />}
                type="primary"
                onClick={showModal}
              >
                Ajouter une structure
              </Button>
            </Row>
          );
        }}
      />

      <Modal
        mask={true}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Card
          title="Ajouter une structure"
          style={{ width: "100%", border: "none" }}
        >
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="gender"
              label="Nom de la structure"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Code"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Désignation"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Chef actuel"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

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
                >
                  Enregistrer
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </Modal>
    </Row>
  );
}
