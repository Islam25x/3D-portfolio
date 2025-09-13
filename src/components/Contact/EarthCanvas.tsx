import CanvasLoader from "../CanvasLoader"
import { Suspense, useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Preload } from "@react-three/drei"

function Earth() {
    const earthRef = useRef<any>()
    const Earth = useGLTF("./planet/scene.gltf")
    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.005
        }
    })

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScale(1); // موبايل
            } else if (window.innerWidth < 1024) {
                setScale(1.2); // تابلت
            } else {
                setScale(1.7);   // ديسكتوب
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <mesh ref={earthRef}>
            <hemisphereLight intensity={1} groundColor={"black"} />
            <primitive object={Earth.scene} scale={scale} position={[0, 0, 0]} />
        </mesh>
    )
}

function EarthCanvas() {
    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 10], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="!w-full"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default EarthCanvas
