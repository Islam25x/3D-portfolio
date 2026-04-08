import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import avatarModel from "../assets/avatar/Untitled.glb";

const Avatar = () => {
  const avatar = useGLTF(avatarModel);
  const [transform, setTransform] = useState({
    scale: 0.88,
    position: [-3.5, -39, -2.5] as [number, number, number],
    rotation: [0.05, 1.2, -0.01] as [number, number, number],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTransform({
          scale: .9,
          position: [-1, -41, -1.9],
          rotation: [0.05, 1.2, -0.01],
        });
      } else if (window.innerWidth < 1024) {
        setTransform({
          scale: .98,
          position: [0, -44.5, -2.15],
          rotation: [0.05, 1.2, -0.01],
        });
      } else {
        setTransform({
          scale: .97,
          position: [-2.5, -44.5, -2.5],
          rotation: [0.05, 1.2, -0.01],
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <mesh>
      <ambientLight intensity={0.5} />

      <directionalLight position={[3, 3, 5]} intensity={1.2} />

      <directionalLight position={[-3, 2, 5]} intensity={0.6} />

      <spotLight position={[0, 2, 4]} intensity={2} angle={0.35} />

      <primitive
        object={avatar.scene}
        scale={transform.scale}
        position={transform.position}
        rotation={transform.rotation}
      />
    </mesh>
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, -.5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Avatar />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;
