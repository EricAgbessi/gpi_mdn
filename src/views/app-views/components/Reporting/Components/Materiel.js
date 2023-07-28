import React, { useState } from "react";
import { Card, Row, Select } from "antd";
import Chart from "react-apexcharts";
import { COLORS } from "constants/ChartConstant";

export default function Materiel() {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  const [data, setData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      colors: COLORS,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <Card
      title={
        <Row justify="space-between">
          <p>Matériel</p>
          <Select
            showSearch
            style={{ width: 100 }}
            placeholder="Janvier"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="janvier">Janvier</Option>
            <Option value="fevrier">Fevrier</Option>
            <Option value="mars">Mars</Option>
            <Option value="avril">Avril</Option>
            <Option value="Mai">Mai</Option>
            <Option value="Juin">Juin</Option>
            <Option value="juillet">Juillet</Option>
            <Option value="Aout">Aout</Option>
            <Option value="Septembre">Septembre</Option>
            <Option value="Octobre">Octobre</Option>
            <Option value="Novembre">Novembre</Option>
            <Option value="Decmbre">Decmbre</Option>
          </Select>
        </Row>
      }
    >
      <Row>
        <Chart
          options={data.options}
          series={data.series}
          height={300}
          type="donut"
        />
        <p>
          <a href="#">Imprimer liste des matériels</a>
        </p>
      </Row>
    </Card>
  );
}
