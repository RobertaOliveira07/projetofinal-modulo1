function primeiraFaseReiGelado () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Decide ir investigar o incêndio.\n2. Decide ir para casa.`);


        if (opcao == 1) {
            window.location.href = "../fases reigelado/p3_reigelado2.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases reigelado/p3_reigeladogameover1.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}

