/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function Battery() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.bluetooth.getDevices();
      setDevices(devices);
    };

    getDevices();
  }, []);

  const requestNewConnection = async () => {
    const chosenDevice = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['battery_service', 'device_information'],
    });

    setDevices((prevDevices) => [...prevDevices, chosenDevice]);
  };

  return (
    <div className="App">
      <h2>devices</h2>
      <button onClick={requestNewConnection}>Connect Device</button>
      <DeviceList devices={devices} />
    </div>
  );
}

const DeviceList = ({ devices }) => {
  return (
    <ul>
      {devices.map((device, index) => (
        <li key={index}>
          <Device device={device} />
        </li>
      ))}
    </ul>
  );
};

const Device = ({ device }) => {
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    async function getDevices() {
      const chosenDevice = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service', 'device_information'],
      });

      const deviceServer = await chosenDevice.gatt?.connect();

      const batteryService = await deviceServer?.getPrimaryService(
        'battery_service'
      );
      console.log(batteryService);

      const batteryLevelCharacteristic =
        await batteryService?.getCharacteristic('battery_level');
      const batteryLevelDataView =
        await batteryLevelCharacteristic?.readValue();
      const batteryLevel = batteryLevelDataView.getInt8();
      console.log('🔋', batteryLevel);
      setBatteryLevel(batteryLevel);
    }

    getDevices();
  }, [device]);

  return (
    <div>
      {device.name} |{' '}
      <span role="img" aria-label="battery level">
        🔋 {batteryLevel} %
      </span>
    </div>
  );
};

export default Battery;
