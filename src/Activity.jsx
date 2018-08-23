import React, { Component } from 'react';
import './Activity.css';

export default class Activity extends Component{
  cssPercentage(){
    const p = Number(this.props.percentage);
    let color = 'p-green';
    
    if(p < 40){
      color = 'p-red';
    } else if( p < 60){
      color = 'p-orange';
    }

    return `small c100 p${this.props.percentage} ${color}`
  }

  render() {
    return (
      <div className="info-column col s3">
        <div className={this.cssPercentage()}>
          <span>{this.props.percentage}%</span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </div>
    );
  }
}