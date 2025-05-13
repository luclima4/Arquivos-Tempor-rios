// Função para inserir dados em API

fetch('http://localhost:3000/filmes')
  .then(response => response.json())
  .then(movies => {

    let param = new URLSearchParams(location.search);
    let idURL = param.get("id");

    let movie = movies.find(elem => elem.id == idURL);

    console.log("Filmes recebidos:", movie);

    let cardsHTML = ""
    if (movie.protagonistas == true) {
      cardsHTML = `
        <div style="max-width: 20rem;" class="col-md-4">
                    <img src="${movie.imagem}" class="img-fluid rounded-start" alt="...">
                  </div>
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
      document.getElementById("containerDiv").innerHTML = cardsHTML
    } else {
      cardsHTML = `
        <div style="max-width: 20rem;" class="col-md-4">
                    <img src="${movie.imagem}" class="img-fluid rounded-start" alt="...">
                  </div>
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
      document.getElementById("containerDiv").innerHTML = cardsHTML
    }
  

/* Função para inserir fotos complementares do Filme em detalhes.html*/

    let arr = movie.imagens_complementares

    for (let i = 0; i < arr.length; i++) {
      const imgComp = arr[i]
      let cardHTML = `
        <div class="col-md-4 mb-3">
            <img src="${imgComp.src}" class="img-fluid" alt="${imgComp.descricao}">
            <p class="small text-muted">${imgComp.descricao}</p>
        </div>`

      if (i < 3) {
        let containerEl = document.getElementById("imagensExtra1")
        containerEl.innerHTML += cardHTML
      } else {
        let containerEl = document.getElementById("imagensExtra2")
        containerEl.innerHTML += cardHTML
      }
    }
})