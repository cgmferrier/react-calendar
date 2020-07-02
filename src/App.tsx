import React from 'react';
import './App.scss';
import Calendar from 'components/calendar/calendar.component';
import { Provider } from 'react-redux';
import store from 'store/index';

function App() {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
}

export default App;
