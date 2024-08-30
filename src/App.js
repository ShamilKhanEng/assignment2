import React, { useState } from "react";

function AngleSelector() {
  const [angle, setAngle] = useState("0");

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Remove any leading zeros
    if (value.length > 1 && value.startsWith("0")) {
      value = value.replace(/^0+/, "");
    }

    // Ensure the value is within the allowed range and a valid number
    let numericValue = parseInt(value);
    if (isNaN(numericValue) || numericValue < 0) numericValue = 0;
    if (numericValue > 360) numericValue = numericValue % 360;

    setAngle(numericValue.toString());
  };

  const handleSliderChange = (e) => {
    setAngle(e.target.value);
  };

  const handleRadioChange = (e) => {
    setAngle(e.target.value);
  };

  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eaf2f8",
        fontFamily: '"Helvetica Neue", sans-serif',
      }}
    >
      <div
        className="options"
        style={{
          margin: "12px 0",
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <label>
          <input
            type="radio"
            name="anglePreset"
            value="0"
            checked={angle === "0"}
            onChange={handleRadioChange}
          />
          0°
        </label>
        <label>
          <input
            type="radio"
            name="anglePreset"
            value="45"
            checked={angle === "45"}
            onChange={handleRadioChange}
          />
          45°
        </label>
        <label>
          <input
            type="radio"
            name="anglePreset"
            value="60"
            checked={angle === "60"}
            onChange={handleRadioChange}
          />
          60°
        </label>
        <label>
          <input
            type="radio"
            name="anglePreset"
            value="90"
            checked={angle === "90"}
            onChange={handleRadioChange}
          />
          90°
        </label>
        <label>
          <input
            type="radio"
            name="anglePreset"
            value="180"
            checked={angle === "180"}
            onChange={handleRadioChange}
          />
          180°
        </label>
      </div>
      <div
        className="slider-wrapper"
        style={{ width: "100%", maxWidth: "400px", margin: "15px 0" }}
      >
        <input
          type="range"
          id="angleRange"
          min="0"
          max="360"
          value={angle}
          style={{ width: "100%" }}
          onChange={handleSliderChange}
        />
      </div>
      <input
        type="number"
        id="angleNumber"
        value={angle}
        min="0"
        max="360"
        onChange={handleInputChange}
        style={{ fontSize: "1.3em", margin: "8px 0" }}
      />
    </div>
  );
}

export default AngleSelector;
