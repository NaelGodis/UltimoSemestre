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

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links que devem funcionar como um "toggle"
    const toggles = document.querySelectorAll('.menu-lateral a.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            // Previne a navegação padrão do link, para que ele apenas abra/feche o menu
            event.preventDefault();

            // Adiciona/remove a classe 'ativo' no link clicado
            this.classList.toggle('ativo');

            // Encontra o submenu que é o "irmão" seguinte do link clicado
            const submenu = this.nextElementSibling;

            // Mostra ou esconde o submenu
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
});