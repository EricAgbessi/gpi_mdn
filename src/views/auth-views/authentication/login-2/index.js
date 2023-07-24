import React from "react";
import LoginForm from "../../components/LoginForm";
import { Row, Col } from "antd";
import { useSelector } from "react-redux";

const backgroundURL = "/img/others/img-17.jpg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const LoginTwo = (props) => {
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
                  padding: "30px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1>Connexion</h1>
                  <p>Entrez vos information pour la connexion? </p>
                </div>

                {/* <p>
                  Don't have an account yet?{" "}
                  <a href="/auth/register-2">Sign Up</a>
			</p>*/}
                <div className="mt-4">
                  <LoginForm {...props} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginTwo;
