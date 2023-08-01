import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import { getProject } from '@theatre/core';
import cameraAnimation from './camera-scroll-animation.json';
import { SheetProvider } from '@theatre/r3f';

import Scene from './componetns/Scene';
import Loader from './componetns/Loader';

export default function App() {
  const sheet = getProject('Fly Through', { state: cameraAnimation }).sheet(
    'Scene',
  );

  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<Loader />}>
          <ScrollControls pages={3} damping={1} maxSpeed={1}>
            <SheetProvider sheet={sheet}>
              <Scene />
              <Environment files="./img/sunflowers_puresky_4k.hdr" background />
            </SheetProvider>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <span id="info" className="heartbeat">
        Start scrolling
      </span>
    </>
  );
}
