import React from 'react';
import PropTypes from 'prop-types';

const FocusSquare = ({ position, size }) => {
  return (
    <mesh position={position}>
      <meshStandardMaterial color="orange" wireframe />
      <boxGeometry args={size} />
    </mesh>
  );
};

FocusSquare.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FocusSquare;
