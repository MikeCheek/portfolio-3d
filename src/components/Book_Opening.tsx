/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 static/models/book_opening.glb -k -t 
*/

import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations, useScroll } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { prefix } from '../utility/environment';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Spine: THREE.Mesh;
    Cover_L: THREE.Mesh;
    Cover_R: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane011: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane013: THREE.Mesh;
    Plane014: THREE.Mesh;
    Plane015: THREE.Mesh;
    Plane016: THREE.Mesh;
    Plane017: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane022: THREE.Mesh;
    Plane023: THREE.Mesh;
    Plane024: THREE.Mesh;
    Plane025: THREE.Mesh;
    Plane026: THREE.Mesh;
    Plane027: THREE.Mesh;
    Plane028: THREE.Mesh;
    Plane029: THREE.Mesh;
    Plane030: THREE.Mesh;
    Plane031: THREE.Mesh;
    Plane032: THREE.Mesh;
    Plane033: THREE.Mesh;
    Plane034: THREE.Mesh;
    Plane035: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    Page_coding: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName =
  | 'SpineAction'
  | 'Cover LAction'
  | 'Cover RAction'
  | 'PlaneAction'
  | 'PlaneAction.014'
  | 'PlaneAction.015'
  | 'PlaneAction.016'
  | 'PlaneAction.017'
  | 'PlaneAction.018'
  | 'PlaneAction.019'
  | 'PlaneAction.020'
  | 'PlaneAction.021'
  | 'PlaneAction.022'
  | 'PlaneAction.023'
  | 'PlaneAction.024'
  | 'PlaneAction.025'
  | 'PlaneAction.026'
  | 'PlaneAction.027'
  | 'PlaneAction.028'
  | 'PlaneAction.029'
  | 'PlaneAction.030'
  | 'PlaneAction.031'
  | 'PlaneAction.032'
  | 'PlaneAction.033'
  | 'PlaneAction.034'
  | 'PlaneAction.035'
  | 'PlaneAction.036'
  | 'PlaneAction.037'
  | 'PlaneAction.038'
  | 'PlaneAction.039'
  | 'PlaneAction.040'
  | 'PlaneAction.041'
  | 'PlaneAction.042'
  | 'PlaneAction.043'
  | 'PlaneAction.044'
  | 'PlaneAction.045'
  | 'PlaneAction.046'
  | 'PlaneAction.047'
  | 'PlaneAction.048';
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;

const Book = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(prefix + '/models/book_opening.glb') as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const [animated, setAnimated] = useState<boolean>(false);

  const data = useScroll();

  useFrame(() => {
    console.log(data.offset);
    if (!animated && data.offset > 0.5) {
      setAnimated(true);
      for (const a of animations) {
        const animObj = actions[a.name];
        if (animObj) {
          animObj.setLoop(THREE.LoopOnce, 1);
          animObj.reset().play();
        }
      }
    }
    // else if (data.offset > 1) for (const a of closing) closeBook[a.name]?.reset().play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[0.1, 0.025, 0]} />
        <group name="Empty001" position={[-0.1, 0.025, 0]} />
        <mesh
          name="Spine"
          geometry={nodes.Spine.geometry}
          material={materials.Material}
          position={[0.075, 0.125, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.1, 0.025, 1]}
        >
          <mesh
            name="Cover_L"
            geometry={nodes.Cover_L.geometry}
            material={materials.Material}
            position={[-1, 1, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[30, 0.25, 1]}
          />
          <mesh
            name="Cover_R"
            geometry={nodes.Cover_R.geometry}
            material={materials.Material}
            position={[1, 1, 0]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[30, 0.25, 1]}
          />
          <group name="Empty002" position={[0.936, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty003" position={[0.882, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty004" position={[0.829, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty005" position={[0.775, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty006" position={[0.721, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty007" position={[0.667, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty008" position={[0.614, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty009" position={[0.56, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty010" position={[0.506, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty011" position={[0.452, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty012" position={[0.399, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty013" position={[0.345, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty014" position={[0.291, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty015" position={[0.237, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty016" position={[0.184, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty017" position={[0.13, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty018" position={[0.076, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty019" position={[0.022, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty020" position={[-0.031, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty021" position={[-0.085, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty022" position={[-0.139, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty023" position={[-0.193, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty024" position={[-0.246, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty025" position={[-0.3, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty026" position={[-0.354, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty027" position={[-0.407, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty028" position={[-0.461, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty029" position={[-0.515, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty030" position={[-0.569, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty031" position={[-0.622, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty032" position={[-0.676, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty033" position={[-0.73, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty034" position={[-0.784, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty035" position={[-0.837, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty036" position={[-0.891, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
          <group name="Empty037" position={[-0.945, 1.042, 0]} rotation={[0, 0, Math.PI / 2]} scale={[18.873, 10, 1]} />
        </mesh>
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.031, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.037, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.042, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.048, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane004"
          geometry={nodes.Plane004.geometry}
          material={nodes.Plane004.material}
          position={[0.1, 0.053, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.058, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.064, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.069, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.074, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.08, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane010"
          geometry={nodes.Plane010.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.085, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane011"
          geometry={nodes.Plane011.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.091, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane012"
          geometry={nodes.Plane012.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.096, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane013"
          geometry={nodes.Plane013.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.101, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane014"
          geometry={nodes.Plane014.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.107, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane015"
          geometry={nodes.Plane015.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.112, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane016"
          geometry={nodes.Plane016.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane017"
          geometry={nodes.Plane017.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.123, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane018"
          geometry={nodes.Plane018.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane019"
          geometry={nodes.Plane019.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.134, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane020"
          geometry={nodes.Plane020.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.139, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane021"
          geometry={nodes.Plane021.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.144, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane022"
          geometry={nodes.Plane022.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.15, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane023"
          geometry={nodes.Plane023.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.155, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane024"
          geometry={nodes.Plane024.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.16, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane025"
          geometry={nodes.Plane025.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.166, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane026"
          geometry={nodes.Plane026.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.171, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane027"
          geometry={nodes.Plane027.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.176, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane028"
          geometry={nodes.Plane028.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.182, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane029"
          geometry={nodes.Plane029.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.187, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane030"
          geometry={nodes.Plane030.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.193, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane031"
          geometry={nodes.Plane031.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.198, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane032"
          geometry={nodes.Plane032.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.203, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane033"
          geometry={nodes.Plane033.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.209, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane034"
          geometry={nodes.Plane034.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.214, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
        <mesh
          name="Plane035"
          geometry={nodes.Plane035.geometry}
          material={materials.Page_coding}
          position={[0.1, 0.219, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.729, 1, 0.956]}
        />
      </group>
    </group>
  );
};

useGLTF.preload(prefix + '/models/book_opening.glb');

export default Book;

