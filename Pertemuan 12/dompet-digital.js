const pelanggan = [
  {
    id_pelanggan: 1,
    nama_pelanggan: "John Doe",
    saldo_awal: 150000,
    riwayat_transaksi: [
      { type: "debit", amount: 50000 },
      { type: "kredit", amount: 100000 },
    ],
  },
  {
    id_pelanggan: 2,
    nama_pelanggan: "Jane Doe",
    saldo_awal: 200000,
    riwayat_transaksi: [
      { type: "kredit", amount: 150000 },
      { type: "debit", amount: 100000 },
    ],
  },
  {
    id_pelanggan: 3,
    nama_pelanggan: "Bob Smith",
    saldo_awal: 50000,
    riwayat_transaksi: [
      { type: "debit", amount: 20000 },
      { type: "kredit", amount: 10000 },
    ],
  },
];

// Map: Menghitung saldo akhir setiap pelanggan
function hitungSaldoAkhir(pelanggan) {
  return pelanggan.map((p) => {
    let saldoAkhir = p.saldo_awal;
    p.riwayat_transaksi.forEach((transaksi) => {
      if (transaksi.type === "kredit") {
        saldoAkhir += transaksi.amount;
      } else if (transaksi.type === "debit") {
        saldoAkhir -= transaksi.amount;
      }
    });
    return { nama_pelanggan: p.nama_pelanggan, saldo_akhir: saldoAkhir };
  });
}

// Filter: Mendapatkan pelanggan dengan saldo akhir di bawah 100.000
function filterSaldoRendah(pelanggan) {
  // console.log(pelanggan);
  function filterunder100k(pelanggans) {
    return pelanggans.saldo_akhir < 100_000;
  }
  return pelanggan.filter(filterunder100k);
}

// Reduce: Menghitung total nilai transaksi debit dari semua pelanggan
function totalDebit(pelanggan) {
  return pelanggan.reduce((total, data) => {
    return (
      total +
      data.riwayat_transaksi
        .filter((transaksi) => transaksi.type === "debit")
        .reduce((total, transaksi) => total + transaksi.amount, 0)
    );
  }, 0);
}

// Fungsi untuk validasi nama pelanggan menggunakan regex
function validasiNamaPelanggan(pelanggan) {
  return pelanggan.map((p) => {
    const validator = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const validateNamaPelanggan = validator.test(p.nama_pelanggan);
    console.log(p.nama_pelanggan, validateNamaPelanggan);
    return validateNamaPelanggan;
  });
}
// Fungsi untuk validasi saldo pelanggan menggunakan regex
function validasiSaldoPelanggan(pelanggan) {
  return pelanggan.map((p) => {
    const validator = /^\d+(\.\d{1,2})?$/;
    const validateSaldoPelanggan = validator.test(p.saldo_akhir);
    console.log(p.nama_pelanggan,p.saldo_akhir, validateSaldoPelanggan);
    return validateSaldoPelanggan;
  });
}

// Main Function
function main() {
  const saldoAkhir = hitungSaldoAkhir(pelanggan);
  // console.log("Saldo Akhir Pelanggan:", saldoAkhir);
  // // nama pelanggan & saldo akhir aja
  
  // const pelangganSaldoRendah = filterSaldoRendah(saldoAkhir);
  // console.log("Pelanggan dengan Saldo < 100.000:", pelangganSaldoRendah);
  // // nama pelanggan & saldo akhir

  // const totalDebitTransaksi = totalDebit(pelanggan);
  // console.log("Total Debit Semua Pelanggan:", totalDebitTransaksi);
  // // total debit transaksi

  const hasilValidasiNamaPelanggan = validasiNamaPelanggan(pelanggan);
  console.log("Hasil validasi nama pelanggan:", hasilValidasiNamaPelanggan);

  const hasilValidasiSaldoPelanggan = validasiSaldoPelanggan(saldoAkhir);
  console.log("hasil validasi saldo pelanggan:", hasilValidasiSaldoPelanggan);
}

main();
