import MomentUtils from '@date-io/moment';
import { Button } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import ColorPicker from 'components/color-picker/color-picker.component';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { ModalService } from 'shared/services/modal.service';
import './add-reminder.component.scss';

const AddReminderForm = () => {
  const [ selectedDate, setSelectedDate ] = React.useState(new Date());

  const modalService = ModalService();

  const closeModal = () => {
    modalService.closeModal();
  }

  const updateColor = (color: any) => {
    // assign color to  new reminder
    console.log(color);
  }

  const updateDate = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className='add-reminder'>
      <form className='form'>
        <div className='form-element'>
          <label htmlFor='reminder-name'>Name for reminder</label>
          <input id='reminder-name' type='text'/>
        </div>
        <ColorPicker updateColor={updateColor}/>
        <div className='form-element'>
          <label htmlFor='reminder-description'>Description</label>
          <textarea id='reminder-description'/>
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
        </div>
        <div className='form__actions'>
          <Button variant="outlined" color='primary' onClick={closeModal}>Cancel</Button>
          <Button variant="contained" color="primary">
            Create reminder
          </Button>
        </div>
      </form>
    </div>
  )
}

class AddReminder extends React.Component<{}, { date: moment.Moment }> {
  render() {
    return (
      <AddReminderForm/>
    )
  }
}

export default connect()(AddReminder);
