import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });

    setTimeout(() => {
      console.log("clicked button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h3>{value}</h3>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
