   int velha = 1;
int linha;
int coluna;
bool haVencedor = false;

int tabuleiro[9];
int index;

void setup() {
    Serial.begin(9600);
}

void loop() {
    // Limpar/zerar tabuleiro
    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    String jogador1 = "jogador1";
    String jogador2 = "jogador2";
    String jogada;
    // Iniciar o jogo, definir quem joga primeiro
    int jogadorDaVez;
    jogadorDaVez = 1;

    // Anotar/Registrar a jogada, do primeiro jogador
    velha = 1;
    int celulasPreenchidas = 0;
    do {
        // Imprimir o tabuleiro
        for (int i = 0; i < 9; i++) {
            Serial.print(tabuleiro[i]);
            if ((i + 1) % 3 == 0) {
                Serial.println();
            } else {
                Serial.print(" ");
            }
        }
        Serial.println("Digite a posição da sua peça JOGADOR " + String(jogadorDaVez));
        while (Serial.available() == 0); // Aguardar entrada do usuário
        jogada = Serial.readStringUntil('\n');
        if (validaPosicao(jogada)) {
            linha = jogada[0] - '0';
            coluna = jogada[2] - '0';
            Serial.println("Linha: " + String(linha) + "; Coluna: " + String(coluna));
            if (tabuleiro[3 * linha + coluna] == 0) {
                tabuleiro[3 * linha + coluna] = jogadorDaVez;
                celulasPreenchidas++;
                if (verificaVitoria(jogadorDaVez)) {
                    haVencedor = true;
                } else {
                    jogadorDaVez = (jogadorDaVez == 1) ? 2 : 1;
                    velha++;
                }
            } else {
                Serial.println("Posição ocupada, jogue novamente!!!");
            }
        } else {
            Serial.println("Jogada inválida!!!");
        }
    } while (!haVencedor && velha <= 9 && celulasPreenchidas < 9);

    // Verificar o resultado do jogo
    if (haVencedor) {
        Serial.println("Parabéns pela vitória, jogador " + String(jogadorDaVez));
    } else if (celulasPreenchidas == 9) {
        Serial.println("Deu VELHA!!!");
    }

    // Finalizar o jogo ou reiniciar o tabuleiro
}

bool validaPosicao(String entrada) {
    if (entrada.length() != 3) {
        return false;
    }
    if (entrada[0] != '0' && entrada[0] != '1' && entrada[0] != '2') {
        return false;
    }
    if (entrada[2] != '0' && entrada[2] != '1' && entrada[2] != '2') {
        return false;
    }
    return true;
}

bool verificaVitoria(int jogador) {
    // Verificar linhas, colunas e diagonais
    if ((tabuleiro[0] == jogador && tabuleiro[1] == jogador && tabuleiro[2] == jogador) ||
        (tabuleiro[3] == jogador && tabuleiro[4] == jogador && tabuleiro[5] == jogador) ||
        (tabuleiro[6] == jogador && tabuleiro[7] == jogador && tabuleiro[8] == jogador) ||
        (tabuleiro[0] == jogador && tabuleiro[3] == jogador && tabuleiro[6] == jogador) ||
        (tabuleiro[1] == jogador && tabuleiro[4] == jogador && tabuleiro[7] == jogador) ||
        (tabuleiro[2] == jogador && tabuleiro[5] == jogador && tabuleiro[8] == jogador) ||
        (tabuleiro[0] == jogador && tabuleiro[4] == jogador && tabuleiro[8] == jogador) ||
        (tabuleiro[2] == jogador && tabuleiro[4] == jogador && tabuleiro[6] == jogador)) {
        return true;
   }
    return false;
}
