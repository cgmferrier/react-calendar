import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import ReminderComponent from 'components/reminder/reminder.component';
import moment from 'moment';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { togglePanel } from 'store/actions/layout.action';
import { getRemindersForSelectedDay, getSelectedDay } from 'store/reducers';
import './reminder-panel.component.scss';

const Reminders = () => {
  const reminders = useSelector(getRemindersForSelectedDay);
  return (
    <div className='reminder-panel__list'>
      {
        reminders && reminders.length > 0
          ? reminders.map((reminder, index) => <ReminderComponent reminder={reminder} key={index}/>)
          : <p>No reminder on this day</p>
      }
    </div>
  )
}

const SelectedDay = () => {
  const fullDate = moment(useSelector(getSelectedDay), 'DD/MM/YYYY');
  const dayName = fullDate.format('dddd');
  return <div className='reminder-panel__day'>{dayName} {fullDate.format('LL')}</div>;
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
          <h3 className='reminder-panel__title'>Reminders</h3>
          <FontAwesomeIcon
            className='reminder-panel__icon'
            icon={[ 'fas', 'times' ]}
            onClick={this.closePanel.bind(this)}
          />
        </div>
        <div className='reminder-panel__wrapper'>
          <div className='reminder-panel__body'>
            <div className='reminder-panel__info'>
              <SelectedDay/>
              <div className='reminder-panel__info--light'>
                Add
                <FontAwesomeIcon
                  className='reminder-panel__icon'
                  icon={[ 'fas', 'plus' ]}
                  title='Add reminder'
                />
              </div>
            </div>
            <Reminders/>
          </div>
        </div>
      </section>
    );
  }
}

export default connect()(ReminderPanel);
