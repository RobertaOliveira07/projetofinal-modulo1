function primeiraFaseMarceline () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Decide salvar apenas quem ela ama.\n2. Ajuda a combater o incêndio.`);


        if (opcao == 1) {
            window.location.href = "../fases marceline/p2_marcelinegameover1.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases marceline/p2_marceline2.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}