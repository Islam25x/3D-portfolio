import CanvasLoader from "../CanvasLoader"
import { Suspense, useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Preload } from "@react-three/drei"
import { Mesh } from "three"

function Earth({ isActive }: { isActive: boolean }) {
    const earthRef = useRef<Mesh>(null)
    const Earth = useGLTF("./planet/scene.gltf")
    const { invalidate } = useThree()
    useEffect(() => {
        if (isActive) invalidate()
    }, [invalidate, isActive])
    useFrame(() => {
        if (!isActive) return
        if (earthRef.current) earthRef.current.rotation.y += 0.005
        invalidate()
    })

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setScale(2.5); // موبايل
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

function EarthCanvas({ isActive }: { isActive: boolean }) {
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 10], fov: 25 }}
            className="!w-full"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth isActive={isActive} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default EarthCanvas
