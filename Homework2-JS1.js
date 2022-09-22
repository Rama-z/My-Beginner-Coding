// Jawaban homework no 2 Javascript 1

function nilaiUN(a, b, c, d) {
    let bahasaIndonesia = a;
    let bahasaInggris = b;
    let matematika = c;
    let IPA = d;
    let rataRata = (bahasaIndonesia + bahasaInggris + matematika + IPA) / 4
    if ((typeof a == 'undefined') || (typeof b == 'undefined') ||
        (typeof c == 'undefined') || (typeof d == 'undefined')) {
        console.log('Tolong isi semua input dengan lengkap');
    } else if ((typeof a != 'number') || (typeof b != 'number') ||
        (typeof c != 'number') || (typeof d != 'number')) {
        console.log('Tolong pastikan semua input merupakan angka');
    } else if ((typeof a == 'number') && (typeof b == 'number') &&
        (typeof c == 'number') && (typeof d == 'number')) {
        if (rataRata >= 90) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = A`);
        } else if ((rataRata >= 80) && (rataRata <= 89)) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = B`);
        } else if ((rataRata >= 70) && (rataRata <= 79)) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = C`);
        } else if ((rataRata >= 60) && (rataRata <= 69)) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = D`);
        } else if (rataRata <= 59) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = E`);
        }
    }
}

nilaiUN(80, 90, 89, 69);