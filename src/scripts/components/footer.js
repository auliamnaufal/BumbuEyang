class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
          <h2>Bumbu Eyang</h2>
        </footer>
        `;
  }
}

customElements.define('footer-bar', FooterBar);
