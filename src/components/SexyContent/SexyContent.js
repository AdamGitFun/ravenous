import React from 'react';
import './SexyContent.css';


const howSexy = ['Most sexy', 'medium sexy', 'least sexy'];

const level = Math.floor(Math.random() * 3);

class SexyContent extends React.Component {
  render() {
    return (
      <div className="sexy">
        <h1>This is How Sexy</h1>
        <h1>{howSexy[level]}</h1>
      </div>
    );
  }
};

export default SexyContent;
