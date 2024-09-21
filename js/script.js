const tipodecambio = {
    USD: 7.73,
    CAD: 5.70,
    EUR: 8.63  
};

function convertir() {
    const montoUSD = parseFloat(document.getElementById('monto').value) || 0;
    const montoCAD = parseFloat(document.getElementById('monto2').value) || 0;
    const montoEUR = parseFloat(document.getElementById('monto3').value) || 0;

    const resultadoUSD = montoUSD * tipodecambio.USD * 0.92; 
    const resultadoCANADA = montoCAD * tipodecambio.CAD * 0.92; 
    const resultadoEURO = montoEUR * tipodecambio.EUR * 0.92; 

    document.getElementById('resultado1').innerText = `Resultado USD sin comision: Q${resultadoUSD.toFixed(2)}`;
    document.getElementById('resultado2').innerText = `Resultado CANADA sin comision: Q${resultadoCANADA.toFixed(2)}`;
    document.getElementById('resultado3').innerText = `Resultado EURO sin comision: Q${resultadoEURO.toFixed(2)}`;

    const mensaje = `Resultados de Conversión descontando comisión:\n` +
                    `USD: Q${resultadoUSD.toFixed(2)} (Tipo de cambio: ${tipodecambio.USD})\n` +
                    `CAD: Q${resultadoCANADA.toFixed(2)} (Tipo de cambio: ${tipodecambio.CAD})\n` +
                    `EUR: Q${resultadoEURO.toFixed(2)} (Tipo de cambio: ${tipodecambio.EUR})\n`;

    alert(mensaje);
}

function limpiar() {
    document.getElementById('monto').value = '';
    document.getElementById('monto2').value = '';
    document.getElementById('monto3').value = '';
    
    document.getElementById('resultado1').innerText = 'Resultado USD: Q0.00';
    document.getElementById('resultado2').innerText = 'Resultado CAD: Q0.00';
    document.getElementById('resultado3').innerText = 'Resultado EUR: Q0.00';
}

function imprimir() {
    convertir();
    window.print();
}
