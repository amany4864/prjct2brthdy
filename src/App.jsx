import React from "react";
import "./App.css";
import pic1 from "../public/image/pic1.png"; // Adjust the path according to your file structure

function App() {
  const h1Styles = {
    backgroundImage: `url(${pic1})`,
    backgroundSize: "40%",
    backgroundPosition: "50% 50%",
    WebkitBackgroundClip: "text",
    color: "hsla(0, 0%, 0%, 0.08)",
    animation: "zoomout 10s ease 500ms forwards",
    fontSize: "10vw",
  };

  return (
    <>
      <h1 style={h1Styles}>Anvisha</h1>
    </>
  );
}

export default App;
