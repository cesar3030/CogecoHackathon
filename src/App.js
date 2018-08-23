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
    let intervalId = setInterval(this.fetchData, 30000)
    this.setState({ intervalId: intervalId })
  }
  
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
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

  fetchData(){
    // $.ajax({
    //   method: 'GET',
    //   url:'./data.json',
    //   success: (data) => {
    //     let meetings = this.formatData(JSON.parse(data));
    //     this.setState({
    //       meetings: meetings,
    //       rooms: this.getRooms(meetings),
    //     });
    //   }
    // });
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          let meetings = this.formatData(result);
          this.setState({
            meetings: meetings,
            rooms: this.getRooms(meetings),
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert(error);
        }
      )
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue lighten-1">
            <div href="#" className="brand-logo center">Cogeco Meeting rooms</div>
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
