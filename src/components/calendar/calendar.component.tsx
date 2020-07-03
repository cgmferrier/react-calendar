import Day from 'components/day/day.component';
import React from 'react';
import { useSelector } from 'react-redux';
import { isPanelOpen } from 'store/reducers';
import './calendar.component.scss'

export const PanelOpen = () => {
  const panelOpen = useSelector(isPanelOpen);
  return (<div>{`${panelOpen}`}</div>);
}

class Calendar extends React.Component {
  state: { currentDay: number; currentMonth: string, totalDays: number };

  constructor(props: any) {
    super(props);
    const currentDate = new Date();
    this.state = {
      currentDay: currentDate.getDate(),
      currentMonth: currentDate.toLocaleString('default', { month: 'long' }),
      totalDays: new Date(currentDate.getMonth(), currentDate.getFullYear(), 0).getDate(),
    };
  }

  listOfDays = () => {
    const listOfDays = [];

    for (let day = 1; day <= this.state.totalDays + 1; day++) {
      listOfDays.push(<Day current={day === this.state.currentDay} dayNumber={day} key={day} />)
    }

    return listOfDays;
  }

  render() {
    return (
      <section className='calendar'>
        <PanelOpen/>
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
