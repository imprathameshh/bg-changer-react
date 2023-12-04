import React, { useState } from "react";

const Bg_Change = () => {
  const [color, setColor] = useState("grey");
  return (
    <div className="bg-wrap" style={{ background: color }}>
      <div className="button-wrap">
        <button onClick={() => setColor("red")} style={{ background: "red" }}>
          Red
        </button>
        <button
          onClick={() => setColor("orange")}
          style={{ background: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => setColor("yellow")}
          style={{ background: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("green")}
          style={{ background: "green" }}
        >
          Green
        </button>
        <button onClick={() => setColor("blue")} style={{ background: "blue" }}>
          Blue
        </button>
        <button
          onClick={() => setColor("indigo")}
          style={{ background: "indigo" }}
        >
          Indigo
        </button>
        <button
          onClick={() => setColor("violet")}
          style={{ background: "violet" }}
        >
          Violet
        </button>
      </div>
    </div>
  );
};

export default Bg_Change;
