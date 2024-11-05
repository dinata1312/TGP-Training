// Inisialisasi array `hobbies`
let hobbies = ["reading", "swimming", "painting"];
let students = [
    {
        id:1,
        name:'Ian',
    },{
        id:2,
        name:'Reza',
    },{
        id:3,
        name:'nando',
    }
];

// 1. push: Menambah 1 nilai ke array di indeks paling belakang
hobbies.push("dancing"); // Menambahkan 'dancing' ke akhir array
console.log(hobbies); // Output: ["reading", "swimming", "painting", "dancing"]

// 2. pop: Menghapus 1 nilai dari array di indeks paling belakang
hobbies.pop(); // Menghapus 'dancing' dari akhir array
console.log(hobbies); // Output: ["reading", "swimming", "painting"]

// 3. unshift: Menambah 1 nilai ke array di indeks paling depan (indeks 0)
hobbies.unshift("gardening"); // Menambahkan 'gardening' di awal array
console.log(hobbies); // Output: ["gardening", "reading", "swimming", "painting"]

// 4. shift: Menghapus 1 nilai dari array di indeks paling depan (indeks 0)
hobbies.shift(); // Menghapus 'gardening' dari awal array
console.log(hobbies); // Output: ["reading", "swimming", "painting"]

// 5. join: Menggabungkan seluruh elemen array menjadi string, dengan simbol pemisah antar elemen
let hobbiesString = hobbies.join(", "); // Menggabungkan elemen dengan koma dan spasi
console.log(hobbiesString); // Output: "reading, swimming, painting"

// 6. sort: Mengurutkan elemen dalam array sesuai alfabet
hobbies.sort(); // Mengurutkan array secara alfabetis
console.log(hobbies); // Output: ["painting", "reading", "swimming"]

// 7. splice: Mengubah nilai array dengan menambah/menghapus nilai
hobbies.splice(1, 1, "writing", "traveling"); 
// Menghapus 1 elemen di indeks 1 ("reading") dan menambahkan "writing" dan "traveling" di posisi tersebut
console.log(hobbies); // Output: ["painting", "writing", "traveling", "swimming"]

// 8. split: Memecah string menjadi array berdasarkan separator
let newHobbies = "coding, hiking, photography";
let hobbiesArray = newHobbies.split(", "); // Memecah string menjadi array dengan koma+spasi sebagai pemisah
console.log(hobbiesArray); // Output: ["coding", "hiking", "photography"]

// 9. slice: Memanggil isi array dengan kondisi start/end yang bisa dikostumasi


// contoh
const numbers = [5,4,3,2,1,7];

console.log("number after ascending sort :" + numbers.sort());
console.log("number after descending sort :" + numbers.sort((a,b) => (b-a)));
// console.log("sorting object by id", student.sort((a,b) b.id => a.id)_);

const mapStudent = students.map((value) => {

    // return {
    //     id:value.id,
    //     name:value.name,
    //     jomblo:true,
    // }

    // bisa di Simplify seperti ini menggunakan spread operator
    return {
        ...value, // spread operator
        jomblo:true,
    };
});
