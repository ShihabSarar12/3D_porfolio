import React, {
    Suspense,
    useCallback,
    useMemo,
    useState,
    type ReactNode,
} from 'react';
import ErrorBoundary from '../../errors/ErrorBoundary';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Loader, Scroll, ScrollControls } from '@react-three/drei';
import UiMeasured from '../ui/UiMeasured';
import { ScrollBridge } from '../ScrollBridge';
import Bubbles from './Bubbles';
import { useParams } from 'react-router-dom';

const IndividualPageCanvas = ({
    scenePages = 1,
    children,
}: {
    scenePages?: number;
    children: ReactNode;
}) => {
    const { id } = useParams();
    const [uiPages, setUiPages] = useState(1);

    const handleHeightChange = useCallback((height: number) => {
        const h = typeof window !== 'undefined' ? window.innerHeight : 1;
        const pages = Math.max(1, height / h);
        setUiPages(pages);
    }, []);

    const pages = useMemo(
        () => Math.max(1, Math.max(uiPages, scenePages)),
        [uiPages, scenePages]
    );

    return (
        <ErrorBoundary>
            <Loader />
            <Canvas
                style={{ width: '100%', height: '100vh' }}
                camera={{
                    position: [0, 1.25, 3],
                    fov: window.innerWidth < 600 ? 75 : 50,
                }}
                gl={{ antialias: true }}
                onCreated={({ gl }) => {
                    gl.setClearColor('#074387');
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                }}
            >
                <ScrollControls pages={pages} damping={0.15}>
                    <Scroll>
                        <Suspense fallback={null}>
                            <group position={[0, -1, -1]}>
                                <Bubbles
                                    count={20}
                                    roam={{ x: 7, y: 15, z: 1 }}
                                />
                            </group>
                        </Suspense>
                    </Scroll>
                    <Scroll html>
                        <UiMeasured onHeightChange={handleHeightChange}>
                            {React.isValidElement(children)
                                ? React.cloneElement(
                                      children as React.ReactElement<any>,
                                      { id: Number(id) }
                                  )
                                : children}
                        </UiMeasured>
                    </Scroll>
                    <ScrollBridge />
                </ScrollControls>
            </Canvas>
        </ErrorBoundary>
    );
};

export default IndividualPageCanvas;
