import DrawerInitiator from '../utils/drawerInitiator';
import PaymentPopupInitiator from '../utils/paymentPopupInitiator';

class App {
  constructor({
    button, drawer, content, buyButton, buyPopup,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._buyButton = buyButton;
    this._buyPopup = buyPopup;

    this._initialAppShell();
    this._initialPaymentPopup();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initialPaymentPopup() {
    PaymentPopupInitiator.init({
      buyButton: this._buyButton,
      popup: this._buyPopup,
    });
  }
}

export default App;
