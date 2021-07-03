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
      location.reload();
      e.stopPropagation();
    });
  },

  _displayPopup(popup, event, identifier, buyMethod) {
    popup.classList.remove('close');

    buyMethod.forEach((method) => {
      method.addEventListener('click', () => {
        this._openBuyMethod(identifier, method.ariaLabel);
      });
    });

    event.stopPropagation();
  },

  _closePopup(popup, event) {
    popup.classList.add('close');
    event.stopPropagation();
  },

  _openBuyMethod(identifier, buyMethod) {
    const text = 'Halo Bumbu Eyang, saya ingin pesan bumbu ';
    const encodedText = text.split(' ').join('%20');
    if (buyMethod === 'whatsapp') {
      window.open(`${CONFIG.BASE_WA_URL}${encodedText}${identifier}`, '_blank');
    }

    if (buyMethod === 'shopee') {
      window.open(`${CONFIG.BASE_SHOPEE_URL}${identifier}s`, '_blank');
    }
  },

};

export default PaymentPopupInitiator;
