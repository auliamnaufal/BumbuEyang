import DrawerInitiator from '../utils/drawerInitiator';
import PaymentPopupInitiator from '../utils/paymentPopupInitiator';

class App {
  constructor({
    button, drawer, content, buyButton, buyPopup, exitBtn, links, buyMethod,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._buyButton = buyButton;
    this._buyPopup = buyPopup;
    this._exitBtn = exitBtn;
    this._links = links;
    this._buyMethod = buyMethod;

    this._initialAppShell();
    this._initialPaymentPopup();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      links: this._links,
    });
  }

  _initialPaymentPopup() {
    PaymentPopupInitiator.init({
      buyButton: this._buyButton,
      popup: this._buyPopup,
      exitBtn: this._exitBtn,
      buyMethod: this._buyMethod,
    });
  }
}

export default App;
