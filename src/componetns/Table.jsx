import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import FocusSquare from './FocusSquare';
import PropTypes from 'prop-types';

const Table = forwardRef((props, ref) => {
  const { position, isCloseTo } = props;

  const { nodes, materials } = useGLTF(
    '/img/models/table/round_wooden_table_01_4k.gltf',
  );

  console.log('is what', isCloseTo);
  return (
    <group position={position} dispose={null} scale={2} ref={ref}>
      {isCloseTo && (
        <FocusSquare position={[0, 0.75, 0]} size={[1.4, 1.2, 1.4]} />
      )}
      <mesh
        geometry={nodes.round_wooden_table_01.geometry}
        material={materials.round_wooden_table_01}
        castShadow
      />
      <mesh
        geometry={nodes.round_wooden_table_01_bolts.geometry}
        material={materials.round_wooden_table_01}
        castShadow
      />
    </group>
  );
});

Table.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  isCloseTo: PropTypes.bool.isRequired,
};

Table.displayName = 'Table';
export default Table;

useGLTF.preload('/img/models/table/round_wooden_table_01_4k.gltf');
