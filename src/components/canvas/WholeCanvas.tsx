import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import ErrorBoundary from '../../errors/ErrorBoundary';
import * as THREE from 'three';
import { Loader, Scroll, ScrollControls } from '@react-three/drei';
import UI from '../ui/UI';
import {
    memo,
    useCallback,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { ScrollBridge } from '../ScrollBridge';
import ResearchPaperPage from '../Research';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AchievementDetails from '../AchieveDetails';

const UiMeasured = memo(
    ({ onHeightChange }: { onHeightChange: (height: number) => void }) => {
        const ref = useRef<HTMLDivElement>(null);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            const update = () => {
                const height = el.clientHeight;
                onHeightChange(height);
            };

            onHeightChange(el.clientHeight);

            if (typeof ResizeObserver !== 'undefined') {
                const ro = new ResizeObserver(update);
                ro.observe(el);
                return () => ro.disconnect();
            }

            window.addEventListener('resize', update);
            return () => window.removeEventListener('resize', update);
        }, [onHeightChange]);

        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <div ref={ref}>
                                <UI />
                            </div>
                        }
                    />

                    <Route
                        path='/research/:id'
                        element={<ResearchPaperPage />}
                    />
                    <Route
                        path='/achievement/:id'
                        element={<AchievementDetails />}
                    />
                </Routes>
            </BrowserRouter>
        );
    }
);

const WholeCanvas = ({ scenePages = 1 }) => {
    const [uiPages, setUiPages] = useState(1);
    const [uiHeight, setUiHeight] = useState(0);

    const handleHeightChange = useCallback((height: number) => {
        setUiHeight(height);
        const h = typeof window !== 'undefined' ? window.innerHeight : 1;
        const pages = Math.max(1, height / h);
        setUiPages(pages);
    }, []);

    const pages = useMemo(
        () => Math.max(uiPages, scenePages),
        [uiPages, scenePages]
    );

    return (
        <ErrorBoundary>
            <Loader />
            <Canvas
                camera={{
                    position: [0, 1.25, 3],
                    fov: window.innerWidth < 600 ? 75 : 50,
                }}
                gl={{ antialias: true }}
                onCreated={({ gl }) => {
                    gl.setClearColor('#121010');
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                }}
            >
                {/* window.innerWidth < 600 ? 26.35 : 18.6 */}
                <ScrollControls pages={pages} damping={0.15}>
                    <Scroll>
                        <Scene uiHeight={uiHeight} pages={pages} />
                    </Scroll>
                    <Scroll html>
                        <UiMeasured onHeightChange={handleHeightChange} />
                    </Scroll>
                    <ScrollBridge />
                </ScrollControls>
            </Canvas>
        </ErrorBoundary>
    );
};

export default WholeCanvas;
