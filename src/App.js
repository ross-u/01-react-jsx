import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

const user = {
  firstName: "Uros",
  lastName: "Cirkovic",
  avatar: "https://i.imgur.com/iFe8f8v.jpg"
};

const elementH2 = <h2> Hi, {user.firstName} </h2>;

const formatName = userObj => {
  return `${userObj.firstName} ${userObj.lastName}`;
};

const displayAvatar = userObj => {
  if (user.avatarUrl) {
    return <img src={userObj.avatarUrl} />;
  } else {
    return <img src="https://i.imgur.com/h1iCSwY.png" />;
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hello {formatName(user)}! </h1>

        {elementH2}

        {displayAvatar(user)}
      </div>
    );
  }
}

export default App;
