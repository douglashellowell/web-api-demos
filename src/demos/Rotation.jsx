import { useEffect, useState } from 'react';

const Rotation = () => {
  const [rotation, setRotation] = useState(screen.orientation.angle);

  useEffect(() => {
    const rotationListener = screen.orientation.addEventListener(
      'change',
      (event) => {
        console.log('orientation changed', event.target);
        setRotation(event.target.angle);
      }
    );

    return () => {
      screen.orientation.removeEventListener('change', rotationListener);
    };
  });

  return <div style={{ transform: `rotate:${rotation}deg` }}>{rotation}</div>;
};

export default Rotation;
