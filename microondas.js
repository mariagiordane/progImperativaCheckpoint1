/* Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

function analisarTempo(tempoPadrao, tempoUsuario) {
    if (tempoUsuario > tempoPadrao * 3) {
        console.log('kabumm');
    } else if (tempoUsuario > tempoPadrao * 2) {
        console.log('A comida queimou');
    } else if (tempoUsuario < tempoPadrao) {
        console.log('Tempo insuficiente');
    } else {
        console.log('Prato pronto, bom apetite!!!');
    }
}

function microondas(comida, tempo) {
    if (comida == 'Pipoca') {
        analisarTempo(10, tempo);
    } else if (comida == 'Macarrão') {
        analisarTempo(8, tempo);
    } else if (comida == 'Carne') {
        analisarTempo(15, tempo);
    } else if (comida == 'Feijão') {
        analisarTempo(12, tempo);
    } else if (comida == 'Brigadeiro') {
        analisarTempo(8, tempo);
    } else {
        console.log('Prato inexistente');
    }
}



microondas("Pipoca", 32)
microondas("Feijão", 16)
microondas("Brigadeiro", 20)
microondas("Lasanha", 12)