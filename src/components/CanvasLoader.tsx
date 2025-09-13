import { Html, useProgress } from "@react-three/drei"
function CanvasLoader() {
    const { progress } = useProgress()
    return (
        <Html>
            <span className="canvas-loader"></span>
            <p
                style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    )
}

export default CanvasLoader