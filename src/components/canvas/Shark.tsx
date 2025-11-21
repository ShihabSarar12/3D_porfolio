import { useEffect, useRef, type JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const Shark = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials, animations } = useGLTF(
        'models/shark/great_white_shark.glb'
    );
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions?.['Swim']?.play();
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
                    <group name='root'>
                        <group
                            name='GLTF_SceneRootNode'
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group
                                name='RootNode_(gltf_orientation_matrix)_35'
                                rotation={[-Math.PI / 2, 0, 0]}
                            >
                                <group name='RootNode_(model_correction_matrix)_34'>
                                    <group name='Root_33'>
                                        <group
                                            name='Armature_30'
                                            position={[0.004, -0.221, -0.468]}
                                        >
                                            <group name='GLTF_created_0'>
                                                <primitive
                                                    object={
                                                        nodes.GLTF_created_0_rootJoint
                                                    }
                                                />
                                                <skinnedMesh
                                                    name='Object_10'
                                                    geometry={
                                                        (
                                                            nodes.Object_10 as THREE.SkinnedMesh
                                                        ).geometry
                                                    }
                                                    material={
                                                        materials[
                                                            'mat_0-megalodon.jpg'
                                                        ]
                                                    }
                                                    skeleton={
                                                        (
                                                            nodes.Object_10 as THREE.SkinnedMesh
                                                        ).skeleton
                                                    }
                                                />
                                                <group name='Mesh_0_29' />
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

useGLTF.preload('models/shark/great_white_shark.glb');

export default Shark;
