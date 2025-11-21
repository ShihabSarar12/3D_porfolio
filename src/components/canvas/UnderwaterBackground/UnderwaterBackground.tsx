import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import underwaterVertexShader from './shaders/vertex';
import underwaterFragmentShader from './shaders/fragment';

type Props = {
    fadeStart?: number; // in world units below surface
    fadeEnd?: number; // in world units below surface
    topColor?: string;
    bottomColor?: string;
    darkColor?: string;
    maxDarkenDepth?: number; // still in world units
    radius?: number;
    surfaceY?: number; // <-- new: height of the water surface (match Scene logic)
};

const UnderwaterBackground = ({
    fadeStart = 0.0, // start fading right after crossing surface
    fadeEnd = 1.2, // fully visible ~1.2 units below surface
    topColor = '#89cff0',
    bottomColor = '#5bb3e8',
    darkColor = '#2e8bc0',
    maxDarkenDepth = 5.0,
    radius = 120,
    surfaceY = 0, // <-- match your Scene threshold for “underwater”
}: Props) => {
    const dome = useRef<THREE.Mesh>(null!);
    const cameraLocal = useMemo(() => new THREE.Vector3(), []);
    const surfacePoint = useMemo(() => new THREE.Vector3(), []);

    const material = useMemo(
        () =>
            new THREE.ShaderMaterial({
                side: THREE.BackSide,
                transparent: true,
                depthWrite: false,
                depthTest: true,
                uniforms: {
                    uCameraY: { value: 0.0 },
                    uSurfaceY: { value: surfaceY }, // <-- new
                    uFadeStart: { value: fadeStart },
                    uFadeEnd: { value: fadeEnd },
                    uTopColor: { value: new THREE.Color(topColor) },
                    uBottomColor: { value: new THREE.Color(bottomColor) },
                    uDarkColor: { value: new THREE.Color(darkColor) },
                    uMaxDarkDepth: { value: maxDarkenDepth },
                },
                vertexShader: underwaterVertexShader,
                fragmentShader: underwaterFragmentShader,
            }),
        [
            fadeStart,
            fadeEnd,
            topColor,
            bottomColor,
            darkColor,
            maxDarkenDepth,
            surfaceY,
        ]
    );

    useFrame(({ camera }) => {
        if (!dome.current) return;

        // Drive shader uniforms
        const mat = dome.current.material as THREE.ShaderMaterial;
        const parent = dome.current.parent;

        if (parent) {
            // move the dome so its world-space center matches the camera even when ScrollControls offset the group
            cameraLocal.copy(camera.position);
            parent.worldToLocal(cameraLocal);
            dome.current.position.copy(cameraLocal);

            surfacePoint.set(0, surfaceY, 0);
            parent.localToWorld(surfacePoint);
            mat.uniforms.uSurfaceY.value = surfacePoint.y;
        } else {
            dome.current.position.copy(camera.position);
            mat.uniforms.uSurfaceY.value = surfaceY;
        }

        mat.uniforms.uCameraY.value = camera.position.y;
    });

    return (
        <mesh ref={dome} renderOrder={-1000} frustumCulled={false}>
            <sphereGeometry args={[radius, 64, 64]} />
            <primitive attach='material' object={material} />
        </mesh>
    );
};

export default UnderwaterBackground;
