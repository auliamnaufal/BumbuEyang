/* eslint-disable no-tabs */
const Contact = {
  async render() {
    return `
			<div class="contact-header">
				<h1 class="heading">Hubungi Kami</h1>
			</div>

      <div class="contact-body">
        <div class="container">
          <div class="contact-cara _1">
            <img src="./public/logo/call.svg" alt="telephone logo" />
            <p>
              Punya pertanyaan seputar produk Bumbu Eyang? Hubungi kami melalui
              nomor dibawah ini!
            </p>
            <h2>+62XXXXXXXXXX</h2>
          </div>

          <div class="contact-cara _2">
            <img src="./public/logo/message.svg" alt="telephone logo" />
            <p>
              Tidak memiliki waktu untuk telfon? Anda dapat menghubungi kami via
              chat Whatsapp disini!
            </p>
            <button class="btn-card" id="gulai">Contact</button>
          </div>
        </div>
      </div>
		`;
  },

  async afterRender() {
    document.querySelector('.contact-body');
  },

};

export default Contact;
