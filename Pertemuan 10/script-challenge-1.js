// function pengaturanTempatDuduk(karyawan, kolom) {
//     let conditionLoop = true;
//     let slotTempatDuduk = [];
    
//     if(kolom == 0) return "invalid";
//     count = 0;
//     console.log(karyawan);

    
//     // while(conditionLoop){
//     //     console.log(count + kolom);
//     //     console.log((count + kolom) % kolom);

//     //     if((count + kolom) % kolom != 0 && count > kolom) {

//     //         console.log("udah diujung " + karyawan.slice(count, count + kolom) );
//     //         let temp = karyawan.slice(count,count+kolom+-1);
//     //         console.log(temp);
//     //         conditionLoop = false;
//     //         break;
//     //     }else{
//     //         let temp = karyawan.slice(count,count+kolom);
//     //         console.log(temp);
//     //     }
//     //     count = count + kolom-1;
//     // }
// }

// // console.log("Pengaturan tempat duduk", pengaturanTempatDuduk(["John","Marry","Sarah"],0) );

// console.log("Pengaturan tempat duduk", pengaturanTempatDuduk(["John","Marry","Sarah","Jake","Anna" ],2) );

// // console.log("Pengaturan tempat duduk", pengaturanTempatDuduk(["Emma","Noah","Liam"],3) );

// // console.log("Pengaturan tempat duduk", pengaturanTempatDuduk(["Alice","Bob","Charlie","David","Eve","Frank"],4) );

function pengaturanTempatDuduk(karyawan, kolom) {
    // Jika kolom 0, kembalikan "Invalid number"
    if (kolom === 0) return "Invalid number";

    let slotTempatDuduk = []; // Array untuk menyimpan susunan tempat duduk
    let count = 0;

    // Iterasi karyawan dengan jumlah kolom yang ditentukan
    while (count < karyawan.length) {
        // Ambil sekelompok karyawan sesuai dengan jumlah kolom
        let temp = karyawan.slice(count, count + kolom);
        
        // Jika jumlah karyawan di kelompok ini kurang dari kolom, tambahkan "Kursi Kosong"
        while (temp.length < kolom) {
            temp.push("Kursi Kosong");
        }

        // Tambahkan kelompok ini ke slot tempat duduk
        slotTempatDuduk.push(temp);
        count += kolom; // Naikkan counter sebanyak jumlah kolom
    }

    return slotTempatDuduk; // Kembalikan susunan tempat duduk
}

// DRIVER CODE
console.log(pengaturanTempatDuduk(['John', 'Mary', 'Sarah'], 0));
// Output: "Invalid number"

console.log(pengaturanTempatDuduk(['John', 'Mary', 'Sarah', 'Jake', 'Anna'], 2));
// Output: [['John', 'Mary'], ['Sarah', 'Jake'], ['Anna', 'Kursi Kosong']]

console.log(pengaturanTempatDuduk(['Emma', 'Noah', 'Liam'], 3));
// Output: [['Emma', 'Noah', 'Liam']]

console.log(pengaturanTempatDuduk(['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'], 4));
// Output: [['Alice', 'Bob', 'Charlie', 'David'], ['Eve', 'Frank', 'Kursi Kosong', 'Kursi Kosong']]
