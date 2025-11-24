import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import bubbleTexture from '../../assets/textures/bubble.png';

type BubblesProps = {
    count?: number;
    roam?: { x: number; y: number; z: number };
    minSpeed?: number;
    maxSpeed?: number;
    minSize?: number;
    maxSize?: number;
    driftAmp?: number;
    centerPull?: number;
    edgeSoftness?: number;
};

const Bubbles = ({
    count = 600,
    roam = { x: 6, y: 6, z: 2 },
    minSpeed = 0.2,
    maxSpeed = 0.3,
    minSize = 2,
    maxSize = 4,
    driftAmp = 0.015,
    centerPull = 0.001,
    edgeSoftness = 0.75,
}: BubblesProps) => {
    const pointsRef = useRef<THREE.Points>(null!);
    const texture = useTexture(bubbleTexture);

    const half = useMemo(
        () => ({
            x: Math.max(0.1, roam.x * 0.5),
            y: Math.max(0.1, roam.y * 0.5),
            z: Math.max(0.1, roam.z * 0.5),
        }),
        [roam]
    );

    const { positions, speeds, sizes, drift } = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        const sz = new Float32Array(count);
        const dft = new Float32Array(count * 2);

        for (let i = 0; i < count; i++) {
            pos[i * 3 + 0] = THREE.MathUtils.randFloatSpread(roam.x);
            pos[i * 3 + 1] = -half.y + Math.random() * roam.y;
            pos[i * 3 + 2] = THREE.MathUtils.randFloatSpread(roam.z);

            spd[i] = THREE.MathUtils.lerp(minSpeed, maxSpeed, Math.random());
            sz[i] = THREE.MathUtils.lerp(minSize, maxSize, Math.random());

            dft[i * 2 + 0] = Math.random() * Math.PI * 2;
            dft[i * 2 + 1] = Math.random() * Math.PI * 2;
        }
        return { positions: pos, speeds: spd, sizes: sz, drift: dft };
    }, [count, roam, half, minSpeed, maxSpeed, minSize, maxSize]);

    useFrame((state, delta) => {
        const p = (
            pointsRef.current.geometry.attributes
                .position as THREE.BufferAttribute
        ).array as Float32Array;
        const t = state.clock.elapsedTime;

        const edgeStartX = half.x * edgeSoftness;
        const edgeStartZ = half.z * edgeSoftness;

        for (let i = 0; i < count; i++) {
            const ix = i * 3;
            const iy = ix + 1;
            const iz = ix + 2;

            p[iy] += speeds[i] * delta;

            const ax = Math.max(
                0,
                1 -
                    Math.max(0, Math.abs(p[ix]) - edgeStartX) /
                        Math.max(1e-6, half.x - edgeStartX)
            );
            const az = Math.max(
                0,
                1 -
                    Math.max(0, Math.abs(p[iz]) - edgeStartZ) /
                        Math.max(1e-6, half.z - edgeStartZ)
            );
            const ampX = driftAmp * ax;
            const ampZ = driftAmp * az;

            p[ix] += Math.sin(t * 0.8 + drift[i * 2 + 0]) * ampX;
            p[iz] += Math.cos(t * 0.7 + drift[i * 2 + 1]) * ampZ;

            p[ix] -= p[ix] * centerPull * delta;
            p[iz] -= p[iz] * centerPull * delta;

            if (p[iy] > half.y) {
                p[iy] = -half.y;
                p[ix] = THREE.MathUtils.randFloatSpread(roam.x);
                p[iz] = THREE.MathUtils.randFloatSpread(roam.z);
            }

            p[ix] = THREE.MathUtils.clamp(p[ix], -half.x, half.x);
            p[iz] = THREE.MathUtils.clamp(p[iz], -half.z, half.z);
        }

        (
            pointsRef.current.geometry.attributes
                .position as THREE.BufferAttribute
        ).needsUpdate = true;
    });

    const geom = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        g.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

        const r = Math.hypot(roam.x, roam.y, roam.z) * 2;
        g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), r);
        g.boundingBox = new THREE.Box3(
            new THREE.Vector3(-r, -r, -r),
            new THREE.Vector3(r, r, r)
        );
        return g;
    }, [positions, sizes, roam]);

    return (
        <points ref={pointsRef} frustumCulled={false} renderOrder={10}>
            <primitive object={geom} attach='geometry' />
            <pointsMaterial
                attach='material'
                map={texture}
                alphaMap={texture}
                transparent
                depthWrite={false}
                sizeAttenuation
                onBeforeCompile={(shader) => {
                    shader.uniforms.uDPR = {
                        value: Math.min(window.devicePixelRatio || 1, 2),
                    };
                    shader.uniforms.uMaxSize = { value: 36.0 };
                    shader.vertexShader = shader.vertexShader
                        .replace(
                            'void main() {',
                            'uniform float uDPR; uniform float uMaxSize; attribute float aSize; void main() {'
                        )
                        .replace(
                            'gl_PointSize = size;',
                            'float z = max(-mvPosition.z, 0.001); float s = (aSize * 1.0 / z) / uDPR; gl_PointSize = min(uMaxSize, s);'
                        );
                }}
            />
        </points>
    );
};

export default Bubbles;
