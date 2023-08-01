/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Plane, useTexture } from '@react-three/drei';

const Floor = () => {
  const floorTexture = useTexture({
    map: './img/textures/floor/textures/laminate_floor_03_diff_2k.jpg',
    displacementMap:
      './img/textures/floor/textures/laminate_floor_03_disp_2k.png',
    aoMap: './img/textures/floor/textures/laminate_floor_03_ao_2k.jpg',
    roughnessMap: './img/textures/floor/textures/laminate_floor_03_arm_2k.jpg',
    metalnessMap: './img/textures/floor/textures/laminate_floor_03_arm_2k.jpg',
  });

  return (
    <Plane
      args={[10, 10, 4, 4]}
      rotation-x={-Math.PI / 2}
      position={[0, -0.13, 0]}
      receiveShadow
    >
      <meshStandardMaterial {...floorTexture} />
    </Plane>
  );
};

export default Floor;
