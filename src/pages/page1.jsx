import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { config, useSpring, animated } from "@react-spring/three";
// import "./../assets/page1.module.css";

const Box = (props) => {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
  });

  const { scale } = useSpring({
    scale: isClicked ? 2 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      {...props}
      ref={ref}
      onClick={() => setIsClicked((prevState) => !prevState)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      scale={scale}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isHovered ? "hotpink" : "orange"} />
    </animated.mesh>
  );
};

export const Page1 = () => {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <Box position={[-1.6, 0, 0]} />
          <Box position={[1.6, 0, 0]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          {/* <pointLight position={[-10, -10, -10]} /> */}
        </Canvas>
      </div>
      <h1>Threejs Fever</h1>
      <a href="">もっとみる</a>
    </>
  );
};
