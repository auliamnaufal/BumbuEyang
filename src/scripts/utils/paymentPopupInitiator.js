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
    const text = 'text otomatis dari website bumbu eyang, anda membeli bumbu ';
    const encodedText = text.split(' ').join('%20');

    switch (buyMethod) {
      case 'whatsapp':
        window.open(`${CONFIG.BASE_WA_URL}${encodedText}${identifier}`, '_blank');
        break;

      case 'tokopedia':
        window.open('https://www.tokopedia.com/bumbueyang', '_blank');
        break;

      case 'shopee':
        window.open('https://shopee.co.id/shop/290263518/search?originalCategoryId=100808&page=0', '_blank');
        break;

      default:
        break;
    }
  },

};

export default PaymentPopupInitiator;
