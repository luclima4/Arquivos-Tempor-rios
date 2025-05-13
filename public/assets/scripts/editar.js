// Mostrar os filmes para a pessoa escolher, e editar as informações
fetch ('http://localhost:3000/filmes')
.then (response => response.json())
.then(filmes => {
    console.log("Filmes recebidos:", filmes)

    let cardsHTML = ''
    
    for(let i = 0; i < filmes.length; i++){
        let filme = filmes[i]
        cardsHTML += `
        
            <div class="col">
                <div class="card">
                    <a href="editar2.html?id=${filme.id}"><img src="${filme.imagem}" class="card-img-top" alt="..."></a>
                    <div class="card-body align-items-center">
                        <h5 class="card-title">${filme.titulo}</h5>
                        <p class="card-text">${filme.genero}</p>
                        <a href="editar2.html?id=${filme.id}" class="btn btn-dark w-100">Detalhes</a>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('injetaEditaveis').innerHTML = cardsHTML
})
