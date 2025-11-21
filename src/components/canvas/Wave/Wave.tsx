import { useMemo, useRef } from 'react';
import waveFragmentShader from './shaders/fragment';
import waveVertexShader from './shaders/vertex';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

const Wave = () => {
    const plane = useRef<THREE.Mesh>(null!);
    const viewport = useThree((state) => state.viewport);

    const data = useMemo(
        () => ({
            fragmentShader: waveFragmentShader,
            vertexShader: waveVertexShader,
            uniforms: {
                uBigWavesFrequency: { value: new THREE.Vector2(1.2, 1.2) },
                uTime: { value: 0 },
                uBigWavesSpeed: { value: 1.25 },
                uBigWavesElevation: { value: 0.33 },
                uSmallIterations: { value: 4 },
                uColorOffset: { value: 0.25 },
                uColorMultiplier: { value: 3.8 },
                uSmallWavesFrequency: { value: 5 },
                uSmallWavesSpeed: { value: 1 },
                uSmallWavesElevation: { value: 0.15 },
                uSurfaceColor: { value: new THREE.Color('#89cff0') },
                uDeepColor: { value: new THREE.Color('#5bb3e8') },
                uCameraY: { value: 0 },
                uFadeStart: { value: 0.05 },
                uFadeEnd: { value: 1.0 },
                uUnderwaterColor: { value: new THREE.Color('#5bb3e8') },
                uDeepUnderwaterColor: { value: new THREE.Color('#2e8bc0') },
                uWaterFogColor: { value: new THREE.Color('#a7e3f5') },
                uMaxDarkDepth: { value: 5.0 },
            },
        }),
        []
    );

    useFrame(({ clock, camera }) => {
        const elapsedTime = clock.getElapsedTime();
        const shaderMaterial = plane.current.material as THREE.ShaderMaterial;
        shaderMaterial.uniforms.uTime.value = elapsedTime;
        shaderMaterial.uniforms.uCameraY.value = camera.position.y;
    });

    return (
        <mesh ref={plane} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry
                args={[viewport.width * 2, viewport.height * 2, 128, 128]}
            />
            <shaderMaterial {...data} />
        </mesh>
    );
};

export default Wave;
