import React from 'react';

const Light = () => {
  return (
    <>
      <directionalLight position={[6, 8, 10]} castShadow intensity={3} />
      <ambientLight intensity={1} />
    </>
  );
};

export default Light;
