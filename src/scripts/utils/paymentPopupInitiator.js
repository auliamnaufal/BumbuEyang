/* eslint-disable no-tabs */
import CONFIG from '../globals/config';

const PaymentPopupInitiator = {
  init({
    buyButton, popup, exitBtn, buyMethod,
  }) {
    let btnIdentifier;

    buyButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        btnIdentifier = button.ariaLabel;
        this._displayPopup(popup, e, btnIdentifier, buyMethod);
      });
    });

    exitBtn.addEventListener('click', (e) => {
      this._closePopup(popup, e);
    });
  },

  _displayPopup(popup, event, identifier, buyMethod) {
    popup.classList.remove('close');
    console.log(identifier);

    buyMethod.forEach((method) => {
      method.addEventListener('click', () => {
        console.log(method.ariaLabel);
      });
    });

    event.stopPropagation();
  },

  _closePopup(popup, event) {
    popup.classList.add('close');
    event.stopPropagation();
  },

  _openBuyMethod(identifier, buyMethod) {
    buyMethod.forEach((method) => {
      switch (method.ariaLabel) {
        case 'whatsapp':
          window.open(CONFIG.BASE_WA_URL, '_blank');

          break;

        default:
          break;
      }
    });
  },

};

export default PaymentPopupInitiator;
