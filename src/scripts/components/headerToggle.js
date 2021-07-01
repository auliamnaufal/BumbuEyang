/* eslint-disable no-tabs */
class HeaderToggle extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
			<header class="header__toggle">
				<a class="logo" href="#">Bumbu Eyang</a>

				<div class="menu" id="menu">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</div>
			</header>
		`;
  }
}

customElements.define('header-bar', HeaderToggle);
