import React from 'react';
import { connect } from 'react-redux';
import { Reminder } from 'shared/interfaces';

class ReminderComponent extends React.Component<{ reminder: Reminder }, {}> {
  render() {
    return (
      <article className='reminder'>
        <div className='reminder__description'>{this.props.reminder.comment}</div>
        <div className='reminder__time'>
          <div>{this.props.reminder.date}</div>
          <div>{this.props.reminder.time}</div>
        </div>
      </article>
    )
  }
}

export default connect()(ReminderComponent);
