import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./CanvasLoader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [scale, setScale] = useState(0.75); // الحجم الافتراضي

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScale(0.5); // شاشة صغيرة (موبايل)
      } else if (window.innerWidth < 1024) {
        setScale(0.6); // شاشة متوسطة (تابلت)
      } else {
        setScale(0.75); // شاشة كبيرة (ديسكتوب)
      }
    };

    handleResize(); // نفذها عند التحميل
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={1.8} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale} // <-- نستخدم scale الديناميكي
        position={[0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
