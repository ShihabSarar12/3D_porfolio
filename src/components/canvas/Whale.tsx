import { useEffect, useRef, type JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const Whale = (props: JSX.IntrinsicElements['group']) => {
    const group = useRef<THREE.Group>(null!);
    const { nodes, materials, animations } = useGLTF(
        'models/whale/blue_whale.glb'
    );
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions?.['Take 001']?.play();
    }, [actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <group
                    name='Sketchfab_model'
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.413}
                >
                    <group
                        name='9153faa7d1164b12bcab5b5f430d2e4bfbx'
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
                                        material={materials.material}
                                        skeleton={
                                            (
                                                nodes.Object_7 as THREE.SkinnedMesh
                                            ).skeleton
                                        }
                                    />
                                    <group
                                        name='Object_6'
                                        rotation={[0, 0, Math.PI]}
                                        scale={5.701}
                                    />
                                    <group
                                        name='PM3D_Sphere3D'
                                        rotation={[0, 0, Math.PI]}
                                        scale={5.701}
                                    />
                                    <group
                                        name='nurbsCircle1'
                                        position={[-0.106, -11.904, -38.593]}
                                        rotation={[-1.217, 0, 0]}
                                        scale={[1.867, 1.175, 0.695]}
                                    >
                                        <group
                                            name='cluster4Handle'
                                            position={[0.057, -34.066, 4.326]}
                                            rotation={[1.355, 0, 0]}
                                            scale={[0.536, 1.381, 0.886]}
                                        />
                                    </group>
                                    <group
                                        name='ikHandle1'
                                        position={[0, -5.627, -36.251]}
                                        rotation={[-0.895, Math.PI / 2, 0]}
                                    />
                                    <group
                                        name='ikHandle2'
                                        position={[-10.035, -6.252, -38.053]}
                                        rotation={[2.316, 0.582, 0.009]}
                                    />
                                    <group
                                        name='ikHandle3'
                                        position={[10.035, -6.252, -38.053]}
                                        rotation={[-0.826, 0.582, 0.009]}
                                    />
                                    <group
                                        name='ikHandle4'
                                        position={[13.382, -3.551, 13.024]}
                                        rotation={[-1.276, 0.188, 0.281]}
                                    />
                                    <group
                                        name='ikHandle5'
                                        position={[-13.405, -4.279, 13.562]}
                                        rotation={[1.869, 0.245, 0.092]}
                                    />
                                    <group name='cluster3Handle' />
                                    <group
                                        name='nurbsCircle2'
                                        position={[0.153, 9.828, -35.027]}
                                        rotation={[1.778, 0, 0]}
                                    >
                                        <group
                                            name='cluster1Handle'
                                            position={[-0.153, 23.702, -5.409]}
                                            rotation={[-1.778, 0, 0]}
                                        />
                                    </group>
                                    <group
                                        name='nurbsCircle4'
                                        position={[1.075, -7.994, 0]}
                                        rotation={[0, 0, 1.249]}
                                    >
                                        <group name='cluster5Handle' />
                                    </group>
                                    <group name='group' />
                                    <group
                                        name='nurbsCircle5'
                                        position={[3.556, -10.403, 0]}
                                        rotation={[0, 0, 1.534]}
                                    >
                                        <group name='cluster6Handle' />
                                    </group>
                                    <group
                                        name='nurbsCircle6'
                                        position={[-1.539, -8.606, -0.265]}
                                        rotation={[0.004, 0.03, -1.285]}
                                    >
                                        <group name='cluster7Handle' />
                                    </group>
                                    <group
                                        name='nurbsCircle7'
                                        position={[-25.741, 2.551, 0.796]}
                                        rotation={[Math.PI, 0, -1.621]}
                                        scale={-1}
                                    >
                                        <group
                                            name='cluster8Handle'
                                            position={[0.097, 0, 0]}
                                            rotation={[-Math.PI, 0, 0]}
                                            scale={-1}
                                        />
                                    </group>
                                    <group
                                        name='nurbsCircle8'
                                        position={[0.153, 3.403, 1.265]}
                                        rotation={[1.648, 0, 0]}
                                        scale={1.215}
                                    >
                                        <group
                                            name='cluster2Handle'
                                            position={[-0.126, -1.065, -0.271]}
                                            rotation={[-1.648, 0, 0]}
                                            scale={0.823}
                                        />
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

useGLTF.preload('models/whale/blue_whale.glb');

export default Whale;
