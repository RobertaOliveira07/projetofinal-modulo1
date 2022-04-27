function terceiraFaseReiGelado () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1.  Procura o banheiro para fazer chover sobre o incêndio.\n2. Desiste e vai embora.`);


        if (opcao == 1) {
            window.location.href = "../fases reigelado/p3_reigeladofinal.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases reigelado/p3_reigeladogameover3.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}