import Day from 'components/day/day.component';
import moment from 'moment';
import React from 'react';
import './calendar.component.scss';

class Calendar extends React.Component {
  state: { currentDate: Date, currentDay: number; currentMonth: string, totalDays: number };

  constructor(props: any) {
    super(props);
    const currentDate = new Date();
    this.state = {
      currentDate,
      currentDay: currentDate.getDate(),
      currentMonth: currentDate.toLocaleString('default', { month: 'long' }),
      totalDays: new Date(currentDate.getMonth(), currentDate.getFullYear(), 0).getDate(),
    };
  }

  listOfDays = () => {
    const listOfDays = [];
    for (let day = 1; day <= this.state.totalDays + 1; day++) {
      listOfDays.push(
        <Day
          current={day === this.state.currentDay}
          date={moment(`${day}/${this.state.currentDate.getMonth() + 1}/${this.state.currentDate.getFullYear()}`, 'DD/MM/YYYY')}
          key={day}
        />
      )
    }

    return listOfDays;
  }

  render() {
    return (
      <section className='calendar'>
        <header className='calendar__header'>
          <h2 className='calendar__title'>{this.state.currentMonth}</h2>
          <div className='calendar__navigation'>Navigation arrows here</div>
        </header>
        <div className='calendar__grid'>{ this.listOfDays() }</div>
      </section>
    )
  }
}

export default Calendar;
