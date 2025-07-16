// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o botão "Voltar ao Topo"
    const btnTopo = document.getElementById('btn-topo');

    // Função para verificar a posição do scroll e mostrar/ocultar o botão
    function toggleBotaoTopo() {
        // Se o scroll vertical for maior que 300 pixels
        if (window.scrollY > 300) {
            // Adiciona a classe que o torna visível
            btnTopo.classList.add('btn-topo-visivel');
        } else {
            // Remove a classe para escondê-lo
            btnTopo.classList.remove('btn-topo-visivel');
        }
    }

    // Adiciona um "ouvinte" ao evento de rolagem da janela
    window.addEventListener('scroll', toggleBotaoTopo);

    // Chama a função uma vez no carregamento, caso a página já carregue rolada
    toggleBotaoTopo(); 
});