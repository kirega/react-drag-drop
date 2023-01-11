import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function handleDragStart(ev: any) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  const handleDragEnd = (ev: any) => {
    ev.preventDefault();
  };
  const handleDragEnterForTarget = (ev: any) => {
    ev.preventDefault();
  };
  const handleDragOverForTarget = (ev: any) => {
    ev.preventDefault();
  };
  const handleOnDrop = (ev: any) => {
    const id = ev.dataTransfer.getData("text/plain");
    const child = document.getElementById(id);
    const parent = document.getElementById(id)?.parentNode;
    if (parent === ev.target) {
      return false;
    } else {
      ev.target.appendChild(child);
    }
  };
  const items = [
    {
      id: crypto.randomUUID(),
      name: "Hello",
      desc: "World",
    },
    {  
      id: crypto.randomUUID(),
      name: "Out",
      desc: "In the outdoors",
    },
    {
      id: crypto.randomUUID(),
      name: "Mobile",
      desc: "technology",
    },
  ];
  return (
    <div className="columns">
      <div
        id="left"
        onDragEnter={handleDragEnterForTarget}
        onDragOver={handleDragOverForTarget}
        onDrop={handleOnDrop}
      >
        {items.map((item, key) => (
          <div
            id={item.id}
            key={key}
            className="child"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <p>{item.name}</p>
            <br/>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div
        id="right"
        onDragEnter={handleDragEnterForTarget}
        onDragOver={handleDragOverForTarget}
        onDrop={handleOnDrop}
      ></div>
    </div>
  );
}

export default App;
