//function sederhana
function sayHello(){
    return "Hello World !!"
}

// console.log(sayHello())

// membuat function dengan parameter
function addNumber(a, b){
    return a + b;
}

console.log(addNumber(5, 6))

//membuat function dengan kondisi
function cekAngka (number){
    if (number % 2 ===  0){
        return "genap";
    } else {
        return "ganjil"
    }
}

//panggil fungsi cek angka
console.log(cekAngka(9)); 