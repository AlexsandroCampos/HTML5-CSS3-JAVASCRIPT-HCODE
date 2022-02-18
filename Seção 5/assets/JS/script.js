/*
Exemplo de uma tabuada
*/

//Declaração de uma função
function calculaTabuada(){

    //Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o valor a do campo input e convertendo em inteiro 
    let a = parseInt(document.querySelector("#valorA").value);
    //Limpando o conteúdo do tbody
    tabuada.innerHTML = "";
    //Criando um laço de repetição de 0 a 10
    for (let index = 0; index < 11; index++) {
        //calculando o resultado da linha atual
        let resultado = a * index;
        //Criando o template das colunas da linha atual
        let template = `
            <td>${a}</td>
            <td>x</td>
            <td>${index}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;
        //Criando o elemento tr
        let tr = document.createElement("tr");
        //inserindo as colunas na linha
        tr.innerHTML = template;
        //Inserindo a linha na tabela
        tabuada.append(tr);
    }
}

//Chamando a nossa função pela primeira vez
calculaTabuada();
//Adicionando o evento de altereção ao campo número
document.querySelector("#valorA").addEventListener("change", calculaTabuada)



