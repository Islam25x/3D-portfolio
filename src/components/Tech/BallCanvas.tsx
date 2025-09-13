import { OrbitControls, Preload, Decal, Float, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../CanvasLoader";

const Ball = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
            </mesh>
        </Float>
    );
};

function BallCanvas({ icon }:any) {
    return (
        <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.25} />
                <directionalLight position={[0, 0, 0.05]} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}

export default BallCanvas;
