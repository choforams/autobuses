function calcular(){
    let tipo = document.querySelector('#tipo').value;
    let personas = parseInt(document.querySelector('#personas').value);
    let km = document.querySelector('#km').value;
    let total = document.querySelector('#total');
    let pago = 0;

    if(tipo == 'A'){
        pago = 2
        preciop = km * 2
        preciopersona = preciop/personas

}else if(tipo = 'B'){
    pago = 2.5
    preciop = km * 2.5
    preciopersona = preciop/ personas
}else if(tipo = 'C'){
    pago = 3.0
    preciop = km * 3.0
    preciopersona = preciop/ personas
}

document.querySelector('#total').innerHTML = `El total es: ${preciop}` 
document.querySelector('#pagop').innerHTML = `El precio por persona es: ${preciopersona}` 


}

document.querySelector("button").addEventListener("click", calcular) 