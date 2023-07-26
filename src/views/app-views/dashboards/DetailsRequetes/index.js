import {
  Button,
  Card,
  Col,
  Divider,
  List,
  Modal,
  Radio,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
import React, { useState } from "react";

export default function Details_Requete() {
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
  return (
    <Col>
      <Card
        title="Requetes"
        style={{ backgroundColor: "#FAFAFB", border: "none" }}
      >
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              backgroundColor: "white",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                padding: "10px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                backgroundColor: "#3b5998",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Requete 234
            </div>
            <ul style={{ listStyleType: "none" }}>
              <li>Nom et Prénoms : John Doe</li>
              <li>Département : Direction des Systèmes d’Informations</li>
              <li>Date de l’envoi de la requete : 13-06-23 à 12h</li>
            </ul>
            ,
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              backgroundColor: "white",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                padding: "10px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                backgroundColor: "#3b5998",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Requete 234
            </div>
            <ul style={{ listStyleType: "none" }}>
              <li>Nom et Prénoms : John Doe</li>
              <li>Département : Direction des Systèmes d’Informations</li>
              <li>Date de l’envoi de la requete : 13-06-23 à 12h</li>
            </ul>
          </div>
          <Row justify="center">
            <Button
              style={{
                backgroundColor: "#3b5998",
                color: "white",
                width: "30%",
              }}
              onClick={showModal}
            >
              Assigner à un technicien
            </Button>
          </Row>
        </Col>
      </Card>

      <Modal
        title="Sélectionner un technicien"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            onChange={handleChange}
          >
            {children}
          </Select>
          ,
        </div>
      </Modal>
    </Col>
  );
}
