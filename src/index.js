import React from "react";
import ReactDOM from "react-dom/client";

const Component = () => {
  return <p>Component</p>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
