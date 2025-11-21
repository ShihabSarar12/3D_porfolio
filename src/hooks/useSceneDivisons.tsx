import { useMemo } from 'react';

const uiYToSceneY = (
    uiY: number,
    uiHeight: number,
    sceneTop = 1.25,
    sceneBottom = -57
): number => {
    if (uiHeight === 0) return sceneTop;
    const t = uiY / uiHeight;
    return sceneTop + (sceneBottom - sceneTop) * t;
};

interface DivisionPoint {
    index: number;
    uiY: number;
    sceneY: number;
}

interface DivisionBoundary {
    index: number;
    uiY: number;
    sceneY: number;
}

const useSceneDivisions = (
    uiHeight: number,
    sceneTop = 1.25,
    sceneBottom = -57
): {
    centers: DivisionPoint[];
    boundaries: DivisionBoundary[];
} => {
    return useMemo(() => {
        if (!uiHeight || uiHeight <= 0) {
            return { centers: [], boundaries: [] };
        }

        const sectionHeight = uiHeight / 4;

        const boundaries: DivisionBoundary[] = Array.from(
            { length: 5 },
            (_, i) => {
                const uiY = i * sectionHeight;
                const sceneY = uiYToSceneY(
                    uiY,
                    uiHeight,
                    sceneTop,
                    sceneBottom
                );
                return { index: i, uiY, sceneY };
            }
        );

        const centers: DivisionPoint[] = Array.from({ length: 4 }, (_, i) => {
            const uiY = (i + 0.5) * sectionHeight;
            const sceneY = uiYToSceneY(uiY, uiHeight, sceneTop, sceneBottom);
            return { index: i, uiY, sceneY };
        });

        return { centers, boundaries };
    }, [uiHeight, sceneTop, sceneBottom]);
};

export default useSceneDivisions;
