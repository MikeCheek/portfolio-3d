import React from 'react';
import type { HeadFC } from 'gatsby';
import { Canvas, extend } from '@react-three/fiber';
import Experience from '../components/Experience';
import '../styles/globals.scss';
import * as styles from '../styles/index.module.scss';
import Heading from '../components/atoms/Heading';
import { ScrollControls } from '@react-three/drei';
import { getProject } from '@theatre/core';
import { editable as e, SheetProvider } from '@theatre/r3f';
import animationState from '../animations/animationState.json';

const IndexPage = () => {
  const scrollDown = () => window.scrollTo(0, window.innerHeight);
  const project = getProject('Porfolio', { state: animationState });
  project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity }));
  const sheet = project.sheet('Porfolio1');

  return (
    <main>
      <Canvas resize={{ scroll: false }} shadows camera={{ fov: 30 }} className={styles.scene3d}>
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <Experience />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
      {/*<p onClick={scrollDown} className={styles.goDown}>
        \/
      </p> */}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>3D Portfolio</title>;
