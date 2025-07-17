let saldoAtual = 0; // Saldo inicial 

document.addEventListener('DOMContentLoaded', function() {
    const saldoEmTela = document.querySelector('#saldoEmTela'); 
    
    const vlrDigitado = document.querySelector('#vlrDigitado'); 
    const depositarBtn = document.querySelector('#depositar'); 
    const sacarBtn = document.querySelector('#sacar'); 
    
    const listHistorico = document.querySelector('#listHistorico'); 
    

    //Atualizar o saldo
    function atualizarSaldoTela() {
        saldoEmTela.textContent = saldoAtual.toFixed(2); 
    }

    // Função Depositar
function deposito() {
    const VlrDigitado = parseFloat(vlrDigitado.value); 
        
    if (isNaN(VlrDigitado) || VlrDigitado <= 0) {
        alert('Por favor, insira um valor positivo para deposito.');
        return;
    }

    const listItem = document.createElement('li'); 
    listItem.id = 'depList'; 
    listItem.textContent = `DEPOSITO: R$ ${VlrDigitado.toFixed(2)}`; 
    listHistorico.appendChild(listItem); 

    saldoAtual += VlrDigitado; 
    atualizarSaldoTela(); 
    vlrDigitado.value = ''; 
}

    // Função Sacar
function saque() {
        const VlrDigitado = parseFloat(vlrDigitado.value); 

    if (isNaN(VlrDigitado) || VlrDigitado <= 0) {
        alert('Por favor, insira um valor válido e positivo para saque.');
        return;
    }

    if (VlrDigitado > saldoAtual) { 
        alert('Saldo insuficiente para realizar o saque.');
        return;
    }

    const listItem = document.createElement('li'); 
    listItem.id = 'sacList'; 
    listItem.textContent = `SAQUE: R$ ${VlrDigitado.toFixed(2)}`; 
    listHistorico.appendChild(listItem); 

    saldoAtual -= VlrDigitado; 
    atualizarSaldoTela(); 
    vlrDigitado.value = ''; 
}

    depositarBtn.addEventListener('click', deposito);
    sacarBtn.addEventListener('click', saque);

    atualizarSaldoTela(); 
});