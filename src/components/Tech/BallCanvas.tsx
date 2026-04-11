import { OrbitControls, Preload, Decal, Float, useTexture } from "@react-three/drei";
import { Canvas, type ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, memo } from "react";
import CanvasLoader from "../CanvasLoader";

interface BallProps {
    imgUrl: string; 
    isActive: boolean;
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
}

const Ball = ({ imgUrl, isActive, onPointerOver, onPointerOut }: BallProps) => {
    const [decal] = useTexture([imgUrl]);
    const { invalidate } = useThree();

    useEffect(() => {
        if (isActive) invalidate();
    }, [invalidate, isActive]);

    useFrame((state) => {
        if (!isActive) return;
        state.invalidate();
    });

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <mesh
                castShadow
                receiveShadow
                scale={2.75}
                onPointerOver={(event) => {
                    event.stopPropagation();
                    onPointerOver?.(event);
                }}
                onPointerOut={(event) => {
                    event.stopPropagation();
                    onPointerOut?.(event);
                }}
            >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
            </mesh>
        </Float>
    );
};

interface BallCanvasProps {
    icon: string;  
    isActive: boolean;
    onPointerOver?: (event: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (event: ThreeEvent<PointerEvent>) => void;
}

function BallCanvas({ icon, isActive, onPointerOver, onPointerOut }: BallCanvasProps) {
    return (
        <Canvas frameloop="demand" dpr={[1, 1.5]}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.25} />
                <directionalLight position={[0, 0, 0.05]} />
                <Ball imgUrl={icon} isActive={isActive} onPointerOver={onPointerOver} onPointerOut={onPointerOut} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}

export default memo(BallCanvas);
