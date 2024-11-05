function mapWithForLoop() {
    const harga = [19.99,4.95,25,3.5];
    const hargaSekarang =[];

    for (let i = 0; i < harga.length; i++) {
        hargaSekarang.push(harga[i] * 1.15);
    }

    return hargaSekarang;
}

function mapWithES6() {
    const harga = [19.99,4.95,25,3.5];
    return harga.map((harga) => harga * 1.15);
}

function filterOdd(){
    const numbers = [1,60,112,123,100,99,73];
    const oddNumbers = [];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] %2!==0){
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}

function filterOddES6(){
    const numbers = [1,60,112,123,100,99,73];
    const oddNumbers = [];
}