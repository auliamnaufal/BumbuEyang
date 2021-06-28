/* eslint-disable no-tabs */
const PaymentPopupInitiator = {
  init({ buyButton, popup, exitBtn }) {
    buyButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        this._displayPopup(popup, e);
      });
    });

    exitBtn.addEventListener('click', (e) => {
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
