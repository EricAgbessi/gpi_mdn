import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

const backgroundURL = "/img/others/img-17.jpg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const RegisterTwo = (props) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`h-100 ${theme === "light" ? "bg-white" : ""}`}>
      <Row justify="center" className="align-items-stretch h-100">
        <Col xs={0} sm={0} md={0} lg={8}>
          <div className="d-flex flex-column justify-content-between h-100 px-4">
            <div className="text-right">
              {/* <img src="/img/images.jpeg" alt="logo" />*/}
            </div>
            <Row justify="center">
              <Col xs={0} sm={0} md={0} lg={20}>
                <img className="img-fluid mb-5" src="/img/images.jpeg" alt="" />
              </Col>
            </Row>
            <div className="d-flex justify-content-end pb-4">
              <div>
                <a
                  className="text-white"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  Term & Conditions
                </a>
                <span className="mx-2 text-white"> | </span>
                <a
                  className="text-white"
                  href="/#"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy & Policy
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={24}
          lg={16}
          style={{ backgroundColor: "#3b5897" }}
        >
          <div className="container d-flex flex-column justify-content-center h-100">
            <Row justify="center">
              <Col
                xs={24}
                sm={24}
                md={20}
                lg={12}
                xl={8}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "5px",
                    padding: "0px",
                  }}
                >
                  <h1 style={{ color: "#3b5897" }}>Inscription</h1>
                  <p>Entrez vos informations pour créer un compte</p>
                </div>

                <div style={{ marginTop: "5px" }}>
                  <RegisterForm {...props} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterTwo;
