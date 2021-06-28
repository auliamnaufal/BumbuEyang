/* eslint-disable no-tabs */
const PaymentPopupInitiator = {
  init({ buyButton, popup }) {
    buyButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        this._displayPopup(popup, e);
      });
    });

    popup.addEventListener('click', (e) => {
      this._closePopup(popup, e);
    });

    document.querySelector('#exitBtn').addEventListener('click', (e) => {
      this._closePopup(popup, e);
    });
  },

  _displayPopup(popup, event) {
    popup.classList.remove('close');
    event.stopPropagation();
  },

  _closePopup(popup, event) {
    popup.classList.add('close');
    event.stopPropagation();
  },

};

export default PaymentPopupInitiator;
