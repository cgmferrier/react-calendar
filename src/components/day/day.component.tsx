import React from 'react';
import './day.component.scss'

class Day extends React.Component<{ current: boolean; dayNumber: number }, {}> {
  render() {
    const className = this.props.current ? 'day day--current' : 'day';
    return (
      <div className={className}>
        <span className='day__number'>{this.props.dayNumber}</span>
      </div>
    );
  }
}

export default Day;