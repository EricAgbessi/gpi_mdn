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
  Table,
  Tag,
} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { BiSolidEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Categorie() {
  const columns = [
    {
      title: "Libellé",
      dataIndex: "libelle",
      key: "libelle",
    },

    {
      title: "Action",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <div>
          <BiSolidEdit
            onClick={showModal}
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
      libelle: "Imprimante",
    },
    {
      key: "2",
      libelle: "Imprimante",
    },
    {
      key: "3",
      libelle: "Imprimante",
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
    <Row span={24} style={{ width: "100%" }}>
      <Table
        style={{ width: "100%" }}
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        title={() => {
          return (
            <Row justify="space-between">
              <p style={{ fontWeight: "bold", color: "black" }}>Categorie</p>
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
                Ajouter une Categorie
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
          title="Ajouter une Categorie"
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
              label="Libellé"
              rules={[{ required: true }]}
            >
              <Select placeholder="Libellé" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
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
                  onClick={success}
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
