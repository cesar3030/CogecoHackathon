import React, { Component } from 'react';
import './App.css';
import MeetingFilter from './MeetingFilter.jsx';
import MeetingList from './MeetingList.jsx';
import * as myData from './data.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      meetings: null,
      rooms: null,
    };
  }

  componentDidMount(){
    this.setState({
      meetings: myData,
      rooms: this.getRooms(myData),
    });
  }

  getRooms(meetings){
    let rooms = [];
    meetings.forEach(element => {
      if(!rooms.includes(element.roomName)) rooms.push(element.roomName);
    });
    return rooms;
  }

  render() {
    return (
      <div>
        <div>Header</div>
        <MeetingFilter rooms={this.state.rooms}/>
        <MeetingList meetings={this.state.meetings}/>
      </div>
    );
  }
}

export default App;
