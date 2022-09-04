import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { run as runHolder } from "holderjs/holder";
import { Canvas, useFrame } from "@react-three/fiber";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(
    (state, delta) => (ref.current.rotation.y = ref.current.rotation.x += 0.01)
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 5 : 3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "grey" : "#2d3436"} />
    </mesh>
  );
}

const Highlights = () => {
  useEffect(() => {
    runHolder("d-block w-100");
  });
  return (
    <Carousel variant="dark">
      <Carousel.Item style={{ width: "100vw", height: "35vh" }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </Carousel.Item>
      <Carousel.Item style={{ width: "100vw", height: "35vh" }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </Carousel.Item>
      <Carousel.Item style={{ width: "100vw", height: "35vh" }}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </Carousel.Item>
    </Carousel>
  );
};

export default Highlights;
