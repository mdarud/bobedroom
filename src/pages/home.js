import React from "react";
import Header from "../components/header";
import Highlights from "../components/highlights";
import TypeAnimation from "react-type-animation";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./home.css";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="scroll-container">
      <section>
        <div className="starter">
          {/* <embed src="/blob.svg" className="blob" alt="pic" /> */}
          <embed src="/logo-white.svg" className="logo" alt="pic" />
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#2d3436",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 20,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "destroy",
                  },
                  random: true,
                  speed: 2,
                  straight: false,
                  trail: {
                    enable: true,
                    fillColor: "#000000",
                    length: 5,
                  },
                },
                number: {
                  value: 0,
                  limit: 220,
                },
                opacity: {
                  value: 0.8,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 5, max: 25 },
                },
              },
              detectRetina: true,
              emitters: {
                direction: "none",
                rate: {
                  delay: 0.5,
                  quantity: 15,
                },
                position: {
                  x: 50,
                  y: 50,
                },
                size: {
                  width: 10,
                  height: 5,
                },
              },
            }}
          />
        </div>
        <div className="social-media">
          <a
            href="https://github.com/mdarud"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <img src="/github.png" alt="pic" width={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-daru-darmakusuma/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <img src="/linkedin.png" alt="pic" width={32} />
          </a>
          <a
            href="https://www.instagram.com/drmksm/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <img src="/instagram.svg" alt="pic" width={35} />
          </a>
          <a
            href="https://soundcloud.com/darmakusuma"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <img src="/soundcloud.png" alt="pic" width={32} />
          </a>
          <a
            href="https://open.spotify.com/user/217hkxsfr3gafn62eqj65p4gi?si=7fTNLgL6TmiLDsCvokhjqw&nd=1"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/spotify.png" alt="pic" width={32} />
          </a>
        </div>
        <a href="#main" className="scroll-down-label">
          <div className="instruction">
            Scroll Down!
            <p class="scrollto--arrow">
              <img src="/scroll-down.png" alt="scroll down arrow" />
            </p>
          </div>
        </a>
      </section>

      <section id="main" className="main">
        <div className="section-break"> scroll up! scroll up!</div>
        <div className="main-wrapper">
          <Header />
          <Highlights />
          <div className="intro">Hello! I'm...</div>
          <TypeAnimation
            sequence={[
              "Muhammad Daru Darmakusuma", // Types 'One'
              3000, // Waits 1s
              "Daru", // Deletes 'One' and types 'Two'
              3000, // Waits 2s
              "Bobby", // Types 'Three' without deleting 'Two'
              3000, // Waits 2s
              "Bo",
              2000, // Types 'Three' without deleting 'Two'
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
            className="intro-name"
          />
          <div className="about-me">
            <div className="about-me-label">
              <div className="me-label">ABOUT ME</div>
            </div>
            <div className="about-me-text">
              I'm a final year Computer Science student at Institut Teknologi
              Bandung. I was born on October, 29th 2002. I'm born and raised in
              Bandung. Welcome to my website!! I like to produce music, graphic
              design, and draw. And in my spare time, I like to watch movies and
              listen to music. I find many outdoor activities is relieving :D{" "}
              <span style={{ color: "black" }}>&nbsp; More in my Bio ???</span>
              <div className="porto">
                <div className="projects">
                  Projects
                  <Row className="projects-type">
                    <Col>
                      <a href="/code">
                        <img
                          src="/code.svg"
                          className="icon-projects"
                          alt="pic"
                        />{" "}
                        <div className="project-label">Code</div>
                      </a>
                    </Col>
                    <Col>
                      <a href="/design">
                        <img
                          src="/design.svg"
                          className="icon-projects"
                          alt="pic"
                        />{" "}
                        <div className="project-label">Design</div>
                      </a>
                    </Col>
                    <Col>
                      <a href="/music">
                        <img
                          src="/music.svg"
                          className="icon-projects"
                          alt="pic"
                        />
                        <div className="project-label">Music</div>
                      </a>
                    </Col>
                  </Row>
                </div>
                <div className="blogs">
                  Blogs
                  <Row className="projects-type">
                    <Col>
                      {" "}
                      <img
                        src="/blog.svg"
                        className="icon-projects"
                        alt="pic"
                        style={{ marginTop: "-5px", marginBottom: "2px" }}
                      />{" "}
                      <div className="project-label">Posts</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-break-footer"></div>
      </section>
    </div>
  );
};

export default Home;
