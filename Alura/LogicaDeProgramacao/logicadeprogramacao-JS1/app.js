alert('Boas vindas ao jogo do número secreto');
//Essa linha exibe um alerta na tela com a mensagem "Boas vindas ao jogo do número secreto".
let numeroSecreto = 34;
//Essa linha declara uma variável chamada numeroSecreto e atribui a ela o valor 2.
console.log(numeroSecreto)
//Essa linha imprime o valor da variável numeroSecreto no console do navegador.
let chute;
//Essa linha exibe um prompt na tela solicitando que o usuário escolha um número entre 1 e 10. O valor digitado pelo usuário é armazenado na variável chute.
let tentativas = 1;
//Variavel responsavel por definir o número maximo de tentativas.

//enquanto chute não for igual ao n.s.
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute} `);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}