import { useMemo } from 'react';

type UIToSceneMapperArgs = {
    uiHeight: number;
    ratio: number;
    sections: number;
};

const useUIToSceneMapper = ({
    uiHeight,
    ratio,
    sections,
}: UIToSceneMapperArgs) => {
    const sceneDivision = Array.from({ length: sections }, (_, i) => i - 1);
    const uiDivide = uiHeight / sections;
    sceneDivision[0] = uiDivide;
    for (let i = 1; i < sections; i++) {
        sceneDivision[i] = sceneDivision[i - 1] + uiDivide;
    }
    for (let i = 0; i < sections; i++) {
        sceneDivision[i] /= ratio;
    }
    return useMemo(
        () => ({
            sceneDivision,
        }),
        [sceneDivision]
    );
};

export default useUIToSceneMapper;
