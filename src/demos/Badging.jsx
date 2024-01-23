const Badging = () => {
  const setBadge = (value) => {
    navigator.setAppBadge(value);
  };

  return (
    <div>
      <h2>Badging</h2>
      <h1>safari only - maybe only for PWA too...</h1>
      <button onClick={() => setBadge('flag')}>flag</button>
      <button onClick={() => setBadge(1)}>1</button>
      <button onClick={() => setBadge(2)}>2</button>
      <button onClick={() => setBadge(100)}>100</button>
      <button onClick={() => navigator.clearAppBadge()}>clear</button>
    </div>
  );
};

export default Badging;
