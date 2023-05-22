import React, { useState } from "react";
import './style.css';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [tempSelected, setTempSelected] = useState("cel");

  const calculateTemp = (event) => {
    event.preventDefault();

    const celToFah = (cel) => {
      let fahrenheit = ((cel * 9) / 5 + 32).toFixed(1);
      return fahrenheit;
    };

    const fahToCel = (fah) => {
      let celsius = (((fah - 32) * 5) / 9).toFixed(1);
      return celsius;
    };

    if (tempSelected === "cel") {
      setTemperature(celToFah(temperature));
    } else {
      setTemperature(fahToCel(temperature));
    }
  };

  return (
    <div className="temperature-converter">
      <form onSubmit={calculateTemp}>
        <input
          type="number"
          name="temperature"
          placeholder="Enter temperature"
          value={temperature}
          onChange={(event) => setTemperature(event.target.value)}
        />
        <select
          name="temp_diff"
          onChange={(event) => setTempSelected(event.target.value)}
        >
          <option value="cel">Celsius</option>
          <option value="fah">Fahrenheit</option>
        </select>
        <button type="submit">Convert</button>
      </form>
      <h2>{tempSelected === 'cel' ? 'Celsius' : 'Fahrenheit'}:</h2>
      <h3>{temperature}</h3>
    </div>
  );
};

export default TemperatureConverter;
