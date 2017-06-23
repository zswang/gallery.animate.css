import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} hideProgressBar={true} />
        <Gallery />
      </div>
    );
  }
}

export default App;
