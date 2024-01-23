import { useState } from 'react';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.1;
gainNode.connect(audioContext.destination);

const Audio = () => {
  /**
   * @type {[OscillatorNode, Function]}
   * @description OscillatorNode is a Web Audio API interface representing a periodic waveform,
   * such as a sine wave. It is an AudioNode that can be used to generate a tone.
   * It has no output of its own and its output is not directly audible.
   * It is created using the AudioContext.createOscillator method.
   */
  const [longBeep, setLongBeep] = useState(null);

  const noteFrequencies = {
    C: 261.63,
    'C#': 277.18,
    D: 293.66,
    'D#': 311.13,
    E: 329.63,
    F: 349.23,
    'F#': 369.99,
    G: 392.0,
    'G#': 415.3,
    A: 440.0,
    'A#': 466.16,
    B: 493.88,
  };
  const notes = Object.keys(noteFrequencies);

  const createOscillator = (frequency) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    return oscillator;
  };

  const handleNoteClick = (note) => {
    const frequency = noteFrequencies[note];
    makeSomeNoise(frequency, 1000);
  };

  const makeSomeNoise = (freq, timeMs) => {
    const oscillator = createOscillator(freq);
    oscillator.start();
    setTimeout(() => {
      console.log('helllooo');
      oscillator.stop();
    }, timeMs); // Stop the note after 1 second
  };

  const createLongBeep = () => {
    const oscillator = createOscillator(440);
    oscillator.start();
    setLongBeep(oscillator);
  };

  const destroyLongBeep = () => {
    longBeep.stop();
    setLongBeep(null);
  };

  return (
    <div>
      {notes.map((note, index) => (
        <button key={index} onClick={() => handleNoteClick(note)}>
          {note}
        </button>
      ))}
      <br />
      <div className="long-beep">
        <input
          type="range"
          min="500.63"
          max="1000"
          step="1"
          id="freqControl"
          onChange={(event) => {
            longBeep.frequency.value = event.target.value;
          }}
        />
        <button
          onClick={() => (longBeep ? destroyLongBeep() : createLongBeep())}
        >
          START CLANGERS SIMULATION
        </button>
        {longBeep ? (
          <a href="https://www.youtube.com/watch?v=SVxj4kdrgbI">
            <img src="https://canterburymuseums.files.wordpress.com/2015/06/img_4508.jpg?w=620" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Audio;
