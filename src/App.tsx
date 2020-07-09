import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Calendar from 'components/calendar/calendar.component';
import ReminderPanel from 'components/reminder-panel/reminder-panel.component';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from 'store/index';
import { isPanelOpen } from 'store/reducers';
import './App.scss';

library.add(fab, faPlus, faTimes)

export const Panel = () => {
  const panelOpen = useSelector(isPanelOpen);
  return (<ReminderPanel open={panelOpen}/>);
}

function App() {
  return (
    <Provider store={store}>
      <Calendar/>
      <Panel/>
      <div id='modal'></div>
    </Provider>
  );
}

export default App;
