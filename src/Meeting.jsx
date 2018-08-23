import React, { Component } from 'react';
import Activity from './Activity.jsx';
import './Meeting.css';

export default class Meeting extends Component{
  getDate(){
    return this.props.info.startDateLabel.split(" ")[0].split("/").reverse().join("-")
  }

  getHours(){
    const start = this.props.info.startDateLabel.split(" ")[1].substr(0, 5);
    const end = this.props.info.endDateLabel.split(" ")[1].substr(0, 5);
    return `${start} - ${end}`;
  }
  
  render() {
    return(
      <li className="collection-item avatar">
        <div className="row">
          <ul className="info-column col s5">
            <li><i className="material-icons">account_circle</i>{this.props.info.eventOwner}</li>
            <li><i className="material-icons">add_location</i>{this.props.info.roomName}</li>
          </ul>
          <ul className="info-column col s4">
            <li><i className="material-icons">date_range</i>{this.getDate()}</li>
            <li><i className="material-icons">alarm</i>{this.getHours()}</li>
          </ul>
          <Activity percentage={this.props.info.percentageActivity}/>
        </div>
      </li>
    );
  }
}