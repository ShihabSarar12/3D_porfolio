import { useEffect, useRef, type JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const FishSchool = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef(null!);
    const { nodes, materials, animations } = useGLTF(
        'models/school_of_fish/fish_school.glb'
    );
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions?.['swimming']?.play();
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <group
                    name='Sketchfab_model'
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.063}
                >
                    <group name='root'>
                        <group
                            name='GLTF_SceneRootNode'
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group name='RootNode0_0' scale={0.01}>
                                <group name='skeletal3_7'>
                                    <group name='GLTF_created_0'>
                                        <primitive
                                            object={
                                                nodes.GLTF_created_0_rootJoint
                                            }
                                        />
                                        <skinnedMesh
                                            name='Object_156'
                                            geometry={
                                                (
                                                    nodes.Object_156 as THREE.SkinnedMesh
                                                ).geometry
                                            }
                                            material={materials.material_0}
                                            skeleton={
                                                (
                                                    nodes.Object_156 as THREE.SkinnedMesh
                                                ).skeleton
                                            }
                                        />
                                        <skinnedMesh
                                            name='Object_159'
                                            geometry={
                                                (
                                                    nodes.Object_159 as THREE.SkinnedMesh
                                                ).geometry
                                            }
                                            material={materials.material_1}
                                            skeleton={
                                                (
                                                    nodes.Object_159 as THREE.SkinnedMesh
                                                ).skeleton
                                            }
                                        />
                                        <skinnedMesh
                                            name='Object_162'
                                            geometry={
                                                (
                                                    nodes.Object_162 as THREE.SkinnedMesh
                                                ).geometry
                                            }
                                            material={materials.material_2}
                                            skeleton={
                                                (
                                                    nodes.Object_162 as THREE.SkinnedMesh
                                                ).skeleton
                                            }
                                        />
                                        <skinnedMesh
                                            name='Object_165'
                                            geometry={
                                                (
                                                    nodes.Object_165 as THREE.SkinnedMesh
                                                ).geometry
                                            }
                                            material={materials.material_3}
                                            skeleton={
                                                (
                                                    nodes.Object_165 as THREE.SkinnedMesh
                                                ).skeleton
                                            }
                                        />
                                        <group name='_3_correction'>
                                            <group name='_3' />
                                        </group>
                                        <group name='_4_correction'>
                                            <group name='_4' />
                                        </group>
                                        <group name='_5_correction'>
                                            <group name='_5' />
                                        </group>
                                        <group name='_6_correction'>
                                            <group name='_6' />
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

useGLTF.preload('models/school_of_fish/fish_school.glb');

export default FishSchool;
