import useVibration from '../hooks/useVibrateLol';

const VibrateButton = ({ pattern, label }) => {
  useVibration(pattern);

  return <button>{label}</button>;
};

const Vibration = () => {
  const patterns = [
    {
      name: 'SOS',
      pattern: [300, 100, 300, 100, 300, 100, 900, 100, 900, 100, 900, 100],
    },
    {
      name: "Lets'a GO!",
      pattern: [
        125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600,
      ],
    },
    {
      name: 'heroes in .5 sh',
      pattern: [
        75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 450, 75, 75, 75, 75, 75,
        525,
      ],
    },
    {
      name: '+150xp',
      pattern: [
        50, 100, 50, 100, 50, 100, 400, 100, 300, 100, 350, 50, 200, 100, 100,
        50, 600,
      ],
    },
    {
      name: 'imperial',
      pattern: [
        500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110,
        170, 40, 500,
      ],
    },
    {
      name: 'shaken not stirred',
      pattern: [
        200, 100, 200, 275, 425, 100, 200, 100, 200, 275, 425, 100, 75, 25, 75,
        125, 75, 25, 75, 125, 100, 100,
      ],
    },
  ];

  return (
    <div>
      {patterns.map((pattern, index) => (
        <VibrateButton key={index} pattern={pattern.pattern} />
      ))}
    </div>
  );
};

export default Vibration;
