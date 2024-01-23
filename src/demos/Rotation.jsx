import { useEffect, useState } from 'react';

const Rotation = () => {
  const [rotation, setRotation] = useState(screen.orientation.angle);

  useEffect(() => {
    const rotationUpdater = setTimeout(() => {
      setRotation(screen.orientation.angle);
    }, 100);

    return () => {
      clearTimeout(rotationUpdater);
    };
  }, []);

  return <div style={{ transform: `rotate:${rotation}deg` }}>{rotation}</div>;
};

export default Rotation;
