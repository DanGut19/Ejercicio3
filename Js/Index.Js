function Km() {
    let n1 = parseInt(document.getElementById('txtN1').value)

if (isNaN(n1)) {
        alertify.error('Número 1 en blanco')
    } else {
        let suma = n1 * 1000;
        document.getElementById('Resultado').value = suma
    }
}

function M() {
    let n2 = parseInt(document.getElementById('txtN2').value)

if (isNaN(n2)) {
        alertify.error('Número 2 en blanco')
    } else {
        let suma = n2 * 100;
        document.getElementById('M').value = suma
    }
}

function Ft() {
    let n3 = parseInt(document.getElementById('txtN3').value)

if (isNaN(n3)) {
        alertify.error('Número 3 en blanco')
    } else {
        let suma = n3 * 12;
        document.getElementById('Ft').value = suma
    }
}

function Yardas() {
    let n4 = parseInt(document.getElementById('txtN4').value)

if (isNaN(n4)) {
        alertify.error('Número 4 en blanco')
    } else {
        let suma = n4 * 36;
        document.getElementById('Yardas').value = suma
    }
}

function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtN2').value = ''
    document.getElementById('txtN3').value = ''
    document.getElementById('txtN4').value = ''
    document.getElementById('Resultado').value = ''
    document.getElementById('M').value = ''
    document.getElementById('Ft').value = ''
    document.getElementById('Yardas').value = ''
}