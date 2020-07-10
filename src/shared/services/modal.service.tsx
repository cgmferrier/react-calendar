import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'shared/components/modal/modal.component';
import store from 'store';

const { createContext, useContext } = React;

const ModalContext = createContext(null as any);

export const ModalProvider = (props: any) => {
  const value = {
    closeModal: props.closeModal || closeModal,
    openModal: props.openModal || openModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
}

export const ModalService = () => {
  return useContext(ModalContext);
}

const closeModal = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('modal') as Element);
}

const openModal = (component: JSX.Element) => {
  ReactDOM.render(
    <Provider store={store}>
      <Modal inner={component}/>
    </Provider>, document.getElementById('modal'));
}
