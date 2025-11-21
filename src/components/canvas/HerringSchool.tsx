import * as THREE from 'three';
import { useEffect, useRef, type JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const HerringSchool = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials, animations } = useGLTF(
        'models/school_of_herring/school_of_herring.glb'
    );
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions?.['All Animations']?.play();
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
                            <group name='GLTF_created_0'>
                                <primitive
                                    object={nodes.GLTF_created_0_rootJoint}
                                />
                                <skinnedMesh
                                    name='Object_6'
                                    geometry={
                                        (nodes.Object_6 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={materials.Atlantic_herring_body}
                                    skeleton={
                                        (nodes.Object_6 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_7'
                                    geometry={
                                        (nodes.Object_7 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={
                                        materials.Atlantic_herring_corneas
                                    }
                                    skeleton={
                                        (nodes.Object_7 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_9'
                                    geometry={
                                        (nodes.Object_9 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={materials.Atlantic_herring_body}
                                    skeleton={
                                        (nodes.Object_9 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_10'
                                    geometry={
                                        (nodes.Object_10 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={
                                        materials.Atlantic_herring_corneas
                                    }
                                    skeleton={
                                        (nodes.Object_10 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_12'
                                    geometry={
                                        (nodes.Object_12 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={materials.Atlantic_herring_body}
                                    skeleton={
                                        (nodes.Object_12 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_13'
                                    geometry={
                                        (nodes.Object_13 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={
                                        materials.Atlantic_herring_corneas
                                    }
                                    skeleton={
                                        (nodes.Object_13 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_15'
                                    geometry={
                                        (nodes.Object_15 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={materials.Atlantic_herring_body}
                                    skeleton={
                                        (nodes.Object_15 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_16'
                                    geometry={
                                        (nodes.Object_16 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={
                                        materials.Atlantic_herring_corneas
                                    }
                                    skeleton={
                                        (nodes.Object_16 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_18'
                                    geometry={
                                        (nodes.Object_18 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={materials.Atlantic_herring_body}
                                    skeleton={
                                        (nodes.Object_18 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_19'
                                    geometry={
                                        (nodes.Object_19 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={
                                        materials.Atlantic_herring_corneas
                                    }
                                    skeleton={
                                        (nodes.Object_19 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_21'
                                    geometry={
                                        (nodes.Object_21 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={materials.Atlantic_herring_body}
                                    skeleton={
                                        (nodes.Object_21 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <skinnedMesh
                                    name='Object_22'
                                    geometry={
                                        (nodes.Object_22 as THREE.SkinnedMesh)
                                            .geometry
                                    }
                                    material={
                                        materials.Atlantic_herring_corneas
                                    }
                                    skeleton={
                                        (nodes.Object_22 as THREE.SkinnedMesh)
                                            .skeleton
                                    }
                                />
                                <group
                                    name='Atlantic_herring_0'
                                    position={[0, 0.066, 0]}
                                />
                                <group
                                    name='Atlantic_herring001_1'
                                    position={[0, 0.118, 0]}
                                />
                                <group
                                    name='Atlantic_herring002_2'
                                    position={[0, 0.173, 0]}
                                />
                                <group
                                    name='Atlantic_herring003_3'
                                    position={[-0.12, 0.31, 0.003]}
                                    rotation={[-Math.PI, 1.309, -Math.PI]}
                                />
                                <group
                                    name='Atlantic_herring004_4'
                                    position={[-0.12, 0.361, 0.003]}
                                    rotation={[-Math.PI, 1.309, -Math.PI]}
                                />
                                <group
                                    name='Atlantic_herring005_5'
                                    position={[-0.12, 0.416, 0.003]}
                                    rotation={[-Math.PI, 1.309, -Math.PI]}
                                />
                                <group
                                    name='Plane001_73'
                                    position={[0, 0, 0.001]}
                                    scale={0.015}
                                >
                                    <mesh
                                        name='Object_24'
                                        castShadow
                                        receiveShadow
                                        geometry={
                                            (
                                                nodes.Object_24 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.material_0}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('models/school_of_herring/school_of_herring.glb');

export default HerringSchool;
