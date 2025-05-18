const namaSaya = "Fidhel Mulya";
let usia = 15;

function generateBiodata() {
    if (usia >= 10 && usia <= 18) {
        //KONDISI PERTAMA
        console.log(`anda remaja😁`);
    } else {
        //KONDISI TIDAK TERPENUHI
        console.log(`wah tua lu!🤣`)

    }
}

console.log(namaSaya);
console.log(usia);

generateBiodata();