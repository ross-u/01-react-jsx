import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

const element = React.createElement;

// `createElement` syntax :
//	React.createElement(component, props, ...children)


class App extends React.Component {
  render() {
    return element('div', { className: 'App' }, [
      element('h1', null, 'Hello Ironhackers'),
      element('h3', null, 'React without JSX')
    ]);
  }



export default App;
