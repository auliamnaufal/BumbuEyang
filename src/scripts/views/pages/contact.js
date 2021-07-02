/* eslint-disable no-tabs */
import CONFIG from '../../globals/config';

const Contact = {
  async render() {
    const contactText = 'Halo Bumbu Eyang, saya ingin pesan/menanyakan informasi seputar Bumbu Eyang nih!';
    const encodedContactText = contactText.split(' ').join('%20');

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
            <button class="btn-card" id="gulai"><a href="${CONFIG.BASE_WA_URL}${encodedContactText}" target="_blank" rel="noopener">Contact</a></button>
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
