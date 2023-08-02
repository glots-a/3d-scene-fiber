import React from 'react';
import PropTypes from 'prop-types';

import { useProgress, Html } from '@react-three/drei';

const Loader = ({ onLoading }) => {
  const { progress } = useProgress();

  if (progress === 100) {
    onLoading();
  }

  return (
    <Html center>
      <div id="progress">{Math.floor(progress)} % loaded</div>
    </Html>
  );
};

Loader.propTypes = {
  onLoading: PropTypes.func.isRequired,
};

export default Loader;
