import React, { Component } from 'react';
import './App.css';
import MeetingFilter from './MeetingFilter.jsx';
import MeetingList from './MeetingList.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.states = {
      meetings: [],
      rooms: [],
    };
  }

  render() {
    return (
      <div>
        <div>Header</div>
        <MeetingFilter rooms={this.states.rooms}/>
        <MeetingList meeting={this.states.meetings}/>
      </div>
    );
  }
}

export default App;
