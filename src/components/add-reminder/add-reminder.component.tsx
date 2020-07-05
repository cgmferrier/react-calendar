import MomentUtils from '@date-io/moment';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import React from 'react';
import { connect, useSelector } from 'react-redux';
import { getSelectedDay } from 'store/reducers';
import './add-reminder.component.scss';

const DatePicker = () => {
  let currentDate = moment(useSelector(getSelectedDay), 'DD/MM/yyyy');
  const [ selectedDate, setSelectedDate ] = React.useState(currentDate);
  const updateDate = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className='modal__wrapper'>
      <div className='add-reminder'>
        <div className='form-element'>
          <label htmlFor='reminder-name'>Name for reminder</label>
          <input id='reminder-name' type='text'/>
        </div>
        <div className='add-reminder__pickers'>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
              className='add-reminder__picker'
              disableToolbar
              format='DD/MM/yyyy'
              id='reminder-date-picker'
              label='Choose a date'
              margin='normal'
              onChange={updateDate}
              value={selectedDate}
              variant='inline'
            />
            <KeyboardTimePicker
              ampm={false}
              className='add-reminder__picker'
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={updateDate}
              variant='inline'
            />
          </MuiPickersUtilsProvider>
          <div className='form-element'>
            <label htmlFor='reminder-color-picker'>Choose a color</label>
            <select id='reminder-color-picker'>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
            </select>
          </div>
        </div>
        <div className='form-element'>
          <label htmlFor='reminder-description'>Description</label>
          <textarea id='reminder-description'/>
        </div>
      </div>
    </div>
  )
}

class AddReminder extends React.Component<{}, { date: moment.Moment }> {
  render() {
    return (
      <DatePicker/>
    )
  }
}

export default connect()(AddReminder);
