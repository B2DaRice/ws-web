import React, { Component } from 'react';
import './App.css';
import Router from "./cmps/Router/Router";
import ReactFontFace from 'react-font-face';
import Unik from './unik2.ttf';

const styleConfig = {
  fontFamily: 'Advent Pro'
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styleConfig}>
        <Router/>
      </div>
    );
  }
}

let fontConfig = {
  file: [
    {
      fontFamily: 'Unik',
      fontStyle:  'normal',
      fontWeight: 400,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215',
      file: "unik2.ttf",
      fontType: 'truetype',
      fileLocal: 'Unik Regular'
    }
  ]
};

export default ReactFontFace(App, fontConfig);
