import React, { Component } from 'react';
import './App.css';
import MeetingFilter from './MeetingFilter.jsx';
import MeetingList from './MeetingList.jsx';
import * as myData from './data.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      meetings: [],
      selectedRoom: 'all',
      rooms: null,
    };
  }

  componentDidMount(){
    let meetings = this.formatData(myData);
    this.setState({
      meetings: meetings,
      rooms: this.getRooms(meetings),
    });
  }

  meetingsToDisplay(){
    const selectedRoom = this.state.selectedRoom;
    return this.state.meetings.filter((r) => selectedRoom === 'all' || r.roomName === selectedRoom);
  }

  formatData(data){
    data.forEach((m) => {
      m.roomName = m.roomName.split("@")[0].split(".")[1];
    });
    return data;
  }

  getRooms(meetings){
    let rooms = [];
    meetings.forEach(element => {
      if(!rooms.includes(element.roomName)) rooms.push(element.roomName);
    });
    return rooms;
  }

  roomFilter = (roomName) => {
    this.setState({selectedRoom: roomName});
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue lighten-1">
            <a href="#" className="brand-logo center">Cogeco Meeting rooms</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down"></ul>
          </div>
        </nav>
        <div className="container">
          <MeetingFilter onChange={this.roomFilter} rooms={this.state.rooms}/>
          <MeetingList meetings={this.meetingsToDisplay()}/>
        </div>
      </div>
    );
  }
}

export default App;
