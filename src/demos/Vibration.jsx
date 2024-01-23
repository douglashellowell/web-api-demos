import useVibration from '../hooks/useVibrateLol';

const VibrateButton = ({ pattern }) => {
  useVibration(pattern);

  return <button>B{'z'.repeat(pattern.length)}</button>;
};

const Vibration = () => {
  const pattern1 = [300, 100, 300];
  const pattern2 = [100, 200, 100, 200, 100, 200];

  return (
    <div>
      <VibrateButton pattern={pattern1} />
      <VibrateButton pattern={pattern2} />
    </div>
  );
};

export default Vibration;
