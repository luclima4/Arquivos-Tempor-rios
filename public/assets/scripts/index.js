fetch('http://localhost:3000/filmes')
  .then(response => response.json())
  .then(filmes => {
    let cardsHTML = ''

    for (let i = 0; i < filmes.length; i++) {
      let filme = filmes[i]
      cardsHTML += `
        <div id="filmeBanner" class="col">
          <div id="divImagem">
            <button id="favBtn" class="btn btn-outline-danger">
              Favoritar
            </button>
            <a href="detalhes.html?id=${filme.id}">
              <img style="border-radius: 8px;" src="${filme.imagem}" class="card-img-top" alt="...">
            </a>
          </div>
          <div class="card-body align-items-center"></div>
        </div>
      `
    }

    document.getElementById('injetaCard').innerHTML = cardsHTML

  })


/* Alterar botão não funciona */

const btn = document.getElementById('favBtn')
    btn.addEventListener('click', () => {

      btn.classList.toggle('active');

      if (btn.classList.contains('active')) {
        btn.textContent = 'Favoritado';
      } else {
        btn.textContent = 'Favoritar';
      }
    });

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



