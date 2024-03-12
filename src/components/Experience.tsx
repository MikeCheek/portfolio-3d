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
      <Environment preset="sunset" />
      {/* <editable.directionalLight theatreKey="LightLeft" />
      <editable.directionalLight theatreKey="LightRight" /> */}
      <Suspense fallback={null}>
        <group>
          {/* <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#ffffff" /> */}
          <editable.group theatreKey="Office">
            <Office />
          </editable.group>
        </group>
      </Suspense>
    </EditableCamera>
  );
};

export default Experience;
