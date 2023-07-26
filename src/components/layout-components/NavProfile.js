import React from "react";
import { Menu, Dropdown, Avatar, Row, Col } from "antd";
import { connect } from "react-redux";
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Icon from "components/util-components/Icon";
import { signOut } from "redux/actions/Auth";

const menuItem = [
  {
    title: "Edit Profile",
    icon: EditOutlined,
    path: "/",
  },

  {
    title: "Account Setting",
    icon: SettingOutlined,
    path: "/",
  },
];

export const NavProfile = ({ signOut }) => {
  const profileImg = "/img/avatars/thumb-1.jpg";
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <Avatar size={45} src={profileImg} />
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Menu.Item style={{ margin: "0px", padding: "0px" }}>
              <a href="/profil">
                <span className="font-weight-normal">Jaen Doew</span>
              </a>
            </Menu.Item>

            <Menu.Item style={{ margin: "0px", padding: "0px" }}>
              <a href="profil">
                <span className="font-weight-normal">Voir mon profil</span>
              </a>
            </Menu.Item>

            <Menu.Item
              key={menuItem.length + 1}
              onClick={(e) => signOut()}
              style={{ margin: "0px", padding: "0px" }}
            >
              <span
                style={{
                  backgroundColor: "#f26e6e",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <LogoutOutlined className="mr-3" />
                <span className="font-weight-normal"> Me deconnecter</span>
              </span>
            </Menu.Item>
          </Col>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={profileImg} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default connect(null, { signOut })(NavProfile);
