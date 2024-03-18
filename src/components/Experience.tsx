import React, { Suspense, lazy, useEffect } from 'react';
import { ContactShadows, Environment, OrbitControls, Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import { useCurrentSheet, editable } from '@theatre/r3f';
import { val } from '@theatre/core';
import { PerspectiveCamera } from '@react-three/drei';

if (process.env.NODE_ENV === 'development') {
  studio.initialize();
  studio.extend(extension);
}

const Experience = () => {
  const Office = lazy(() => import('./Office'));
  const Book = lazy(() => import('./Book'));

  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const EditableCamera = editable(PerspectiveCamera, 'perspectiveCamera');

  // our callback will run on every animation frame
  useFrame(() => {
    if (sheet) {
      // the length of our sequence
      const sequenceLength = val(sheet.sequence.pointer.length);
      // update the "position" of the playhead in the sequence, as a fraction of its whole length
      sheet.sequence.position = scroll.offset * sequenceLength;
    }
  });

  return (
    <EditableCamera theatreKey="Camera" position={[1, 1, 1]}>
      {/* <OrbitControls /> */}
      {/* <Sky /> */}
      {/* <Environment preset="sunset" /> */}
      {/* <editable.directionalLight theatreKey="LightLeft" /> */}
      {/* <editable.directionalLight theatreKey="LightRight" /> */}
      <Suspense fallback={null}>
        <group>
          <editable.group theatreKey="Office">
            <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
            <editable.ambientLight intensity={0.1} theatreKey="ambient" />
            <editable.directionalLight position={[-25, 8, 20]} intensity={3} theatreKey="sun" color="#ffd094" />
            <editable.pointLight position={[-0.5, 1, -1.65]} intensity={2.5} theatreKey="lamp" color="#4b1f61" />
            <Office />
            <Book position={[-0.5, 0.78, -1.5]} scale={0.3} rotation={[0, -Math.PI / 2, 0]} />
          </editable.group>
        </group>
      </Suspense>
    </EditableCamera>
  );
};

export default Experience;
