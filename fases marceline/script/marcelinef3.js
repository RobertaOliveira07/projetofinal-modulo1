function terceiraFaseMarceline () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Ana entende a situação, compra o tabaco e entrega a Matinta.\n2. Ana não acredita na história e segue despreocupada por que só tem mais 1 dia de hospedagem no local.`);


        if (opcao == 1) {
            window.location.href = "../fases marceline/p2_marcelinefinal.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases marceline/p2_marcelinegameover3.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}