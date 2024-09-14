import { Component } from "react";

import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="">About</h1>

        <UserClass name={"Sri krishna santosh"} location={"Benguluru"} />
      </div>
    );
  }
}

export default About;
