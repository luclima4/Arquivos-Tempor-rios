fetch ('http://localhost:3000/filmes')
.then (response => response.json())
.then(filmes => {
    console.log("Filmes recebidos:", filmes)

    let cardsHTML = ''
    
    for(let i = 0; i < (filmes.length - 2); i++){
        let filme = filmes[i]
        cardsHTML += `
        
            <div class="col">
                <div class="card">
                    <a href="detalhes.html?id=${filme.id}"><img src="${filme.imagem}" class="card-img-top" alt="..."></a>
                    <div class="card-body align-items-center">
                        <h5 class="card-title">${filme.titulo}</h5>
                        <p class="card-text">${filme.genero}</p>
                        <a href="detalhes.html?id=${filme.id}" class="btn btn-dark w-100">Detalhes</a>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('injetaCard').innerHTML = cardsHTML
})

