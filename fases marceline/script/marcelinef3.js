function terceiraFaseMarceline () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Vai atrás do Rei Gelado, para tentar convencer ele a apagar o fogo.\n2. Desiste, desce e vai embora coma  princesa Juuba.`);


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