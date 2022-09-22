// Jawaban homework no 3 Javascript 1
//Piramida terbalik

const printSegitiga = function (a) {
    if (typeof a != 'number') {
        console.log('Tolong masukkan input angka karena data harus number');
    } else if (typeof a == 'number') {
        for (let i = a; i >= 1; i--) {
            let tampung = ''
            for (let j = 1; j <= i; j++) {
                tampung = tampung + j;
            }
            console.log(tampung);
        }
    }
}

printSegitiga(5);