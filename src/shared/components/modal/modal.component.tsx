import React from 'react';
import { ModalProvider } from 'shared/services/modal.service';

class Modal extends React.Component<{ inner: JSX.Element }> {

  render() {
    return (
      <ModalProvider>
        <div className='modal__wrapper'>
          <div className='modal__content'>{this.props.inner}</div>
        </div>
      </ModalProvider>
    );
  }
}

export default Modal;
