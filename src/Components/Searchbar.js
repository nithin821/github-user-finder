import React from "react";
import { useState } from "react";

function Searchbar({ onSearch }) {
  const [input, setInput] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form className="FORM" onSubmit={handlesubmit}>
      <input className="INPUT"
        type="text"
        placeholder="Enter GitHub Username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="BUTTON" type="submit">Search</button>
    </form>
  );
}
export default Searchbar;
