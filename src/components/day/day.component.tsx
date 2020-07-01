import React from 'react';
import './day.component.scss'

class Day extends React.Component<{ dayNumber: number}, {}> {
  render() {
    return (
      <div className='day'>{this.props.dayNumber}</div>
    );
  }
}

export default Day;