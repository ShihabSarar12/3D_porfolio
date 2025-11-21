import { useGLTF } from '@react-three/drei';
import { type JSX } from 'react';
import * as THREE from 'three';

const Sand = (props: JSX.IntrinsicElements['group']) => {
    const { nodes, materials } = useGLTF('models/sand/sand.glb');
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.625}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0.707, -0.073, -0.272]}
                        rotation={[-1.971, 0.019, 3.111]}
                        scale={[1.022, 1.035, 1.053]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                (nodes.Object_13 as THREE.SkinnedMesh).geometry
                            }
                            material={
                                materials[
                                    'IngenuityFlight10SOL152_Model_20.001_Bake1_baked'
                                ]
                            }
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                (nodes.Object_14 as THREE.SkinnedMesh).geometry
                            }
                            material={
                                materials[
                                    'IngenuityFlight10SOL152_Model_20.001_Bake1_baked'
                                ]
                            }
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                (nodes.Object_15 as THREE.SkinnedMesh).geometry
                            }
                            material={
                                materials[
                                    'IngenuityFlight10SOL152_Model_20.001_Bake1_baked'
                                ]
                            }
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                (nodes.Object_16 as THREE.SkinnedMesh).geometry
                            }
                            material={
                                materials[
                                    'IngenuityFlight10SOL152_Model_20.001_Bake1_baked'
                                ]
                            }
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                (nodes.Object_17 as THREE.SkinnedMesh).geometry
                            }
                            material={
                                materials[
                                    'IngenuityFlight10SOL152_Model_20.001_Bake1_baked'
                                ]
                            }
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={
                                (nodes.Object_18 as THREE.SkinnedMesh).geometry
                            }
                            material={
                                materials[
                                    'IngenuityFlight10SOL152_Model_20.001_Bake1_baked'
                                ]
                            }
                        />
                    </group>
                </group>
            </group>
            <group scale={0.01}>
                <group position={[-51.648, -77.53, 43.881]} scale={2.25}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_13_1_Coral_13_15_16_0 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[-381.417, 13.751, 257.041]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_13_1_Coral_13_15_16_0001 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[-17.613, 28.39, 127.411]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_13_1_Coral_13_15_16_0002 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[249.866, 28.39, 265.293]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_13_1_Coral_13_15_16_0003 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[150.98, 16.002, -588.22]}
                    />
                </group>
                <group position={[68.352, -77.53, 37.881]} scale={2.25}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_15_1_Coral_13_15_16_0 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[137.918, 22.862, 143.8]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_15_1_Coral_13_15_16_0001 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[-435.868, 8.129, -118.197]}
                    />
                </group>
                <group position={[13.952, -77.53, -68.119]} scale={2.25}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_16_1_Coral_13_15_16_0 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[-188.029, 21.092, -432.71]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_16_1_Coral_13_15_16_0001 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[513.193, 14.24, -73.3]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            (
                                nodes.Coral_16_1_Coral_13_15_16_0002 as THREE.SkinnedMesh
                            ).geometry
                        }
                        material={materials.Coral_13_15_16}
                        position={[-441.118, 19.938, 425.217]}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('models/sand/sand.glb');

export default Sand;
