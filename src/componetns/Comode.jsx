import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import FocusSquare from './FocusSquare';
import PropTypes from 'prop-types';

const Comode = forwardRef((props, ref) => {
  const { position, isCloseTo } = props;
  const { nodes, materials } = useGLTF(
    '/img/models/commode/GothicCommode_01_4k.gltf',
  );
  return (
    <group ref={ref} position={position} dispose={null} castShadow scale={2}>
      {isCloseTo && (
        <FocusSquare position={[0, 0.75, 0]} size={[1.2, 1.5, 1]} />
      )}
      <mesh
        castShadow
        geometry={nodes.GothicCommode_01.geometry}
        material={materials.GothicCommode_01}
      />
      <mesh
        castShadow
        geometry={nodes.GothicCommode_01_door03.geometry}
        material={materials.GothicCommode_01}
        position={[-0.001, 0.356, 0.281]}
      />
      <mesh
        castShadow
        geometry={nodes.GothicCommode_01_door02.geometry}
        material={materials.GothicCommode_01}
        position={[-0.001, 0.667, 0.261]}
      />
      <mesh
        castShadow
        geometry={nodes.GothicCommode_01_door01.geometry}
        material={materials.GothicCommode_01}
        position={[-0.001, 0.987, 0.271]}
      />
    </group>
  );
});

Comode.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  isCloseTo: PropTypes.bool.isRequired,
};

Comode.displayName = 'Comode';
export default Comode;

useGLTF.preload('/img/models/commode/GothicCommode_01_4k.gltf');
