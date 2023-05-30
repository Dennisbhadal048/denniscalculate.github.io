function output(){
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = alas*tinggi*0.5;

    if(document.getElementById("pill1").checked){
        document.getElementById("result").innerHTML=luas+" Cm"
    }else if(document.getElementById("pill2").checked){
        alert('Hasil: '+luas+' Cm')
    }else if(document.getElementById("pill3").checked){
        document.write('<h1> Hasilnya adalah : </h1>'+luas+' Cm')
    }else{
        alert('Metode belum dipilih!!!')
    }
}
function login(){
    
}