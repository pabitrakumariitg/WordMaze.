import React, { useRef, useState } from "react";

const InputSection = ({ answer, row }) => {
  const [guess, setGuess] = useState("");
  const inputRefs = Array.from({ length: answer.length }, () => useRef(null));

  const handleChange = (index, event) => {
    const str = event.target.value.toUpperCase();
    if (/^[A-Z]$/.test(str)) {
      setGuess((prevGuess) => {
        const newGuess = prevGuess.substring(0, index) + str + prevGuess.substring(index + 1);
        return newGuess;
      });

      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleBackspace = (event, index) => {
    if (index > 0 && event.target.value === "") {
      inputRefs[index - 1].current.focus();
    }

    setGuess((prevGuess) => {
      const newGuess = prevGuess.substring(0, index - 1) + prevGuess.substring(index);
      return newGuess;
    });
  };

  const handleEnter = () => {
    inputRefs.forEach((inputRef, i) => {
      const letter = guess[i];
      if (letter === answer[i]) {
        inputRef.current.style.backgroundColor = "lightgreen";
      } else if (answer.includes(letter)) {
        inputRef.current.style.backgroundColor = "lightyellow";
      } else {
        inputRef.current.style.backgroundColor = "lightgrey";
      }
    });

    if (guess !== answer && row === 6) {
      window.alert(`The correct answer is: ${answer}`);
    } else if (guess === answer) {
      window.alert("Congratulations, you guessed the correct answer!");
    }
  };

  return (
    <div className="input">
      {Array.from(answer).map((_, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          className="input-row"
          maxLength={1}
          value={guess[index] || ""}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => {
            if (event.key === "Backspace") {
              handleBackspace(event, index);
            }
            if (event.key === "Enter") {
              handleEnter();
            }
          }}
        />
      ))}
    </div>
  );
};

export default InputSection;
