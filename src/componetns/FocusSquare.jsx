/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useThree, useFrame } from '@react-three/fiber';

const FocusSquare = ({ position, size }) => {
  const ref = useRef();
  const { camera } = useThree();

  const updateFocusSquare = () => {
    if (!ref.current) return;

    const distance = camera.position.distanceTo(ref.current.position);
    const scaleFactor = distance * 0.1;

    ref.current.scale.set(scaleFactor, scaleFactor, 1);

    ref.current.rotation.copy(camera.rotation);
  };

  useFrame(updateFocusSquare);

  return (
    <mesh ref={ref} position={position}>
      <meshBasicMaterial color="red" wireframe />
      <planeGeometry args={size} />
    </mesh>
  );
};

FocusSquare.propTypes = {
  size: PropTypes.arrayOf(PropTypes.number).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FocusSquare;
