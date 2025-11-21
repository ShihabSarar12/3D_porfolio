import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import { useScroll } from '@react-three/drei';
import Wave from './Wave/Wave';

const easeInOutQuad = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

const Experience = () => {
    const scroll = useScroll();

    const { startPos, endPos, lookAt } = useMemo(
        () => ({
            startPos: new THREE.Vector3(0, 1.25, 3.0),
            endPos: new THREE.Vector3(0, -5.0, 2.2),
            lookAt: new THREE.Vector3(0, 0.0, 0.0),
        }),
        []
    );

    useFrame(({ camera }) => {
        const t: number = easeInOutQuad(
            THREE.MathUtils.clamp(scroll.offset, 0, 1)
        );
        camera.position.lerpVectors(startPos, endPos, t);
        camera.lookAt(lookAt);
    });

    return (
        <>
            <Wave />
        </>
    );
};

export default Experience;
