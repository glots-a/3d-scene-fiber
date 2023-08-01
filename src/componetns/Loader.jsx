import React from 'react';
import { useProgress, Html } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div id="progress">{Math.floor(progress)} % loaded</div>
    </Html>
  );
}
