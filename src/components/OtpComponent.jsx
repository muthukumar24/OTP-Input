import React, { useEffect, useRef, useState } from "react";

const OTP_DIGITS_COUNT = 5;

const OtpComponent = () => {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnchange = (value, index) => {
    // console.log(value);

    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1); // to display the last typed number
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    // console.log(e);
    if(!e.target.value && e.key === "Backspace"){
        refArr.current[index - 1].focus();
    }
  }

  return (
    <div>
      <h2 className="font-semibold text-3xl mt-5 mb-5">Validate OTP</h2>
      {inputArr.map((input, index) => (
        <input
          type="text"
          className="border rounded w-15 h-15 text-center m-2"
          key={index}
          value={inputArr[index]}
          ref={(input) => {refArr.current[index] = input;}}
          onChange={(e) => handleOnchange(e.target.value, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpComponent;
