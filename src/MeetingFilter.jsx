import React, { Component } from 'react';

export default class MeetingFilter extends Component {
  roomList(rooms){
    if(rooms) return rooms.map((r) => <option key={r}>{r}</option>);
  }

  render(){
    return (
      <div className="input-field col s12">
        <select>{this.roomList(this.props.rooms)}</select>
      </div>
    );
  }
}