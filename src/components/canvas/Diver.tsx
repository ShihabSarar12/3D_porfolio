import { useEffect, useRef, type JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const Diver = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials, animations } = useGLTF(
        'models/diver/nanando_diver_-_underwater.glb'
    );
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions?.['Armature|mixamo.com|Layer0']?.play();
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
                                name='Armature_73'
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.262}
                            >
                                <group name='GLTF_created_0'>
                                    <primitive
                                        object={nodes.GLTF_created_0_rootJoint}
                                    />
                                    <skinnedMesh
                                        name='Object_7'
                                        geometry={
                                            (
                                                nodes.Object_7 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Cable_Oxigeno}
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
                                        material={materials.Caso}
                                        skeleton={
                                            (
                                                nodes.Object_9 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_10'
                                        geometry={
                                            (
                                                nodes.Object_10 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Caso_light}
                                        skeleton={
                                            (
                                                nodes.Object_10 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_12'
                                        geometry={
                                            (
                                                nodes.Object_12 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Chaleco}
                                        skeleton={
                                            (
                                                nodes.Object_12 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_14'
                                        geometry={
                                            (
                                                nodes.Object_14 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Buso}
                                        skeleton={
                                            (
                                                nodes.Object_14 as THREE.SkinnedMesh
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
                                        material={materials.Buso_Stroke}
                                        skeleton={
                                            (
                                                nodes.Object_15 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_16'
                                        geometry={
                                            (
                                                nodes.Object_16 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Buso_Stroke_2}
                                        skeleton={
                                            (
                                                nodes.Object_16 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_18'
                                        geometry={
                                            (
                                                nodes.Object_18 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Lentes}
                                        skeleton={
                                            (
                                                nodes.Object_18 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_19'
                                        geometry={
                                            (
                                                nodes.Object_19 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Lentes_Respirador}
                                        skeleton={
                                            (
                                                nodes.Object_19 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_20'
                                        geometry={
                                            (
                                                nodes.Object_20 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Lentes_Glass}
                                        skeleton={
                                            (
                                                nodes.Object_20 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_22'
                                        geometry={
                                            (
                                                nodes.Object_22 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Linterna}
                                        skeleton={
                                            (
                                                nodes.Object_22 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_23'
                                        geometry={
                                            (
                                                nodes.Object_23 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Linterna_Light}
                                        skeleton={
                                            (
                                                nodes.Object_23 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_25'
                                        geometry={
                                            (
                                                nodes.Object_25 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Oxigeno}
                                        skeleton={
                                            (
                                                nodes.Object_25 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_26'
                                        geometry={
                                            (
                                                nodes.Object_26 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Oxigeno_Stroke}
                                        skeleton={
                                            (
                                                nodes.Object_26 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_28'
                                        geometry={
                                            (
                                                nodes.Object_28 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Paletas}
                                        skeleton={
                                            (
                                                nodes.Object_28 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <skinnedMesh
                                        name='Object_29'
                                        geometry={
                                            (
                                                nodes.Object_29 as THREE.SkinnedMesh
                                            ).geometry
                                        }
                                        material={materials.Paleta_Stroke_Back}
                                        skeleton={
                                            (
                                                nodes.Object_29 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <group name='Cable_Oxigeno_Cylinder004_65' />
                                    <group name='Casco_Mesh_66' />
                                    <group name='Chaleco_BodyMesh001_67' />
                                    <group name='Cuerpo_HeadMesh_68' />
                                    <group name='Lentes_Swimming_goggles_69' />
                                    <group name='Linterna_Cylinder007_70' />
                                    <group name='Oxigeno_Sphere_71' />
                                    <group name='Paletas_Plane_72' />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/nanando_diver_-_underwater.glb');

export default Diver;
