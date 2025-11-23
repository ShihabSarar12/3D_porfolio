import { Stats } from '@react-three/drei';
import { Suspense } from 'react';
import UnderwaterBackground from './UnderwaterBackground/UnderwaterBackground';
import Wave from './Wave/Wave';
import Bubbles from './Bubbles';
import FishSchool from './FishSchool';
import HerringSchool from './HerringSchool';
import Sand from './Sand';
import Shark from './Shark';
import Diver from './Diver';
// import { useScrollSceneMapper } from '../../hooks/useScrollSceneMapper';
import useUIToSceneMapper from '../../hooks/useUIToSceneMapper';

const Scene = ({ uiHeight }: { uiHeight: number; pages: number }) => {
    // const { sections } = useScrollSceneMapper({
    //     uiTotalHeight: uiHeight,
    //     pages: pages,
    //     sceneTop: 1.25,
    //     sections: 4,
    //     unitsPerScreen: 1,
    // });
    // ratio: -226.0702
    const { sceneDivision } = useUIToSceneMapper({
        uiHeight,
        ratio: -226.0702,
        sections: 5,
    });

    return (
        <>
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <Wave />
                <UnderwaterBackground
                    topColor='#89cff0'
                    bottomColor='#5bb3e8'
                    darkColor='#2e8bc0'
                    maxDarkenDepth={30}
                />
                {window.innerWidth < 600 ? null : (
                    <HerringSchool
                        position={[0, sceneDivision?.[0], 1]}
                        scale={[1.5, 1.5, 1.5]}
                    />
                )}
                {window.innerWidth < 600 ? null : (
                    <FishSchool
                        position={[0, sceneDivision?.[1], -0.5]}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                )}
                {window.innerWidth < 600 ? null : (
                    <Shark
                        position={[0, sceneDivision?.[2], 0]}
                        rotation={[-Math.PI / 6, 0, 0]}
                        scale={[2, 2, 2]}
                    />
                )}
                {window.innerWidth < 600 ? null : (
                    <Diver
                        position={[0, sceneDivision?.[3], -0]}
                        scale={[0.25, 0.25, 0.25]}
                    />
                )}
                {window.innerWidth < 600 ? null : (
                    <Sand position={[0, sceneDivision?.[4], -10]} />
                )}
                <group position={[0, sceneDivision?.[0], -2]}>
                    <Bubbles count={12} roam={{ x: 7, y: 9, z: 2 }} />
                </group>
                <group position={[0, sceneDivision?.[1], -2]}>
                    <Bubbles count={12} roam={{ x: 7, y: 9, z: 2 }} />
                </group>
                <group position={[0, sceneDivision?.[2], -2]}>
                    <Bubbles count={12} roam={{ x: 7, y: 9, z: 2 }} />
                </group>
                <group position={[0, sceneDivision?.[3], -2]}>
                    <Bubbles count={12} roam={{ x: 7, y: 9, z: 2 }} />
                </group>
                <Stats />
            </Suspense>
        </>
    );
};

export default Scene;
