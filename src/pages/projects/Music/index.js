import React from "react";
import Header from "../../../components/header";
import ReactPlayer from "react-player";
import { Row, Col, Container } from "react-bootstrap";

const Music = () => {
  return (
    <div>
      <Header />
      <h2 className="heading-code">My Music Projects:</h2>
      <Container>
        <Row>Soundcloud</Row>
        <Row xs={1} md={2} lg={4}>
          <Col md={6} lg={6}>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="state"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1271531035&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: "100",
              }}
            >
              <a
                href="https://soundcloud.com/darmakusuma"
                title="daru"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                daru
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/darmakusuma/state"
                title="State"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                State
              </a>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="cheater"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/994238299&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: "100",
              }}
            >
              <a
                href="https://soundcloud.com/darmakusuma"
                title="daru"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                daru
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/darmakusuma/cheater-diorama"
                title="State"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                cheater diorama
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          Song that aspire me at making music:
          <ReactPlayer
            url="https://soundcloud.com/darmakusuma/sets/songs-i-like"
            width="100%"
          />
        </Row>
      </Container>
      <Container>
        <Row>Spotify</Row>
        <Row xs={3} md={4} lg={4}>
          <Col md={3}>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1Kkr1DQwavs9lq4v0T6pLK?utm_source=generator"
              width="100%"
              height={380}
              frameBorder={0}
              allowfullscreen={true}
              allow="encrypted-media"
              title="sur3r"
            ></iframe>
          </Col>
          <Col md={3}>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1m63agN7loA1EyAtV4GMow?utm_source=generator"
              width="100%"
              height={380}
              frameBorder={0}
              allowfullscreen={true}
              allow="encrypted-media"
              title="apple"
            ></iframe>
          </Col>
          <Col md={3}>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/5gDt1VSfAJYuY7gEZvJHXq?utm_source=generator"
              width="100%"
              height={380}
              frameBorder={0}
              allowfullscreen={true}
              allow="encrypted-media"
              title="playground"
            ></iframe>
          </Col>
          <Col md={3}>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/07zteWVbqjGDMgnXnCRoHW?utm_source=generator"
              width="100%"
              height={380}
              frameBorder={0}
              allowfullscreen={true}
              allow="encrypted-media"
              title="tiny"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Music;
