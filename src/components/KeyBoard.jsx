import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import BackspaceIcon from "@mui/icons-material/Backspace";

const KeyBoard = () => {
  const [usedKeys, setUsedKeys] = useState({});

  const handleClick = (char) => {
    console.log("Clicked", char);
    setUsedKeys((prev) => ({ ...prev, [char]: true }));
  };

  const handleKeyPress = (event) => {
    const char = event.key.toUpperCase();
    if (/^[A-Z]$/.test(char) || char === "Enter" || char === "Backspace") {
      handleClick(char);
    }
  };

  const handleButtonClick = (char) => {
    handleClick(char);
  };

  const handleTouchStart = (char) => {
    handleClick(char);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const isUsed = (char) => usedKeys[char] || false;

  return (
    <div className="keyboard">
      <div className="first-row">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((char) => (
          <Button
            key={char}
            variant="contained"
            size="medium"
            onClick={() => handleButtonClick(char)}
            onTouchStart={() => handleTouchStart(char)}
            style={{ backgroundColor: isUsed(char) ? "#ddd" : undefined }}
          >
            {char}
          </Button>
        ))}
      </div>

      <div className="second-row">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((char) => (
          <Button
            key={char}
            variant="contained"
            size="medium"
            onClick={() => handleButtonClick(char)}
            onTouchStart={() => handleTouchStart(char)}
            style={{ backgroundColor: isUsed(char) ? "#ddd" : undefined }}
          >
            {char}
          </Button>
        ))}
      </div>

      <div className="third-row">
        <Button
          variant="contained"
          size="medium"
          onClick={() => handleButtonClick("Enter")}
          onTouchStart={() => handleTouchStart("Enter")}
        >
          Enter
        </Button>
        {["Z", "X", "C", "V", "B", "N", "M"].map((char) => (
          <Button
            key={char}
            variant="contained"
            size="medium"
            onClick={() => handleButtonClick(char)}
            onTouchStart={() => handleTouchStart(char)}
            style={{ backgroundColor: isUsed(char) ? "#ddd" : undefined }}
          >
            {char}
          </Button>
        ))}
        <BackspaceIcon
          onClick={() => handleButtonClick("Backspace")}
          onTouchStart={() => handleTouchStart("Backspace")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default KeyBoard;
