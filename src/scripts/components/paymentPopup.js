/* eslint-disable no-tabs */
class PaymentPopup extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<div class="pembelian-popup close" id="popup">
				<div class="card" id="card">
					<img
						src="./public/logo/exit.svg"
						alt="exit button"
						class="img"
						id="exitBtn"
					/>
					<div class="container">
						<h3 class="header">Pilih Metode Pembelian</h3>
						<div class="logos">
							<img
								src="./public/logo/whatsapp.svg"
								alt="whatsapp logo"
								class="logo popup-logo"
								aria-label="whatsapp"
							/>
							<img
								src="./public/logo/tokopedia.svg"
								alt="tokopedia logo"
								class="logo popup-logo"
								aria-label="tokopedia"
							/>
							<img
								src="./public/logo/shopee.svg"
								alt="shopee logo"
								class="logo popup-logo"
								aria-label="shopee"
							/>
							<img src="./public/logo/house.svg" alt="house logo" class="logo" />
						</div>
						<p class="text">
							Butuh bantuan? klik <a id="pelajari" href="#/buying-procedure">disini</a> untuk
							informasi lebih lanjut
						</p>
					</div>
				</div>
			</div>
        `;
  }
}

customElements.define('payment-popup', PaymentPopup);
