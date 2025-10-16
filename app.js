const inputLado = document.getElementById('lado')
const resultado = document.getElementById('resultadoP')
const btnResultado = document.getElementById('btnAccion')

function calcularResultado(){
    const valorTexto = inputLado.value
    const lado = parseFloat(valorTexto)

    if(isNaN(lado) || lado <=0){
        resultado.textContent = "Error. ingresa un valor válido"
        resultado.className = "mensaje-incorrecto"
    }else{
        const area = lado*lado
        resultado.textContent = `El área del cuadrado es: ${area}`
        resultado.className = "mensaje-correcto"
    }

}
  btnResultado.addEventListener('click', calcularResultado)
