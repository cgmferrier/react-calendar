import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { togglePanel } from 'store/actions/layout.action';
import { selectDay } from 'store/actions/reminder.action';
import './day.component.scss'

class Day extends React.Component<{ current: boolean, date: moment.Moment, dispatch: any }, {}> {
  displayReminders(): void {
    const { date } = this.props;
    this.props.dispatch(togglePanel(true));
    this.props.dispatch(selectDay(date.format('DD/MM/YYYY')));
  }

  render() {
    const className = this.props.current ? 'day day--current' : 'day';
    return (
      <div className={className} onClick={this.displayReminders.bind(this)}>
        <span className='day__number'>{this.props.date.format('DD')}</span>
      </div>
    );
  }
}

export default connect()(Day);
