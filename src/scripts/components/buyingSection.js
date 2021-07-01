/* eslint-disable no-tabs */
class BuyingSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<section class="pembelian" id="pembelian">
				<div class="container">
					<h2 class="header">Cara Pembelian</h2>
					<p class="text">
						Pembelian produk Bumbu Eyang dapat dilakukan melalui Whatsapp,
						Tokopedia, Shopee, atau beli langsung.
					</p>
					<div class="logos">
						<img
							src="./public/logo/whatsapp.svg"
							alt="whatsapp logo"
							class="logo"
						/>
						<img
							src="./public/logo/tokopedia.svg"
							alt="tokopedia logo"
							class="logo"
						/>
						<img
							src="./public/logo/shopee.svg"
							alt="shopee logo"
							class="logo"
						/>
						<img src="./public/logo/house.svg" alt="house logo" class="logo" />
					</div>
					<button class="btn-pembelian">
						<a href="#">PELAJARI LEBIH LANJUT</a>
					</button>
				</div>
			</section>

		`;
  }
}

customElements.define('buying-section', BuyingSection);
