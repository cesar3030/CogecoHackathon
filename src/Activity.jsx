import { Component } from 'react';
import './Activity.css';

export default class Activity extends Component{
  cssPercentage(){
    return `c100 p${this.props.percentage}`
  }
  
  render() {
    return (
      <div className={this.cssPercentage()}>
        <span>{this.props.percentage}%</span>
        <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
        </div>
      </div>
    );
  }
}