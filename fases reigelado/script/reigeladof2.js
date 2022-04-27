function segundaFaseReiGelado ( ) {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Tenta abrir a porta para sair.\n2. Sobe para o segundo andar para procurar um extintor.`);


        if (opcao == 1) {
            window.location.href = "../fases gelado/p3_reigeladogameover2.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases reigelado/p3_reigelado3.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}
