import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Test1 = () => {
  return (
    <div className="background">
      <p>Test1</p>
      <Link to="/test2">Test 2</Link>
    </div>
  );
};

export default Test1;
