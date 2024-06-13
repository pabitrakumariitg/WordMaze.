import React, { useRef, useState } from "react";

const InputSection = ({ answer, row }) => {
  const [guess, setGuess] = useState("");
  const inputRefs = Array.from({ length: 5 }, () => useRef(null));

  const handleChange = (index, event) => {
    const str = event.target.value.toUpperCase();
    if (str.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
      setGuess(guess + str);
    } else if (str.length === 1 && index === inputRefs.length - 1) {
      setGuess(guess + str);
    }
  };

  const handleBackspace = (event, index) => {
    if (index > 0 && event.target.value !== "") {
      inputRefs[index].current.focus();
      setGuess(guess.slice(0, -1));
    } else if (index > 0 && event.target.value === "") {
      inputRefs[index - 1].current.focus();
      setGuess(guess.slice(0, -1));
    }
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
      {inputRefs.map((inputRef, index) => (
        <input
          key={index}
          ref={inputRef}
          className="input-row"
          maxLength={1}
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
