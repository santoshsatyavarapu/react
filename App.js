import React from "react";
import ReactDOM from "react-dom/client";

const HeadingCompoonent = () => {
  return <h1 className="heading">React rendered</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompoonent />);
