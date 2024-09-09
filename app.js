

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let raca of racasDeGatos) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    ${raca.nome}
                </h2>
                <div class="container">
                    <img src="images/${raca.img_nome}" alt="Gato ${raca.nome}" width="15%">
                    <p class="descricao-meta">${raca.descricao}</p><br><br>
                    
                </div>
                <br /><br />
                <p class="descricao-meta"><strong>Valor do filhote:</strong> ${raca.valor_filhote}</p>
                <a href=${raca.link_wikipedia} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

/*<div class="item-resultado">
                <h2>Siamês</h2>                
                <div class="container">
                    <img src="images/siames.jpeg" alt="Gato Siamês" width="15%">
                    <p class="descricao-meta">Gatos Siamês são conhecidos por sua pelagem curta e brilhante, corpo esbelto e olhos azuis intensos. São animais inteligentes, curiosos e muito vocais.</p>
                </div>                
                <a href="https://www.tudogato.com.br/racas/siames" target="_blank">Mais informações</a>
              </div>*/