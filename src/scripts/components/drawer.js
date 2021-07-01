/* eslint-disable no-tabs */
class DrawerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<div class="navbar" id="navbar">
				<div class="container">
					<a class="logo" href="#">Bumbu Eyang</a>

					<nav>
						<ul class="primary-nav">
							<li><a href="#product">Produk</a></li>
							<li><a href="#recipe">Resep</a></li>
							<li><a href="#pembelian">Cara Pembelian</a></li>
							<li><a href="#/contact">Hubungi Kami</a></li>
						</ul>
					</nav>
				</div>
			</div>
		`;
  }
}

customElements.define('drawer-bar', DrawerBar);
