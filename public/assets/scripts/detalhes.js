// Função para inserir dados em API

fetch('http://localhost:3000/filmes')
  .then(response => response.json())
  .then(movies => {

    let param = new URLSearchParams(location.search);
    let idURL = param.get("id");

    let movie = movies.find(elem => elem.id == idURL);

    console.log("Filmes recebidos:", movie);

    // Protagonistas:
    let cardsHTML = `
  <div style="max-width: 20rem;" class="col-md-4">
    <img src="${movie.imagem}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h2 class="card-title">${movie.titulo} - <span class="text-muted">(${movie.ano})</span></h2>

      <div style="gap: 10px;" class="d-flex">
        <p><strong>${movie.genero}</strong></p>
        <div style="height: auto;">
          <span style="color: black;">${movie.avaliacao}% - </span>
          <img src="assets/imagens/rotten.png" style="max-width: 80px;" alt="...">
        </div>
      </div>

      <p class="card-text">${movie.sinopse}</p>
      <small><strong>Protagonizado por:</strong></small>

      <div id="containerProtagonistas" class="d-flex gap-2 my-2">
        <!-- Ainda irá injetar protagonistas -->
      </div>
    </div>
  </div>
`;

    document.getElementById("containerDiv").innerHTML = cardsHTML;

    // Depois que o HTML foi inserido, preenche os protagonistas:
    const container = document.getElementById("containerProtagonistas");
    container.innerHTML = "";

    if (movie.protagonista && movie.protagonista_imagem) {
      const cardHTML = `
        <div class="card" style="width: 7rem;">
          <img src="${movie.protagonista_imagem}" class="card-img-top" alt="${movie.protagonista}">
          <div class="card-body p-2">
            <p style="font-size: 12px;" class="card-text">${movie.protagonista}</p>
          </div>
        </div>
      `;
      container.innerHTML = cardHTML;
    }


    /* Função para inserir fotos complementares do Filme em detalhes.html*/

    const containerExtra1 = document.getElementById("imagensExtra1");
    const containerExtra2 = document.getElementById("imagensExtra2");

    containerExtra1.innerHTML = "";
    containerExtra2.innerHTML = "";

    movie.imagens_complementares.forEach((imgComp, i) => {
      const cardHTML = `
        <div class="col-md-4 mb-3">
          <img src="${imgComp.imgComplementar}" class="img-fluid" alt="${imgComp.descricao}">
          <p class="small text-muted">${imgComp.descricao}</p>
        </div>
      `;

      if (i < 3) {
        containerExtra1.innerHTML += cardHTML;
      } else {
        containerExtra2.innerHTML += cardHTML;
      }
    });


  })