import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header/header";
import Highlights from "../components/highlights/highlights";
import TypeAnimation from "react-type-animation";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./home.css";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <section >
        <div className="starter">
          <img src='/logo-white.svg' className={`${show ? 'logo' : 'logo mini'}`} />
          <Particles
            id="tsparticles"
            className={`${!show && 'invisible'}`}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#2d3436",
                },
              },
              fpsLimit: 60,
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
                links: {
                  color: "#2d3436",
                  distance: 200,
                  enable: false,
                  opacity: 0.9,
                  width: 3,
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
                  speed: 3,
                  straight: false,
                  trail: {
                    enable: true,
                    fillColor: "#000000",
                    length: 5
                  }
                },
                number: {
                  value: 0,
                  limit: 250,
                },
                opacity: {
                  value: 0.8,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 5, max: 20 },
                },
              },
              detectRetina: true,
              emitters: {
                direction: "none",
                rate: {
                  delay: 0.5,
                  quantity: 10
                },
                position: {
                  x: 50,
                  y: 50
                },
                size: {
                  width: 5,
                  height: 5
                },
              }
            }
            }
          />
        </div>
        <div className="social-media">
          <a href="https://github.com/mdarud" target="_blank" className="icon"><img src="/github.png" width={32} /></a>
          <a href="https://www.linkedin.com/in/muhammad-daru-darmakusuma/" target="_blank" className="icon"><img src="/linkedin.png" width={32} /></a>
          <a href="https://www.instagram.com/drmksm/" target="_blank" className="icon"><img src="/instagram.svg" width={35} /></a>
          <a href="https://soundcloud.com/darmakusuma" target="_blank" className="icon"><img src="/soundcloud.png" width={32} /></a>
          <a href="https://open.spotify.com/user/217hkxsfr3gafn62eqj65p4gi?si=7fTNLgL6TmiLDsCvokhjqw&nd=1" target="_blank"><img src="/spotify.png" width={32} /></a>
        </div>
        <div className="instruction">Scroll Down!<p class="scrollto--arrow"><img src="/scroll-down.png" alt="scroll down arrow" /></p></div>
      </section >

      <section className="main" id="main">
        <Header />
        <Highlights />
        <div className="intro">Hello! I'm...</div>
        <TypeAnimation
          sequence={[
            'Muhammad Daru Darmakusuma', // Types 'One'
            3000, // Waits 1s
            'Daru', // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            'Bobby', // Types 'Three' without deleting 'Two'
            3000, // Waits 2s
            'Bo',
            2000, // Types 'Three' without deleting 'Two'
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
          className="intro-name"
        />
        <div className="about-me">
          <div className="about-me-label"><div className="me-label">ABOUT ME</div></div>
          <div className="about-me-text">I'm a final year Computer Science student at Institut Teknologi Bandung. I was born on October, 29th 2002. I'm born and raised in Bandung. Welcome to my website!! I like to produce music, graphic design, and draw. And in my spare time, I like to watch movies and listen to music. I find many outdoor activities is relieving :D
            <div className="porto">
              <div className="projects">
                Projects
                <Row className="projects-type">
                  <Col><a href="/code"><img src="/code.png" width={60} className="icon-projects" /> <div className="project-label">Code</div></a></Col>
                  <Col><a href="/design"><img src="/design.png" width={60} className="icon-projects" /> <div className="project-label">Design</div></a></Col>
                  <Col><a href="/music"><img src="/music.png" width={60} className="icon-projects" /><div className="project-label">Music</div></a></Col>
                </Row>
              </div>
              <div className="blogs">
                Blogs
                <Row className="projects-type">
                  <Col> <img src="/blog.png" width={60} className="icon-projects" /> <div className="project-label" style={{ marginTop: "-5px" }}>Posts</div></Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section >

    </div >
  );
};

export default Home;
