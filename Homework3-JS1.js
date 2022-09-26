// Jawaban homework no 3 Javascript 1
//Piramida terbalik

const printSegitiga = function (input) {
    if (typeof input != 'number') {
        console.log('Tolong masukkan input angka karena data harus number');
    } else if (typeof input == 'number') {
        for (let i = input; i >= 1; i--) {
            let tampung = ''
            for (let j = 1; j <= i; j++) {
                tampung = tampung + j;
            }
            console.log(tampung);
        }
    }
}

printSegitiga(5);