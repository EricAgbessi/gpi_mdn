import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Menu,
  Modal,
  Row,
  Select,
  Table,
  Tag,
} from "antd";
import {
  PlusCircleOutlined,
  EyeOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { BiSolidEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import Flex from "../layout/grid/Flex";
import ProductListData from "assets/data/product-list.data.json";

import utils from "utils";
import AvatarStatus from "components/shared-components/AvatarStatus";
import NumberFormat from "react-number-format";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Materiel() {
  let history = useHistory();
  const [list, setList] = useState(ProductListData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

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

  const getStockStatus = (stockCount) => {
    if (stockCount >= 10) {
      return (
        <>
          <Badge status="success" />
          <span>In Stock</span>
        </>
      );
    }
    if (stockCount < 10 && stockCount > 0) {
      return (
        <>
          <Badge status="warning" />
          <span>Limited Stock</span>
        </>
      );
    }
    if (stockCount === 0) {
      return (
        <>
          <Badge status="error" />
          <span>Out of Stock</span>
        </>
      );
    }
    return null;
  };

  const dropdownMenu = (row) => (
    <Menu>
      <Menu.Item onClick={() => viewDetails(row)}>
        <Flex alignItems="center">
          <EyeOutlined />
          <span className="ml-2">View Details</span>
        </Flex>
      </Menu.Item>
      <Menu.Item onClick={() => deleteRow(row)}>
        <Flex alignItems="center">
          <DeleteOutlined />
          <span className="ml-2">
            {selectedRows.length > 0
              ? `Delete (${selectedRows.length})`
              : "Delete"}
          </span>
        </Flex>
      </Menu.Item>
    </Menu>
  );

  const addMateriel = () => {
    history.push(`/app/admin/addmateriel`);
  };

  const viewDetails = (row) => {
    history.push(`/app/apps/ecommerce/edit-product/${row.id}`);
  };

  const deleteRow = (row) => {
    const objKey = "id";
    let data = list;
    if (selectedRows.length > 1) {
      selectedRows.forEach((elm) => {
        data = utils.deleteArrayRow(data, objKey, elm.id);
        setList(data);
        setSelectedRows([]);
      });
    } else {
      data = utils.deleteArrayRow(data, objKey, row.id);
      setList(data);
    }
  };

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus size={60} type="square" src={record.image} />
        </div>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "Libellé",
      dataIndex: "libelle",
      sorter: (a, b) => utils.antdTableSorter(a, b, "category"),
    },
    {
      title: "Référence",
      dataIndex: "reference",
      render: (_, record) => (
        <div>
          <p>{record.reference}</p>
        </div>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "price"),
    },
    {
      title: "Marque",
      dataIndex: "marque",
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
    },
    {
      title: "Numéro",
      dataIndex: "numero",
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
    },
    {
      title: "Fournisseur",
      dataIndex: "fournisseur",
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
    },
    {
      title: "Catégorie",
      dataIndex: "category",
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
    },

    {
      title: "Direction",
      dataIndex: "direction",
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
    },
    {
      title: "Status",
      dataIndex: "stock",
      render: (stock) => <Tag color="cyan">En etat</Tag>,
      sorter: (a, b) => utils.antdTableSorter(a, b, "stock"),
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

  const rowSelection = {
    onChange: (key, rows) => {
      setSelectedRows(rows);
      setSelectedRowKeys(key);
    },
  };

  const onSearch = (e) => {
    const value = e.currentTarget.value;
    const searchArray = e.currentTarget.value ? list : ProductListData;
    const data = utils.wildCardSearch(searchArray, value);
    setList(data);
    setSelectedRowKeys([]);
  };

  const handleShowCategory = (value) => {
    if (value !== "All") {
      const key = "category";
      const data = utils.filterArray(ProductListData, key, value);
      setList(data);
    } else {
      setList(ProductListData);
    }
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
        columns={tableColumns}
        dataSource={list}
        rowKey="id"
        rowSelection={{
          selectedRowKeys: selectedRowKeys,
          type: "checkbox",
          preserveSelectedRowKeys: false,
          ...rowSelection,
        }}
        title={() => {
          return (
            <Row justify="space-between">
              <p style={{ fontWeight: "bold", color: "black" }}>Materiel</p>
              <Row style={{ width: "50%", justifyContent: "flex-end" }}>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "20px",
                  }}
                >
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#3b5897",
                      border: "none",
                      marginRight: "20px",
                    }}
                    type="primary"
                    icon={<UploadOutlined />}
                    block
                  >
                    Exporter une liste
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#3b5897",
                      border: "none",
                    }}
                    icon={<PlusCircleOutlined />}
                    type="primary"
                    onClick={addMateriel}
                  >
                    Ajouter une Fonction
                  </Button>
                </Col>
              </Row>
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
              label="Code de la fonction"
              rules={[{ required: true }]}
            >
              <Select placeholder="Code de la fonction" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
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
              label="Type"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Structure"
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
