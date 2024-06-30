import { useState } from "react";

const Task1 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const uncompress = (input) => {
    let stack = [];
    let currentNumber = "";
    let currentString = "";

    for (let char of input) {
      if (char === "(") {
        stack.push(currentString);
        stack.push(currentNumber);
        currentString = "";
        currentNumber = "";
      } else if (char === ")") {
        let number = parseInt(stack.pop());
        let prevString = stack.pop();
        currentString = prevString + currentString.repeat(number);
      } else if (!isNaN(char)) {
        currentNumber += char;
      } else {
        currentString += char;
      }
    }

    return currentString;
  };

  const onClickHandler = () => {
    let res = uncompress(input);
    setResult(res);
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>{result}</h1>
      <button type="button" onClick={() => onClickHandler()}>
        uncompress
      </button>
    </>
  );
};

export default Task1;
