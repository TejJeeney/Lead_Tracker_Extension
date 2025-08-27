import React from "react";

const Time = () => {
  return (
    <div>
      <h1>Current Time</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;