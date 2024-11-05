function daftarNasabahLolos(nasabah) {
    return nasabah.reduce((hasil, item) => {
        // Hanya proses nasabah dengan nilai kredit lebih dari 75
        if (item.nilaiKredit > 75) {
            // Destructuring untuk mendapatkan `kelasKredit`, `nama`, dan `nilaiKredit`
            const { kelasKredit, nama, nilaiKredit } = item;

            // Tambahkan array baru untuk kelas kredit jika belum ada
            hasil[kelasKredit] = hasil[kelasKredit] || [];

            // Tambahkan nasabah ke kelas kredit yang sesuai
            hasil[kelasKredit].push({ nama, nilaiKredit });
        }
        return hasil;
    }, {});
}

// DRIVER CODE
console.log(daftarNasabahLolos([
    { nama: 'John', nilaiKredit: 80, kelasKredit: 'Platinum' },
    { nama: 'Jane', nilaiKredit: 60, kelasKredit: 'Gold' },
    { nama: 'Doe', nilaiKredit: 85, kelasKredit: 'Platinum' },
    { nama: 'Smith', nilaiKredit: 77, kelasKredit: 'Silver' }
]));

// Output yang diharapkan:
// {
//     Platinum: [
//         { nama: 'John', nilaiKredit: 80 },
//         { nama: 'Doe', nilaiKredit: 85 }
//     ],
//     Silver: [
//         { nama: 'Smith', nilaiKredit: 77 }
//     ]
// }
