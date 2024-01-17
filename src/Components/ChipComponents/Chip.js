// Chip.js
import React, { useState } from "react";
import "./Chip.css";
import usersData from "../../Person data/UserData";

const Chip = () => {
  const [input, setInput] = useState("");
  const [person, setPerson] = useState([]);
  const [select, setSelect] = useState(usersData);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleItemClick = (item) => {
    setPerson([...person, item]);
    setSelect(select.filter((i) => i !== item));
    setInput("");
  };

  const handleChipRemove = (chip) => {
    setPerson(person.filter((c) => c !== chip));
    setSelect([...select, chip]);
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Pick Users</h1>
        <div className="display">
          {person.map((chip, index) => (
            <div key={index} className="display-chip">
              <span className="chip-avatar">
                <img src={chip.avatar} alt={chip.name} />
              </span>
              <span className="chip-name">{chip.name}</span>
              <span
                className="chip-remove"
                onClick={() => handleChipRemove(chip)}
              >
                X
              </span>
            </div>
          ))}
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type to search"
            className="input"
          />
        </div>
        {input && (
          <div className="list-item">
            {select
              .filter((item) =>
                item.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="item"
                  onClick={() => handleItemClick(item)}
                >
                  {item.name}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chip;
