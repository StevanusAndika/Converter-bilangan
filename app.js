//deklarasi variabel dan get element

let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let hexInp = document.getElementById("hex-inp");
let octInp = document.getElementById("oct-inp");
let btn = document.getElementById("btn");


// Decimal to Binary pangkat 2 ubah string menjadi integer
// Decimal to Hexadecimal pangkat 16 ubah string menjadi integer ubah karakter menjadi kapital
// Decimal to Octal pangkat 8

decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2);
    hexInp.value = decValue.toString(16).toUpperCase();
    octInp.value = decValue.toString(8);
});

// Binary event
//validasi inputan binary
//konversi dari desimal ke binary pangkat 
//konversi dari hexa pangkat 16 ke binary pangkat 2 ubah karakter menjadi kapital
//konversi dari octal pangkat 8 ke binary pangkat 2

// Binary event to disable input if not valid

binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        hexInp.value = parseInt(binValue, 2).toString(16).toUpperCase();
        octInp.value = parseInt(binValue, 2).toString(8);
    }
});


hexInp.addEventListener("input", () => {
    let hexValue = hexInp.value;
    if (hexValidator(hexValue)) {
        decInp.value = parseInt(hexValue, 16);
        binInp.value = parseInt(hexValue, 16).toString(2);
        octInp.value = parseInt(hexValue, 16).toString(8);
    }
});

// Octal to other conversions
octInp.addEventListener("input", () => {
    let octValue = octInp.value;
    if (octValidator(octValue)) {
        decInp.value = parseInt(octValue, 8);
        binInp.value = parseInt(octValue, 8).toString(2);
        hexInp.value = parseInt(octValue, 8).toString(16).toUpperCase();
    }
});

// Binary Validator
// validasi inputan binary
//jika input bukan binary 0 dan 1) tampilkan pesan error 
function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== "0" && num[i] !== "1") {
            alert("Only 0 and 1 are allowed");
            return false;
        }
    }
    return true;
}

// Hexadecimal Validator
//validasi inputan Hexadecimal
//  jika input bukan Hexadecimal 0-9 A-F) tampilkan pesan error

function hexValidator(hex) {
    const hexRegex = /^[0-9A-Fa-f]+$/g;
    if (!hexRegex.test(hex)) {
        alert("Invalid Hexadecimal input!");
        return false;
    }
    return true;
}

// Octal Validator
//validasi inputan Octal
//jika input bukan Octal 0-7) tampilkan pesan error

function octValidator(oct) {
    const octRegex = /^[0-7]+$/g;
    if (!octRegex.test(oct)) {
        alert("Invalid Octal input!");
        return false;
    }
    return true;
}
