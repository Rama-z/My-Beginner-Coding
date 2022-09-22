// Jawaban homework no 4 Javascript 1

const data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874'
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
};

// Mengubah data menggunakan spread operator menjadi 
// name : nama anda
// email : email anda
// hobby : hobi anda
console.log(`Jawaban dari soal no 4a
- Overwrite data baru ke dalam object
`);
const overwrite = {
    name: 'Zanuar Bagus Ramadhan',
    email: 'sampleEmail@gmail.com',
    hobby: 'Hiking'
};

const newData = {
    ...data,
    ...overwrite
};
console.log(newData);

// Ambil data street and city menggunakan destructuring
console.log(`
Jawaban dari soal no 4b
- Mengambil data dengan menggunakan destructuring
`);

const addressData = data.address;
const {
    street,
    city
} = addressData;

console.log(`Saya beralamatkan di ${street}`);
console.log(`Yang mana ada di kota ${city}`);