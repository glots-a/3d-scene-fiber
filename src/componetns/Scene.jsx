import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { val } from '@theatre/core';
import { PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';

import Comode from './Comode';
import Table from './Table';
import Light from './Light';
import Floor from './Floor';

const Scene = () => {
  const [isTableDistance, setIsTableDistance] = useState(false);
  const [isComodeDistance, setIsComodeDistance] = useState(false);

  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const { camera } = useThree();
  const comodeRef = useRef();
  const tableRef = useRef();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;

    const comodeDistance = camera.position.distanceTo(
      comodeRef.current.position,
    );

    if (comodeDistance < 5) {
      setIsComodeDistance(true);
    } else {
      setIsComodeDistance(false);
    }

    const tableDistance = camera.position.distanceTo(tableRef.current.position);

    if (tableDistance < 5) {
      setIsTableDistance(true);
    } else {
      setIsTableDistance(false);
    }
  });

  return (
    <>
      <Light />
      <Comode
        ref={comodeRef}
        position={[-2.5, 0, -1.5]}
        isCloseTo={isComodeDistance}
      />
      <Table
        ref={tableRef}
        position={[2.5, 0, 2]}
        isCloseTo={isTableDistance}
      />
      <Floor />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[-1, 3, 10]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  );
};

export default Scene;
