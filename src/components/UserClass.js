import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/santoshsatyavarapu");
    const json = await data.json();

    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url,
      },
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @_sri_krishna_santosh_</h4>
      </div>
    );
  }
}

export default UserClass;
