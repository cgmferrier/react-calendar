import Calendar from 'components/calendar/calendar.component';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Calendar/>
    </Provider>
  );
}

export default App;
