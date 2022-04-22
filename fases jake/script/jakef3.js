function terceiraFaseJake () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Jake se tranforma e consegue sair da festa.\n2. Você liga para os bombeiros.`);


        if (opcao == 1) {
            window.location.href = "../fases jake/p1_jakefinal.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases jake/p1_jakegameover3.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}