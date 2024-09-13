import { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click to focus input</button>
      <input ref={inputRef} type="text" placeholder="...search" />
    </div>
  );
}

export default RefExample;
