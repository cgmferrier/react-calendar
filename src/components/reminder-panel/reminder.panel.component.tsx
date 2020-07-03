import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { togglePanel } from 'store/actions/layout.action';
import './reminder-panel.component.scss';

class ReminderPanel extends React.Component<{ open: boolean, dispatch: any }> {

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
          <div>Panel Body</div>
          <FontAwesomeIcon
            className='reminder-panel__icon'
            icon={[ 'far', 'times-circle' ]}
            onClick={this.closePanel.bind(this)}
          />
        </div>
      </section>
    );
  }
}

export default connect()(ReminderPanel);
