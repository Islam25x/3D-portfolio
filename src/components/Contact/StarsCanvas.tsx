import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

function RotatingStars() {
    const starsRef = useRef<any>()

    useFrame(() => {
        if (starsRef.current) {
            starsRef.current.rotation.x += 0.001
            
        }
    })

    return (
        <group ref={starsRef}>
            <Stars
                radius={200}
                depth={60}
                count={5000}
                factor={6}
                fade
            />
        </group>
    )
}

function StarsCanvas() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas>
                <RotatingStars />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
