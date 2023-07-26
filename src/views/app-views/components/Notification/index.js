import { Card } from "antd";
import React from "react";

export default function Notification() {
  return (
    <div>
      <Card title="Mes notifications">
        <Card
          title="Traitement de votre requete"
          style={{ backgroundColor: "#FAFAFA", border: "none" }}
        >
          Votre requete a été bien recue et a été assignée au technicien John
          Doe
        </Card>
        <Card
          title="Traitement de votre requete"
          style={{ backgroundColor: "#FAFAFA", border: "none" }}
        >
          Votre requete a été bien recue et a été assignée au technicien John
          Doe
        </Card>
      </Card>
    </div>
  );
}
