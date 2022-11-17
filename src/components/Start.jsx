import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
      <div className="main_start">
        <div className="start_header">
          <h1> WHAT DO YOU KNOW </h1>
        </div>
        <div className="start">
          <input
           className="startInput"
           placeholder="Please! Enter your Name"
           ref={inputRef}
          />
          <button className="startButton" onClick={handleClick}>
            Start
          </button>
        </div>
      </div>
    
  );
}
