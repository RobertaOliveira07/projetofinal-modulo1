function segundaFaseReiGelado ( ) {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Enrola a princesa dentro de si para que ela não perca oxigenio.\n2. Vira um cano.`);


        if (opcao == 1) {
            window.location.href = "../fases reigelado/p3_reigelado3.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases gelado/p3_reigeladogameover2.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}