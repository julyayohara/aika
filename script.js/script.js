function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function mostrarConteudo(materia) {
    // Oculta todos os conteúdos primeiro
    document.querySelectorAll('.conteudo').forEach(section => {
        section.style.display = 'none';
    });

    // Exibe apenas o conteúdo da matéria selecionada
    document.getElementById(materia).style.display = 'block';
}