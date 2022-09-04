import React from "react";
import Header from "../../../components/header";
import RepoCard from "react-repo-card";
import { Row, Col } from "react-bootstrap";
import "./code.css";

const Code = () => {
  return (
    <div>
      <Header />
      <h2 className="heading-code">My Coding Projects:</h2>
      <div style={{ padding: "20px" }}>
        <Row style={{ marginTop: "10px" }}>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard username="mdarud" repository="facebook-birthday-bot" />
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard username="mdarud" repository="Tugas4Kripto" />
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard username="mdarud" repository="cryptoWeb" />
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard username="mdarud" repository="evote-marnat" />
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard
                username="mdarud"
                repository="IF3260-2-2020-Project01"
              />
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard username="mdarud" repository="mazesolver" />
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard username="mdarud" repository="snake-bot" />
            </div>
          </Col>
          <Col>
            <div style={{ width: "100%", height: "100%" }}>
              <RepoCard username="mdarud" repository="IF3110-ProfilePage" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Code;
