const form = document.getElementById('myForm');
const numero = document.getElementById('numeroA');
const numeroMaior= document.getElementById('numeroB');
const acerto = document.getElementById('numero-maior')
const erro = document.getElementById('numero-menor')

function maiorNumero(numero, numeroMaior){
    return numeroMaior > numero;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let numeroEMaior = maiorNumero(numero.valueAsNumber, numeroMaior.valueAsNumber)
    if(numeroEMaior){
        acerto.style.display = 'block';
    }
})

form.addEventListener('keyup', function(e){
    let numeroEMaior= maiorNumero(numero.valueAsNumber, numeroMaior.valueAsNumber)
    if (!numeroEMaior){
        erro.style.display = 'block'
        acerto.style.display = 'none'
    } else{
        erro.style.display = 'none'
    }
})