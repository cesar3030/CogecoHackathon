import React, { Component } from 'react';
import Meeting from './Meeting.jsx';

export default class MeetingList extends Component {
  listItems() {
    if(this.props.meetings) return this.props.meetings.map((m) => <Meeting key={m.id} info={m}/>);
  }

  render(){
    return (
      <div className="row">
        <div className="col s12">
          <ul className="collection">{this.listItems()}</ul>
        </div>
      </div>
    );
  }
}