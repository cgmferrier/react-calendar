import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ReminderComponent from 'components/reminder/reminder.component';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { togglePanel } from 'store/actions/layout.action';
import { getRemindersForSelectedDay } from 'store/reducers';
import './reminder-panel.component.scss';

export const Reminders = () => {
  const reminders = useSelector(getRemindersForSelectedDay);
  return (
    <div className='reminder-panel__body'>
      {reminders.map((reminder, index) => <ReminderComponent reminder={reminder} key={index}/>)}
    </div>
  )
}

class ReminderPanel extends React.Component<{ open: boolean, dispatch: any }, {}> {

  closePanel(): void {
    this.props.dispatch(togglePanel(false));
  }

  render() {
    return (
      <section className={
        classNames('reminder-panel', {
          'reminder-panel--open': this.props.open
        })
      }>
        <div className='reminder-panel__header'>
          <div>Reminders</div>
          <FontAwesomeIcon
            className='reminder-panel__icon'
            icon={[ 'fas', 'times' ]}
            onClick={this.closePanel.bind(this)}
          />
        </div>
        <Reminders/>
      </section>
    );
  }
}

export default connect()(ReminderPanel);
