import React, { Component } from 'react';

export default class MeetingFilter extends Component {
  roomList(rooms){
    if(rooms) return rooms.map((r) => <option key={r} value={r}>{r}</option>);
  }

  change = (event) => {
    // console.log(this)
   this.props.onChange(event.target.value);
  }

  render(){
    return (
      <div className="row">
        <div className="input-field col s4">
          <select onChange={this.change}>
            <option value='all'>All</option>
            {this.roomList(this.props.rooms)}
          </select>
        </div>
      </div>
    );
  }
}