document.getElementById('submit').addEventListener('submit', function(event) {
    event.preventDefault();

    var titulo = document.getElementById('titulo').value
    var genero = document.getElementById('genero').value
    var sinopse = document.getElementById('sinopse').value
    var ano = document.getElementById('ano').value
    var avaliacao = document.getElementById('avaliacao').value

    const filmesData = {
        titulo: titulo,
        genero: genero,
        sinopse: sinopse,
        ano: ano,
        avaliacao: avaliacao
    };
    
    fetch('http://localhost:3000/filmes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filmesData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Filme registrado:', data);
        // Lógica para fazer login ou exibir mensagens de erro
    })
    .catch(error => console.error('Erro ao cadastrar filme:', error));
})
    

