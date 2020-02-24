import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

const user = {
  name: "Uros",
  lastName: "Cirkovic"
  // avatar: "https://i.imgur.com/iFe8f8v.jpg"
};

const elementH2 = <h2> I am an H2 element !</h2>;

const formatName = userObj => {
  return `${userObj.name} ${userObj.lastName}`;
};

const displayAvatar = userObj => {
  if (userObj.avatar) {
    return <img src={userObj.avatar} />;
  } else {
    return <img src="https://i.imgur.com/h1iCSwY.png" />;
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hello {user.name}! </h1>
        <h3> React JSX expressions </h3>

        <img src={user.avatar} alt="" />
        <img src="https://i.imgur.com/iFe8f8v.jpg" alt="" />

        <p> 2 + 2 = {27 + 3333} </p>

        {elementH2}

        {formatName(user)}
        {displayAvatar(user)}
      </div>
    );
  }
}

export default App;
