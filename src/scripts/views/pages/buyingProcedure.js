/* eslint-disable no-tabs */
const BuyingProcedure = {
  async render() {
    return `
			<section class="howtobuy" id="home">
				<div class="cta">
					<h1 class="heading">Cara Pembelian</h1>
			</section>
			<buying-section></buying-section>
			<div class="strip"></div>

			<section class="procedure">
				<div class="procedure__item">
					<h2>Whatsapp</h2>
					<ol>
						<li>Pilih Whatsapp pada tampilan Metode Pembelian.</li>
						<li>Anda akan langsung dialihkan ke aplikasi Whatsapp untuk mengirimkan pesan ke akun Bumbu Eyang. *Aplikasi Whatsapp hanya akan terbuka di handphone, jika anda menggunakan perangkat laptop/PC maka anda harus menyalin nomor telefon yang tertera di website untuk menghubungi Bumbu Eyang</li>
						<li>Ketikan produk yang ingin dipesan beserta kuantitasnya.</li>
						<li>Kirimkan pesan tersebut ke Whatsapp Bumbu Eyang.</li>
						<li>Tunggu hingga pemilik akun membalas pesan anda untuk konfirmasi pesanan.</li>
						<li>Jika sudah terkonfirmasi, ketikan alamat anda serta cara pembayaran (transfer bank).</li>
						<li>Produk akan dikemas dan dikirim jika uang telah ditransfer.</li>
					</ol>
				</div>

				<div class="procedure__item">
					<h2>Shopee</h2>
					<ol>
						<li>Pilih Shopee pada tampilan Metode Pembelian.</li>
						<li>Anda akan langsung dialihkan ke halaman toko Bumbu Eyang pada aplikasi/website Shopee.</li>
						<li>Jika sudah yakin maka anda bisa langsung menekan tombol Beli Sekarang.</li>
						<li>Akan muncul tampilan jumlah barang yang akan dibeli, masukan jumlah sesuai keperluan anda, lalu tekan tombol Beli Sekarang.</li>
						<li>Setelah itu, anda akan dialihkan ke tampilan keranjang. Centang barang yang akan dibeli lalu tekan tombol Checkout.</li>
						<li>Kemudian anda akan diperlihatkan tampilan detil pemesanan. Pilih alamat tujuan, kurir pengiriman, serta metode pembayaran sesuai kebutuhan anda.</li>
						<li>Jika semua sudah sesuai, maka anda bisa menekan tombol Buat Pesanan.</li>
						<li>Terakhir, anda akan diberikan petunjuk bagaimana melakukan pembayaran agar sistem Shopee dapat mendeteksi transaksi secara otomatis.                </li>
						<li>Produk akan dikemas dan dikirim ketika transaksi telah dikonfirmasi oleh sistem Shopee.</li>
					</ol>
				</div>
			</section>
		`;
  },

  async afterRender() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },

};

export default BuyingProcedure;
