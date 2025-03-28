// const amountInput = document.getElementById('FormAmount');
// const noteInput = document.getElementById('FormNote');
// const dateInput = document.getElementById('FormDate');
// const btnPemasukan = document.getElementById('btnPemasukan');
// const btnPengeluaran = document.getElementById('btnPengeluaran');
// const noteLabel = document.querySelector("label[for='FormNote']");
// const dateLabel = document.querySelector("label[for='FormDate']");

// // Menyembunyikan semua input dan label kecuali yang pertama
// noteInput.style.display = 'none';
// dateInput.style.display = 'none';
// noteLabel.style.display = 'none';
// dateLabel.style.display = 'none';
// btnPemasukan.style.display = 'none';
// btnPengeluaran.style.display = 'none';

// // Fungsi untuk menampilkan elemen dengan animasi
// function showElement(element) {
//     element.style.display = 'block';
//     element.style.opacity = 0;
//     setTimeout(() => {
//         element.style.transition = 'opacity 0.3s ease-in-out';
//         element.style.opacity = 1;
//     }, 10);
// }

// // Format angka saat diketik
// amountInput.addEventListener('input', function() {
//     let rawValue = amountInput.value.replace(/\D/g, '');
//     if (rawValue.length > 15) { 
//         rawValue = rawValue.slice(0, 15);
//     }

//     let formattedValue = new Intl.NumberFormat('id-ID').format(rawValue);
//     amountInput.value = formattedValue;

//     if (rawValue !== '') {
//         showElement(noteLabel);
//         showElement(noteInput);
//         if (noteInput.value.trim() !== '') {
//             showElement(dateLabel);
//             showElement(dateInput);
//             if (dateInput.value.trim() !== '') {
//                 showElement(btnPemasukan);
//                 showElement(btnPengeluaran);
//             }
//         }
//     } else {
//         noteInput.style.display = 'none';
//         noteLabel.style.display = 'none';
//         dateInput.style.display = 'none';
//         dateLabel.style.display = 'none';
//         btnPemasukan.style.display = 'none';
//         btnPengeluaran.style.display = 'none';
//     }
// });

// noteInput.addEventListener('input', function() {
//     if (noteInput.value.trim() !== '' && amountInput.value.trim() !== '') {
//         showElement(dateLabel);
//         showElement(dateInput);
//         if (dateInput.value.trim() !== '') {
//             showElement(btnPemasukan);
//             showElement(btnPengeluaran);
//         }
//     } else {
//         dateInput.style.display = 'none';
//         dateLabel.style.display = 'none';
//         btnPemasukan.style.display = 'none';
//         btnPengeluaran.style.display = 'none';
//     }
// });

// dateInput.addEventListener('input', function() {
//     if (dateInput.value.trim() !== '' && noteInput.value.trim() !== '' && amountInput.value.trim() !== '') {
//         showElement(btnPemasukan);
//         showElement(btnPengeluaran);
//     } else {
//         btnPemasukan.style.display = 'none';
//         btnPengeluaran.style.display = 'none';
//     }
// });




// noteInput.addEventListener('input', function() {
//     if (noteInput.value.trim() !== '') {
//         showElement(dateLabel);
//         showElement(dateInput);
//     } else {
//         dateInput.style.display = 'none';
//         dateLabel.style.display = 'none';
//         btnPemasukan.style.display = 'none';
//         btnPengeluaran.style.display = 'none';
//     }
// });

// dateInput.addEventListener('input', function() {
//     if (dateInput.value.trim() !== '') {
//         showElement(btnPemasukan);
//         showElement(btnPengeluaran);
//     } else {
//         btnPemasukan.style.display = 'none';
//         btnPengeluaran.style.display = 'none';
//     }
// });

// // Mencegah pengiriman jika ada input yang kosong
// document.getElementById('btnPemasukan').addEventListener('click', function(event) {
//     if (!amountInput.value.trim() || !noteInput.value.trim() || !dateInput.value.trim()) {
//         event.preventDefault();
//         alert('Semua input harus diisi!');
//     } else {
//         addTransaction('pendapatan');
//     }
// });

// document.getElementById('btnPengeluaran').addEventListener('click', function(event) {
//     if (!amountInput.value.trim() || !noteInput.value.trim() || !dateInput.value.trim()) {
//         event.preventDefault();
//         alert('Semua input harus diisi!');
//     } else {
//         addTransaction('pengeluaran');
//     }
// });

// // Fungsi untuk menambahkan transaksi baru
// function addTransaction(type) {
//     let amount = amountInput.value.replace(/\./g, '');
//     const note = noteInput.value;
//     const date = dateInput.value;
    
//     const transaction = { amount, note, date, type };
//     saveTransaction(transaction);
//     renderTransactions();
//     document.getElementById('Form').reset();
//     noteInput.style.display = 'none';
//     noteLabel.style.display = 'none';
//     dateInput.style.display = 'none';
//     dateLabel.style.display = 'none';
//     btnPemasukan.style.display = 'none';
//     btnPengeluaran.style.display = 'none';
// }

// // Fungsi untuk menyimpan transaksi ke localStorage
// function saveTransaction(transaction) {
//     let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
//     transactions.push(transaction);
//     localStorage.setItem('transactions', JSON.stringify(transactions));
// }

// // Fungsi untuk merender transaksi ke dalam tabel
// function renderTransactions() {
//     const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
//     const tableBody = document.getElementById('transactionTableBody');
//     tableBody.innerHTML = '';

//     transactions.forEach((transaction, index) => {
//         const newRow = tableBody.insertRow();
//         const cellNumber = newRow.insertCell(0);
//         const cellNote = newRow.insertCell(1);
//         const cellPendapatan = newRow.insertCell(2);
//         const cellPengeluaran = newRow.insertCell(3);
//         const cellDelete = newRow.insertCell(4);
        
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Hapus';
//         deleteButton.className = 'btn-pengeluaran';
//         deleteButton.addEventListener('click', function() {
//             deleteTransaction(index);
//         });
//         cellDelete.appendChild(deleteButton);
        
//         cellNumber.textContent = `${transaction.date}`;
//         cellNote.textContent = transaction.note;
//         if (transaction.type === 'pendapatan') {
//             cellPendapatan.textContent = new Intl.NumberFormat('id-ID').format(transaction.amount);
//             cellPengeluaran.textContent = '';
//         } else {
//             cellPendapatan.textContent = '';
//             cellPengeluaran.textContent = new Intl.NumberFormat('id-ID').format(transaction.amount);
//         }
//     });
// }

// // Fungsi untuk menghapus transaksi
// function deleteTransaction(index) {
//     let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
//     transactions.splice(index, 1);
//     localStorage.setItem('transactions', JSON.stringify(transactions));
//     renderTransactions();
// }

// document.addEventListener('DOMContentLoaded', renderTransactions);



// pebaikian percobaan 

// Ambil elemen form
const amountInput = document.getElementById('FormAmount');
const noteInput = document.getElementById('FormNote');
const dateInput = document.getElementById('FormDate');
const btnPemasukan = document.getElementById('btnPemasukan');
const btnPengeluaran = document.getElementById('btnPengeluaran');
const noteLabel = document.querySelector("label[for='FormNote']");
const dateLabel = document.querySelector("label[for='FormDate']");

// Cek apakah elemen ditemukan, jika tidak hentikan script agar tidak error
if (!amountInput || !noteInput || !dateInput || !btnPemasukan || !btnPengeluaran) {
    console.warn("⚠️ Elemen form tidak ditemukan, pastikan ini hanya dipakai di halaman 'kas.html'.");
} else {
    // Sembunyikan elemen input di awal
    [noteInput, dateInput, noteLabel, dateLabel, btnPemasukan, btnPengeluaran].forEach(el => el.style.display = 'none');

    // Fungsi untuk menampilkan elemen dengan efek animasi
    function showElement(element) {
        element.style.display = 'block';
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = 'opacity 0.3s ease-in-out';
            element.style.opacity = 1;
        }, 10);
    }

    // Format angka saat diketik
    amountInput.addEventListener('input', function() {
        let rawValue = amountInput.value.replace(/\D/g, '').slice(0, 15);
        amountInput.value = new Intl.NumberFormat('id-ID').format(rawValue);

        if (rawValue) {
            showElement(noteLabel);
            showElement(noteInput);
        } else {
            [noteInput, dateInput, noteLabel, dateLabel, btnPemasukan, btnPengeluaran].forEach(el => el.style.display = 'none');
        }
    });

    noteInput.addEventListener('input', function() {
        if (noteInput.value.trim()) {
            showElement(dateLabel);
            showElement(dateInput);
        } else {
            [dateInput, dateLabel, btnPemasukan, btnPengeluaran].forEach(el => el.style.display = 'none');
        }
    });

    dateInput.addEventListener('input', function() {
        if (dateInput.value.trim()) {
            showElement(btnPemasukan);
            showElement(btnPengeluaran);
        } else {
            [btnPemasukan, btnPengeluaran].forEach(el => el.style.display = 'none');
        }
    });

    // Fungsi untuk menambahkan transaksi baru
    function addTransaction(type) {
        let amount = amountInput.value.replace(/\./g, '');
        const note = noteInput.value;
        const date = dateInput.value;

        const transaction = { amount, note, date, type };
        saveTransaction(transaction);
        renderTransactions();
        document.getElementById('Form').reset();
        [noteInput, dateInput, noteLabel, dateLabel, btnPemasukan, btnPengeluaran].forEach(el => el.style.display = 'none');
    }

    // Mencegah pengiriman jika ada input yang kosong
    btnPemasukan.addEventListener('click', function(event) {
        if (!amountInput.value.trim() || !noteInput.value.trim() || !dateInput.value.trim()) {
            event.preventDefault();
            alert('Semua input harus diisi!');
        } else {
            addTransaction('pendapatan');
        }
    });

    btnPengeluaran.addEventListener('click', function(event) {
        if (!amountInput.value.trim() || !noteInput.value.trim() || !dateInput.value.trim()) {
            event.preventDefault();
            alert('Semua input harus diisi!');
        } else {
            addTransaction('pengeluaran');
        }
    });

    // Fungsi untuk menyimpan transaksi ke localStorage
    function saveTransaction(transaction) {
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    // Fungsi untuk merender transaksi ke dalam tabel
    function renderTransactions() {
        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        const tableBody = document.getElementById('transactionTableBody');
        if (!tableBody) return; // Hindari error jika tabel tidak ditemukan
        tableBody.innerHTML = '';

        transactions.forEach((transaction, index) => {
            const newRow = tableBody.insertRow();
            const cellNumber = newRow.insertCell(0);
            const cellNote = newRow.insertCell(1);
            const cellPendapatan = newRow.insertCell(2);
            const cellPengeluaran = newRow.insertCell(3);
            const cellDelete = newRow.insertCell(4);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.className = 'btn-pengeluaran';
            deleteButton.addEventListener('click', function() {
                deleteTransaction(index);
            });
            cellDelete.appendChild(deleteButton);

            cellNumber.textContent = transaction.date;
            cellNote.textContent = transaction.note;
            if (transaction.type === 'pendapatan') {
                cellPendapatan.textContent = new Intl.NumberFormat('id-ID').format(transaction.amount);
                cellPengeluaran.textContent = '';
            } else {
                cellPendapatan.textContent = '';
                cellPengeluaran.textContent = new Intl.NumberFormat('id-ID').format(transaction.amount);
            }
        });
    }

    // Fungsi untuk menghapus transaksi
    function deleteTransaction(index) {
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        renderTransactions();
    }

    // Jalankan render transaksi saat halaman dimuat
    document.addEventListener('DOMContentLoaded', renderTransactions);
}
