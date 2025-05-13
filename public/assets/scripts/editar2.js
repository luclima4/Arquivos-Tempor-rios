// Função para inserir dados em API

fetch('http://localhost:3000/filmes')
  .then(response => response.json())
  .then(movies => {

    var param = new URLSearchParams(location.search);
    var idURL = param.get("id");

    var movie = movies.find(elem => elem.id == idURL);

    console.log("Filmes recebidos:", movie);

    let cardsHTML = ""
    if (movie.protagonistas == true) {
      cardsHTML = `
                  <div class="col-md-8">
                    <div class="card-body">
                      <h2 class="card-title">${movie.titulo} - <span class="text-muted">(${movie.ano}) </h2>

                        <div style ="gap: 10px;"class="d-flex"> 
                            <p><strong>${movie.genero}</strong></p>
                            <div style="height: auto;">
                                <span style="color: black;">${movie.avaliacao}% - </span>
                                <img src="assets/imagens/rotten.png" style="max-width: 80px;" alt="...">
                            </div>
                        </div>
                      
                      <p class="card-text">${movie.sinopse}</p>
                      <small><strong>Protagonizado por:</strong></small>

                    <div class="d-flex gap-2 my-2">
                      <div class="card" style="width: 7rem;">
                            <img src="${movie.protagonistaImagem1}" class="card-img-top">
                            <div class="card-body p-2">
                                <p style="font-size: 12px;"class="card-text">${movie.protagonistaNome1}</p>
                            </div>
                          </div>
                       <div class="card" style="width: 7rem;">
                            <img src="${movie.protagonistaImagem2}" class="card-img-top">
                            <div class="card-body p-2">
                                <p style="font-size: 12px;"class="card-text">${movie.protagonistaNome2}</p>
                            </div>
                        </div>
                      </div>
                    <small class="text-muted">${movie.atualizacao}</small>
                </div>
    `
      document.getElementById("mostrarEditavel").innerHTML = cardsHTML
    } else {
      cardsHTML = `
                  <div class="col-md-8">
                    <div class="card-body">
                      <h2 class="card-title">${movie.titulo} - <span class="text-muted">(${movie.ano}) </h2>

                        <div style ="gap: 10px;"class="d-flex"> 
                            <p><strong>${movie.genero}</strong></p>
                            <div style="height: auto;">
                                <span style="color: black;">${movie.avaliacao}% - </span>
                                <img src="assets/imagens/rotten.png" style="max-width: 80px;" alt="...">
                            </div>
                        </div>
                      
                      <p class="card-text">${movie.sinopse}</p>
                      <small><strong>Protagonizado por:</strong></small>
                      <div class="card" style="width: 7rem;">
                            <img src="${movie.protagonistaImagem1}" class="card-img-top">
                            <div class="card-body p-2">
                                <p style="font-size: 12px;"class="card-text">${movie.protagonistaNome1}</p>
                            </div>
                        </div>

                        <small class="text-muted">${movie.atualizacao}</small>
                    </div>
                  </div>
    `
      document.getElementById("mostrarEditavel").innerHTML = cardsHTML
    }
  })

// Campo de Edição

const params = new URLSearchParams(window.location.search);
const movieId = params.get('id');

fetch(`http://localhost:3000/filmes/${movieId}`)
  .then(r => r.json())
  .then(movie => {
    document.getElementById('titulo').value = movie.titulo
    document.getElementById('genero').value = movie.genero
    document.getElementById('ano').value = movie.ano
    document.getElementById('ator').value = movie.ator
    document.getElementById('sinopse').value = movie.sinopse
    document.getElementById('avaliacao').value = movie.avaliacao
  })
  .catch(err => console.error('Erro ao carregar filme:', err));

document.getElementById('campoEditar').addEventListener('submit', s => {
  s.preventDefault()

  const editarFilmes = {
    titulo: document.getElementById('titulo').value,
    genero: document.getElementById('genero').value,
    ano: Number(document.getElementById('ano').value),
    ator: document.getElementById('ator').value,
    sinopse: document.getElementById('sinopse').value,
    avaliacao: Number(document.getElementById('avaliacao').value)
  };

  fetch(`http://localhost:3000/filmes/${movieId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editarFilmes)
  })
    .then(response => response.json())

    .then(updated => {
      console.log('Filme atualizado:', updated);
      alert('Atualização salva com sucesso!');
      // Lógica para fazer login ou exibir mensagens de erro
    })

    .catch(error => console.error('Erro ao editar filme:', error));

})




