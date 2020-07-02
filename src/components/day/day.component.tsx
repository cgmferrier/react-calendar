import React from 'react';
import { connect } from 'react-redux';
import { addReminder } from 'store/actions/reminder.action';
import './day.component.scss'

class Day extends React.Component<{ current: boolean; dayNumber: number, dispatch: any }, {}> {
  displayReminders(): void {
    console.log('click');
    this.props.dispatch(addReminder({ color: 'red', comment: 'tt', date: new Date(), time: new Date() }));
  }

  render() {
    const className = this.props.current ? 'day day--current' : 'day';
    return (
      <div className={className} onClick={this.displayReminders.bind(this)}>
        <span className='day__number'>{this.props.dayNumber}</span>
      </div>
    );
  }
}

export default connect()(Day);