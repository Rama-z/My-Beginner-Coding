// Jawaban homework no 1 Javascript 1

let biodata = {
    name: 'Zanuar Bagus Ramadhan',
    age: 12,
    hobbies: ['Hiking', 'Olahraga'],
    isMarried: false,
    schoolList: [{
        name: 'SMA 1 Temanggung',
        yearIn: 2013,
        yearOut: 2016,
        major: 'MIPA'
    }, {
        name: 'UNS',
        yearIn: 2016,
        yearOut: 2021,
        major: 'Chemical Engineering'
    }],
    skills: [{
        skillName: 'HTML',
        level: 'Advanced',
    }, {
        skillName: 'CSS',
        level: 'Advance'
    }, {
        skillName: 'Javascript',
        level: 'Begginer'
    }],
    interestInCoding: true,
}

console.log(`Tipe data dari name adalah ${typeof biodata.name}`);
console.log(`Tipe data dari age adalah ${typeof biodata.age}`);
console.log(`Tipe data dari hobbies adalah ${typeof biodata.hobbies}`);
console.log(`Tipe data dari isMarried adalah ${typeof biodata.isMarried}`);
console.log(`Tipe data dari schoolList adalah ${typeof biodata.schoolList}`);
console.log(`Tipe data dari skills adalah ${typeof biodata.skills}`);
console.log(`Tipe data dari interestInCoding adalah ${typeof biodata.interestInCoding}`);