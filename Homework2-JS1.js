// Jawaban homework no 2 Javascript 1

function nilaiUN(bind, bing, mtk, ipa) {
    if ((typeof bind == 'undefined') || (typeof bing == 'undefined') ||
        (typeof mtk == 'undefined') || (typeof ipa == 'undefined')) {
        console.log('Tolong isi semua input dengan lengkap');
    } else if ((typeof bind != 'number') || (typeof bing != 'number') ||
        (typeof mtk != 'number') || (typeof ipa != 'number')) {
        console.log('Tolong pastikan semua input merupakan angka');
    } else if ((typeof bind == 'number') && (typeof bing == 'number') &&
        (typeof mtk == 'number') && (typeof ipa == 'number')) {
        let rataRata = (bind + bing + mtk + ipa) / 4
        if (rataRata >= 90) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = A`);
        } else if (rataRata >= 80) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = B`);
        } else if (rataRata >= 70) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = C`);
        } else if (rataRata >= 60) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = D`);
        } else if (rataRata <= 59) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log(`Grade = E`);
        }
    }
}

nilaiUN(80, 90, 89, 69);