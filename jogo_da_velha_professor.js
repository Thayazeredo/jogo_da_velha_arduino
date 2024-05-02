function main() {
    // Criar o tabuleiro e jogadores, zerar as variáveis.
    // 
    // 0: Posição vazia
    // 1: jogada na Posição do jogador 1
    // 2: jogada na Posição do jogador 2
    var velha;
    var linha;
    var coluna;
    var haVencedor;

    haVencedor = false;
    var tabuleiro = Array(9);

    // Limpar/zerar o tabuleiro
    var index;

    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    var jogador1;

    jogador1 = "Jogador 1";
    var jogador2;

    jogador2 = "Jogador 2";
    var jogada;

    // Iniciar o jogo, definir quem joga primeiro+
    var jogadorDaVez;

    jogadorDaVez = 1;

    // Anotar/Registrar a jogada, do primeiro jogador
    velha = 1;
    do {
       console.log(tabuleiro[0].toString/() + tabuleiro[1] + tabuleiro[2]);
       console.log(tabuleiro[3].toString/() + tabuleiro[4] + tabuleiro[5]);
       console.log(tabuleiro[6].toString/() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
       console.log("Digite a posição da sua peça JOGADOR " + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');
        if (validaPosicao(jogada)) {

            // Converter a jogada texto em dois inteiros linha e coluna.
            // Simula a função Serial.parseInt() do Arduino
            linha = parseInt(jogada.charAt(0));

            // CORRIGIR O ERRO DE DIGITAÇÃO
            coluna = parseInt(jogada.charAt(2));
           console.log("Linha: " + linha + "; Coluna: " + coluna);

            // Verificar se a posição 'jogada' é valida
            if (tabuleiro[3 * linha + coluna] == 0) {
                tabuleiro[3 * linha + coluna] = jogadorDaVez;
                if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                    haVencedor = true;
                } else {

                    // Verificar a jogada vencedora nas colunas.
                    if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
                        haVencedor = true;
                    } else {

                        // Verificar a jogada vencedora nas diagonais.
                        if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {
                            haVencedor = true;
                        } else {

                            // Trocar o jogador
                            if (jogadorDaVez == 1) {
                                jogadorDaVez = 2;
                            } else {
                                jogadorDaVez = 1;
                            }
                        }
                    }
                }
                velha = velha + 1;
            } else {
               console.log("Posição ocupada, jogue novamente !!!");

                // Informar ao Jogador 1 que a posição está preenchida, é inválida e ele precisa informar um posição válida.
            }
        } else {
           console.log("Jogada inválida !!!");
        }

        // Verificar a jogada vencedora nas linhas.
    } while (!haVencedor && velha <= 9);

    // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo.
    if (haVencedor) {
       console.log("Parabéns pela a vitória, jogador " + jogadorDaVez);
    } else {
       console.log("Deu VELHA!!!");
    }
   console.log(tabuleiro[0].toString/() + tabuleiro[1] + tabuleiro[2]);
   console.log(tabuleiro[3].toString/() + tabuleiro[4] + tabuleiro[5]);
   console.log(tabuleiro[6].toString/() + tabuleiro[7] + tabuleiro[8]);
}

function getValArrayInt(linha, coluna, matriz, qtdeLinhas) {
    var valor;

    valor = matriz[qtdeLinhas * linha + coluna];
    
    return valor;
}

function validaPosicao(entrada) {
    var entradaValida;

    entradaValida = false;
   console.log(entrada.length);
    if (entrada.length == 3) {
       console.log("Comprimento da string igual  3");
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
           console.log(entrada.charAt(0));
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
               console.log(entrada.charAt(2));
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}
