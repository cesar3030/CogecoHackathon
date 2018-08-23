import React, { Component } from 'react';

export default class MeetingList extends Component {
  
  listItems() {
    if(this.props.meetings) return this.props.meetings.map((m) => <li key={m.id}>{m.eventOwner}</li>);
  }
  render(){
    return <ul>{this.listItems()}</ul>;
  }
}