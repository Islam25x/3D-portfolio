import { useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { Group } from "three" 

function RotatingStars({ isActive }: { isActive: boolean }) {
    const starsRef = useRef<Group>(null)
    const { invalidate } = useThree()

    useEffect(() => {
        if (isActive) invalidate()
    }, [invalidate, isActive])

    useFrame(() => {
        if (!isActive) return
        if (starsRef.current) starsRef.current.rotation.x += 0.001
        invalidate()
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

function StarsCanvas({ isActive }: { isActive: boolean }) {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas frameloop="demand" dpr={[1, 1.5]}>
                <RotatingStars isActive={isActive} />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
