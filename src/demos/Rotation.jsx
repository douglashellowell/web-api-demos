import { useEffect, useState } from 'react';

const SpookySquare = ({ num: largeness, rotation }) => {
  return largeness <= 0 ? (
    <p>{rotation} degrees!</p>
  ) : (
    <div
      style={{
        height: `${largeness}vh`,
        width: `${largeness}vw`,
        background: `hsl(${largeness}deg 80% 60%)`,
        transform: `rotate(${rotation}deg)`,
        transition: `transform ${largeness / 100}s ease-in-out`,
      }}
      className="spooky-square"
    >
      <SpookySquare num={largeness - 10} />
    </div>
  );
};

const Rotation = () => {
  const [rotation, setRotation] = useState(screen.orientation.angle);

  console.log(rotation);

  const largenessPercent = 100;

  useEffect(() => {
    const rotationUpdater = setTimeout(() => {
      setRotation(screen.orientation.angle);
    }, 100);

    return () => {
      clearTimeout(rotationUpdater);
    };
  }, []);

  return <SpookySquare largeness={largenessPercent} />;
};

export default Rotation;
