import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @_sri_krishna_santosh_</h4>
      <h5>Count: {count}</h5>
      <h5>Count2: {count2}</h5>
    </div>
  );
};

export default User;
