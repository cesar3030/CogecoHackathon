import React, { Component } from 'react';

export default class Meeting extends Component{
  render() {
    return(
      <li className="collection-item avatar">
        <div className="circle" style={{"margin-top": "1.3%"}}>
          <img src="/cogeco.png" alt="" className="responsive-img" style={{transform: "scale(0.92)"}}/>
        </div>
        <span className="title">Title</span>
        <p>{this.props.info.eventOwner} <br/>
          Second Line
        </p>
        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
      </li>
    );
  }
}