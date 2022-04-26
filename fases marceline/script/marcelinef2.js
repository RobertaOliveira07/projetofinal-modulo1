function segundaFaseMarceline ( ) {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Procura a guitarra no banheiro.\n2.Procura no segundo andar.`);


        if (opcao == 1) {
            window.location.href = "../fases marceline/p2_marcelinegameover2.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../fases marceline/p2_marceline3.html";
            break;

        } else {
            alert (`Você deve escolher a opção 1 ou 2`);
        }
    }
}
