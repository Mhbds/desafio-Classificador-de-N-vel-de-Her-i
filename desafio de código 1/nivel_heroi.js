// Passo 1: Solicitar o nome do herói e a quantidade de XP
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o nome do herói: ", function(nome) {
  rl.question("Digite a quantidade de experiência (XP) do herói: ", function(xp) {
    xp = parseInt(xp);

    // Passo 2: Utilizar uma estrutura de decisão para classificar o nível
    let nivel;
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
      nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
      nivel = "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
      nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
      nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }

    // Passo 3: Exibir a mensagem com o nome e o nível do herói
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

    // Fechar o teclado
    rl.close();
  });
});
