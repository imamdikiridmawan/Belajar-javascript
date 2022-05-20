// didalam if terdapat if lainnya
var x = 10;
var y = 20;
var z = 30;

if(x>z) {
    if(x>z) {
        console.log("x adalah yang terbesar");
    }else {
        console.log("x adalah yang terbesar kedua");
    }
}else {
    if(x<z) {
        console.log("x adalah yang paling kecil");
    }else {
        console.log("x adalah yang terkecil kedua");
    }
}