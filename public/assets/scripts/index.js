fetch('http://localhost:3000/filmes')
    .then(response => response.json())
    .then(filmes => {
        console.log("Filmes recebidos:", filmes)

        let cardsHTML = ''

        for (let i = 0; i < filmes.length; i++) {
            let filme = filmes[i]
            cardsHTML += `
        
            <div id="filmeBanner" class="col">
                <button type="button" id="heartBtn" class="btn btn-outline-danger" style="position: absolute; right: 5px;">
                    <i class="bi bi-heart-fill"></i>
                </button>
                    <a href="detalhes.html?id=${filme.id}"><img style="border-radius: 8px;" src="${filme.imagem}" class="card-img-top" alt="..."></a>
                    <div class="card-body align-items-center">
                </div>
            </div>
        `
        }
        document.getElementById('injetaCard').innerHTML = cardsHTML
    })


//*  ------------------------ Funções para login do usuário --------------------------------

// Função para injetar Login/ Registrar - Usuário não logado
let usuario = null;

function checarUsuarioLogado() {
    const usuarioLogadoStr = localStorage.getItem('usuarioLogado')

    if (!usuarioLogadoStr) {
        window.location.href = 'login.html'
        return false
    }
    usuario = JSON.parse(usuarioLogadoStr) 
    return true 
}



