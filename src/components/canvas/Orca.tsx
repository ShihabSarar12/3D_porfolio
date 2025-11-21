import { useEffect, useRef, type JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const Orca = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials, animations } = useGLTF(
        'models/orca/female_orca.glb'
    );
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions?.['Take 001']?.play();
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name='4293d03172c54ad197e7157af1367324fbx'
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name='Object_2'>
                            <group name='RootNode'>
                                <group name='Object_4'>
                                    <primitive object={nodes._rootJoint} />
                                    <skinnedMesh
                                        name='Object_7'
                                        geometry={
                                            (
                                                nodes.Object_7 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.ORCADIFFUSEONLY}
                                        skeleton={
                                            (
                                                nodes.Object_7 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_9'
                                        geometry={
                                            (
                                                nodes.Object_9 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.ORCADIFFUSEONLY}
                                        skeleton={
                                            (
                                                nodes.Object_9 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_11'
                                        geometry={
                                            (
                                                nodes.Object_11 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.ORCADIFFUSEONLY}
                                        skeleton={
                                            (
                                                nodes.Object_11 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_13'
                                        geometry={
                                            (
                                                nodes.Object_13 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.ORCADIFFUSEONLY}
                                        skeleton={
                                            (
                                                nodes.Object_13 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_15'
                                        geometry={
                                            (
                                                nodes.Object_15 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.ORCADIFFUSEONLY}
                                        skeleton={
                                            (
                                                nodes.Object_15 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_17'
                                        geometry={
                                            (
                                                nodes.Object_17 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.ORCADIFFUSEONLY}
                                        skeleton={
                                            (
                                                nodes.Object_17 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <group
                                        name='Object_6'
                                        position={[0, 0, -0.41]}
                                    />
                                    <group
                                        name='Object_8'
                                        position={[0, -0.091, 0]}
                                        scale={[0.978, 1, 1]}
                                    />
                                    <group name='Object_10' />
                                    <group name='Object_12' />
                                    <group name='Object_14' />
                                    <group name='Object_16' />
                                    <group name='BODYHIPOLY' />
                                    <group name='TONGUEHIPOLY' />
                                    <group
                                        name='TEETHLOWER2'
                                        position={[0, 0, -0.41]}
                                    />
                                    <group
                                        name='TEETHHIGHER2'
                                        position={[0, -0.091, 0]}
                                        scale={[0.978, 1, 1]}
                                    />
                                    <group name='ERCAEYESIZERSGroup18205' />
                                    <group name='LEFT_EYEBALL' />
                                    <group name='BODY_LOPOLY' />
                                    <group name='TONGUE_LOPOLY' />
                                    <group name='RIGHT_EYEBALL' />
                                    <group name='Orca_ROOT_CTRL'>
                                        <group
                                            name='Spine_01_CTRL'
                                            position={[0, -0.183, 0.002]}
                                            rotation={[-0.02, 0, 0]}
                                        >
                                            <group
                                                name='Spine_02_CTRL'
                                                position={[0, -0.091, 0.001]}
                                                rotation={[-0.02, 0, 0]}
                                            >
                                                <group
                                                    name='Spine_03_CTRL'
                                                    position={[
                                                        0, 0.609, -0.026,
                                                    ]}
                                                    rotation={[-0.086, 0, 0]}
                                                >
                                                    <group
                                                        name='Spine_04_CTRL'
                                                        position={[
                                                            0, 2.72, -0.286,
                                                        ]}
                                                        rotation={[
                                                            -0.209, 0, 0,
                                                        ]}
                                                    >
                                                        <group
                                                            name='Spine_05_CTRL'
                                                            position={[
                                                                0, 3.961,
                                                                -0.416,
                                                            ]}
                                                            rotation={[
                                                                -0.209, 0, 0,
                                                            ]}
                                                        >
                                                            <group
                                                                name='Spine_06_CTRL'
                                                                position={[
                                                                    0, 1.17,
                                                                    -0.03,
                                                                ]}
                                                                rotation={[
                                                                    -0.051, 0,
                                                                    0,
                                                                ]}
                                                            >
                                                                <group
                                                                    name='Tail_CTRL'
                                                                    position={[
                                                                        0,
                                                                        1.179,
                                                                        -0.027,
                                                                    ]}
                                                                    rotation={[
                                                                        -0.045,
                                                                        0, 0,
                                                                    ]}
                                                                >
                                                                    <group
                                                                        name='leftfluke01'
                                                                        position={[
                                                                            1.177,
                                                                            0,
                                                                            -27.04,
                                                                        ]}
                                                                        rotation={[
                                                                            0,
                                                                            0.471,
                                                                            -0.299,
                                                                        ]}
                                                                    >
                                                                        <group
                                                                            name='LeftFluke_01_CTRL'
                                                                            rotation={[
                                                                                -0.144,
                                                                                0,
                                                                                0,
                                                                            ]}
                                                                        >
                                                                            <group
                                                                                name='leftfluke02'
                                                                                position={[
                                                                                    3.02,
                                                                                    0,
                                                                                    0,
                                                                                ]}
                                                                                rotation={[
                                                                                    -0.081,
                                                                                    0.257,
                                                                                    -0.066,
                                                                                ]}
                                                                            >
                                                                                <group
                                                                                    name='LeftFluke_02_CTRL'
                                                                                    rotation={[
                                                                                        -0.096,
                                                                                        0,
                                                                                        0,
                                                                                    ]}
                                                                                />
                                                                            </group>
                                                                        </group>
                                                                    </group>
                                                                    <group
                                                                        name='rightfluke01'
                                                                        position={[
                                                                            -1.177,
                                                                            0,
                                                                            -27.04,
                                                                        ]}
                                                                        rotation={[
                                                                            -Math.PI,
                                                                            0.471,
                                                                            -0.299,
                                                                        ]}
                                                                        scale={
                                                                            -1
                                                                        }
                                                                    >
                                                                        <group
                                                                            name='RightFluke_01_CTRL'
                                                                            rotation={[
                                                                                -0.144,
                                                                                0,
                                                                                0,
                                                                            ]}
                                                                        >
                                                                            <group
                                                                                name='rightfluke02'
                                                                                position={[
                                                                                    3.02,
                                                                                    0,
                                                                                    0,
                                                                                ]}
                                                                                rotation={[
                                                                                    -0.081,
                                                                                    0.257,
                                                                                    -0.066,
                                                                                ]}
                                                                            >
                                                                                <group
                                                                                    name='RightFluke_02_CTRL'
                                                                                    rotation={[
                                                                                        -0.096,
                                                                                        0,
                                                                                        0,
                                                                                    ]}
                                                                                />
                                                                            </group>
                                                                        </group>
                                                                    </group>
                                                                </group>
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group name='DorsalFin_01_CTRL'>
                                                <group
                                                    name='dorsal2'
                                                    position={[0, 9.878, 0.493]}
                                                    rotation={[
                                                        1.285,
                                                        Math.PI / 2,
                                                        0,
                                                    ]}
                                                >
                                                    <group name='DorsalFin_02_CTRL'>
                                                        <group
                                                            name='dorsal3'
                                                            position={[
                                                                2.872, 0, 0,
                                                            ]}
                                                            rotation={[
                                                                0, 0, -0.295,
                                                            ]}
                                                        >
                                                            <group name='DorsalFin_03_CTRL' />
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                        <group
                                            name='Head_CTRL'
                                            position={[0, -0.094, 0.004]}
                                            rotation={[-0.006, 0, 0]}
                                        >
                                            <group
                                                name='jaw'
                                                position={[0, -2.313, 19.163]}
                                                rotation={[0.314, -1.57, 0]}
                                            >
                                                <group
                                                    name='Jaw_CTRL'
                                                    position={[1.395, 0.324, 0]}
                                                    rotation={[0, 0, 0.569]}
                                                >
                                                    <group
                                                        name='Tongue_01_CTRL'
                                                        position={[
                                                            -18.942, -3.71, 0,
                                                        ]}
                                                        rotation={[
                                                            -Math.PI / 2,
                                                            1.257,
                                                            Math.PI / 2,
                                                        ]}
                                                    >
                                                        <group
                                                            name='Tongue02'
                                                            position={[
                                                                0, -1.663,
                                                                22.471,
                                                            ]}
                                                            rotation={[
                                                                0.797,
                                                                -Math.PI / 2,
                                                                0,
                                                            ]}
                                                        >
                                                            <group name='Tongue_02_CTRL'>
                                                                <group
                                                                    name='Tongue3'
                                                                    position={[
                                                                        2.254,
                                                                        0, 0,
                                                                    ]}
                                                                    rotation={[
                                                                        0, 0,
                                                                        0.374,
                                                                    ]}
                                                                >
                                                                    <group name='Tongue_03_CTRL' />
                                                                </group>
                                                            </group>
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name='LEye'
                                                position={[3.806, 1.049, 20.17]}
                                                rotation={[0, -0.157, -0.252]}
                                            >
                                                <group name='Left_Eye_CTRL'>
                                                    <group
                                                        name='LEyeAim'
                                                        position={[0.73, 0, 0]}
                                                    >
                                                        <group name='Left_Eye_Aim_CTRL' />
                                                    </group>
                                                </group>
                                            </group>
                                            <group
                                                name='REye'
                                                position={[
                                                    -3.806, 1.049, 20.17,
                                                ]}
                                                rotation={[
                                                    -Math.PI,
                                                    -0.157,
                                                    -0.252,
                                                ]}
                                                scale={-1}
                                            >
                                                <group name='Right_Eye_CTRL'>
                                                    <group
                                                        name='REyeAim'
                                                        position={[0.73, 0, 0]}
                                                    >
                                                        <group name='Right_Eye_Aim_CTRL' />
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                        <group
                                            name='lpec1'
                                            position={[3.781, -4.283, 14.445]}
                                            rotation={[0, 0.973, -0.635]}
                                        >
                                            <group
                                                name='Left_Pectoral_01_CTRL'
                                                rotation={[-0.002, 0, 0]}
                                            >
                                                <group
                                                    name='lpec2'
                                                    position={[2.826, 0, 0]}
                                                    rotation={[
                                                        0.023, -0.031, 0.038,
                                                    ]}
                                                >
                                                    <group
                                                        name='Left_Pectoral_02_CTRL'
                                                        rotation={[
                                                            -0.002, 0, 0,
                                                        ]}
                                                    >
                                                        <group
                                                            name='lpec3'
                                                            position={[
                                                                2.145, 0, 0,
                                                            ]}
                                                            rotation={[
                                                                0.071, -0.104,
                                                                0.149,
                                                            ]}
                                                        >
                                                            <group
                                                                name='Left_Pectoral_03_CTRL'
                                                                rotation={[
                                                                    -0.002, 0,
                                                                    0,
                                                                ]}
                                                            />
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                        <group
                                            name='rpec1'
                                            position={[-3.781, -4.283, 14.445]}
                                            rotation={[Math.PI, 0.973, -0.635]}
                                            scale={-1}
                                        >
                                            <group
                                                name='Right_Pectoral_01_CTRL'
                                                rotation={[-0.021, 0, 0]}
                                            >
                                                <group
                                                    name='rpec2'
                                                    position={[2.826, 0, 0]}
                                                    rotation={[
                                                        0.023, -0.031, 0.038,
                                                    ]}
                                                >
                                                    <group
                                                        name='Right_Pectoral_02_CTRL'
                                                        rotation={[
                                                            -0.011, 0, 0,
                                                        ]}
                                                    >
                                                        <group
                                                            name='rpec3'
                                                            position={[
                                                                2.145, 0, 0,
                                                            ]}
                                                            rotation={[
                                                                0.071, -0.104,
                                                                0.149,
                                                            ]}
                                                        >
                                                            <group
                                                                name='Right_Pectoral_03_CTRL'
                                                                rotation={[
                                                                    -0.011, 0,
                                                                    0,
                                                                ]}
                                                            />
                                                        </group>
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('models/orca/female_orca.glb');

export default Orca;
