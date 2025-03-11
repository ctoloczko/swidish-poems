import { useState } from "react";

export default function UserForm() {
  const [inputValue, setInputValue] = useState(""); // State for input value

  function handleChange(event) {
    setInputValue(event.target.value); // Update state when user types
  }

  return (
    <div>
      <p>Fyll i några ord och låt AI skapa en vacker dikt åt dig</p>
      <label>
        Text input:
        <input
          type="text"
          name="myInput"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <p>Du skrev: {inputValue}</p> {/* Display user input */}
    </div>
  );
}
