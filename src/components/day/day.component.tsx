import React from 'react';
import { connect } from 'react-redux';
import { togglePanel } from 'store/actions/layout.action';
import './day.component.scss'

class Day extends React.Component<{ current: boolean; dayNumber: number, dispatch: any }, {}> {
  displayReminders(): void {
    this.props.dispatch(togglePanel(true));
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
