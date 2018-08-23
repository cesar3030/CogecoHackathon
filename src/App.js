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
        <nav>
          <div className="nav-wrapper blue lighten-1">
            <a href="#" className="brand-logo center">Cogeco Meeting rooms</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <MeetingFilter rooms={this.state.rooms}/>
          <MeetingList meetings={this.state.meetings}/>
        </div>
      </div>
    );
  }
}

export default App;
