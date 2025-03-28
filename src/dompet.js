// CUSTOM ELEMENTS
class TransactionForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .form-group {
                    margin-bottom: 1em;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-20px);
                    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;
                }
                .form-group.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                label {
                    display: block;
                    margin-bottom: 0.5em;
                    font-weight: bold;
                }
                input {
                    width: 100%;
                    padding: 0.5em;
                    border: none;
                    border-bottom: 1px solid #ccc;
                    background-color: transparent;
                    color: white;
                    font-size: 1.2em;
                    font-weight: bold;
                }
                input:focus {
                    outline: none;
                    border-bottom: 1px solid #007bff;
                }
                .input-group {
                    display: flex;
                    align-items: center;
                }
                .input-group label {
                    margin-right: 10px;
                    font-size: 1.2em;
                    font-weight: bold;
                    color: white;
                }
                .input-group input {
                    flex: 1;
                }
                button {
                    width: 100%;
                    padding: 10px;
                    margin-top: 20px;
                    background-color: #3858e9;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.2em;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                button:hover {
                    background-color: #2a4ac0;
                }
                button:active {
                    background-color: #1c3a9f;
                }
                .notification {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #3858e9;
                    color: white;
                    border-radius: 10px;
                }
                .notification.hidden {
                    display: none;
                }
                .notification h3 {
                    margin-top: 0;
                }
                .notification ul {
                    padding-left: 20px;
                }
                .notification ul li {
                    margin-bottom: 10px;
                }
            </style>
            <form id="transactionForm" autocomplete="off">
                <div class="form-group visible">
                    <label>Kebutuhan</label>
                    <div class="input-group">
                        <label for="kebutuhan">Rp</label>
                        <input type="text" id="kebutuhan" name="kebutuhan" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Keinginan</label>
                    <div class="input-group">
                        <label for="keinginan">Rp</label>
                        <input type="text" id="keinginan" name="keinginan" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Uang Saku</label>
                    <div class="input-group">
                        <label for="uangSaku">Rp</label>
                        <input type="text" id="uangSaku" name="uangSaku" autocomplete="off" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Tabungan</label>
                    <div class="input-group">
                        <label for="tabungan">Rp</label>
                        <input type="text" id="tabungan" name="tabungan" autocomplete="off" required>
                    </div>
                </div>
                <button type="button" id="calculateButton" style="display: none;">Hitung</button>
            </form>
            <div id="preNotification" class="notification hidden">
                <h3 id="preNotificationTitle"></h3>
                <p id="preNotificationMessage"></p>
            </div>
            <div id="notification" class="notification hidden">
                <h3 id="notificationTitle"></h3>
                <p id="notificationMessage"></p>
                <h4>Kategori:</h4>
                <p id="kategori"></p>
                <h4>Tips:</h4>
                <ul id="tipsList"></ul>
            </div>
        `;

        // Fungsi untuk memformat angka dengan koma
        const formatNumberWithCommas = (number) => {
            return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };

        // Ambil semua input, kelompok form, dan tombol hitung
        const inputs = this.querySelectorAll('input');
        const formGroups = this.querySelectorAll('.form-group');
        const calculateButton = this.querySelector('#calculateButton');

        // Event listener untuk setiap input
        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                // Hapus karakter yang bukan angka
                input.value = input.value.replace(/[^0-9]/g, '');

                // Format nilai input dengan koma
                input.value = formatNumberWithCommas(input.value.replace(/,/g, ''));

                // Jika input tidak kosong dan bukan input terakhir
                if (input.value.trim() !== '' && index < inputs.length - 1) {
                    // Tampilkan input berikutnya
                    formGroups[index + 1].classList.add('visible');
                }

                // Jika input terakhir diisi, tampilkan tombol "Hitung"
                if (index === inputs.length - 1 && input.value.trim() !== '') {
                    calculateButton.style.display = 'block';
                }
            });
        });

        // Event listener untuk tombol hitung
        calculateButton.addEventListener('click', () => {
            console.log("Fungsi calculateResult() dipanggil!");

            const kebutuhan = parseInt(this.querySelector('#kebutuhan').value.replace(/,/g, '')) || 0;
            const keinginan = parseInt(this.querySelector('#keinginan').value.replace(/,/g, '')) || 0;
            const uangSaku = parseInt(this.querySelector('#uangSaku').value.replace(/,/g, '')) || 0;
            const tabungan = parseInt(this.querySelector('#tabungan').value.replace(/,/g, '')) || 0;

            // Validasi input
            if (isNaN(kebutuhan) || isNaN(keinginan) || isNaN(uangSaku) || isNaN(tabungan)) {
                alert('Harap masukkan angka yang valid untuk semua field!');
                return;
            }

            const totalPengeluaran = kebutuhan + keinginan;
            const totalPemasukan = uangSaku + tabungan;

            console.log("Total Pengeluaran:", totalPengeluaran);
            console.log("Total Pemasukan:", totalPemasukan);

            // Tampilkan notifikasi sebelum hasil perhitungan
            const preNotification = this.querySelector('#preNotification');
            const preNotificationTitle = this.querySelector('#preNotificationTitle');
            const preNotificationMessage = this.querySelector('#preNotificationMessage');

            preNotification.classList.remove('hidden');
            preNotification.classList.add('visible');

            if (totalPengeluaran > totalPemasukan) {
                preNotificationTitle.textContent = 'Kurang';
                preNotificationMessage.textContent = 'Opss! Saldo kamu tidak mumpuni, Total pengeluaran mu saat ini lebih besar dibanding pemasukan kamu. Yuk kurang kurangin maunya agar keuangan mu lebih stabil 🙂';
            } else if (totalPengeluaran === totalPemasukan) {
                preNotificationTitle.textContent = 'Gak Ada Sisa';
                preNotificationMessage.textContent = 'Widihh! Kamu bisa membeli barang yang kamu inginkan, tetapi alangkah baiknya jika kamu menyisihkan sebagian dana untuk keadaan darurat';
            } else {
                preNotificationTitle.textContent = 'Lebih';
                preNotificationMessage.textContent = 'Luar biasa!! Kamu masih punya sisa dana setelah memenuhi kebutuhan dan keinginan. Manfaatkanlah kelebihan ini untuk masa depan!';
            }

            // Tampilkan notifikasi dan tips
            const notification = this.querySelector('#notification');
            const notificationTitle = this.querySelector('#notificationTitle');
            const notificationMessage = this.querySelector('#notificationMessage');
            const kategori = this.querySelector('#kategori');
            const tipsList = this.querySelector('#tipsList');

            notification.classList.remove('hidden');
            notification.classList.add('visible');

            // Tampilkan total pemasukan dan pengeluaran di dalam notifikasi
            notificationTitle.textContent = 'Hasil Perhitungan';
            notificationMessage.innerHTML = `
                Total Pengeluaran: Rp ${formatNumberWithCommas(totalPengeluaran.toString())}<br>
                Total Pemasukan: Rp ${formatNumberWithCommas(totalPemasukan.toString())}
            `;

            // Tentukan kategori berdasarkan perbandingan
            if (totalPengeluaran > totalPemasukan) {
                kategori.textContent = 'Kurang';
                tipsList.innerHTML = `
                    <li>Kurangi atau tunda pengeluaran untuk keinginan, prioritaskan kebutuhan utama dulu dan buat daftar belanja yang memisahkan daftar kebutuhan dengan daftar keinginan</li>
                    <li>Cobalah cari pemasukan tambahan seperti kerja lepas atau usaha kecil kecilan yang sesuai dengan minatmu</li>
                    <li>Menabung lah dengan bijak, jika pengeluaran untuk keinginan ditunda, langsung masukkan dana tersebut ke tabungan.</li>
                `;
            } else if (totalPengeluaran === totalPemasukan) {
                kategori.textContent = 'Gak Ada Sisa';
                tipsList.innerHTML = `
                    <li>Sisihkan sebagian dari sisa dana ke tabungan darurat. Ini akan membantu kamu menghadapi situasi tak terduga di masa depan.</li>
                    <li>Meskipun saat ini keuangan stabil, pertimbangkan untuk tetap membatasi pengeluaran yang tidak perlu agar tetap berada di jalur yang aman.</li>
                `;
            } else {
                kategori.textContent = 'Lebih';
                tipsList.innerHTML = `
                    <li>Simpan dana untuk masa depan, Alokasikan sebagian sisa uangmu ke tabungan agar siap menghadapi kebutuhan tak terduga di masa depan.</li>
                    <li>Pertimbangkan investasi, Gunakan sisa dana untuk berinvestasi dalam instrumen yang sesuai, seperti deposito, saham, reksa dana, atau aset digital. Lakukan riset terlebih dahulu untuk meminimalkan risiko.</li>
                    <li>Gunakan sisa dana untuk mendekati target finansialmu, seperti membeli barang impian atau memulai usaha kecil.</li>
                `;
            }
        });
    }
}
customElements.define('transaction-form', TransactionForm);
