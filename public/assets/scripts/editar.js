const apiURL_filmes = '/filmes'

function lerFilmes (processaDados){
    // mandar requisição de get (todos registros)
    fetch(apiURL_filmes)
    .then(response => response.json())
    // retornar em JSON
    .then(data =>{
        processaDados(data)
    })
    // esse fetch apenas entrega os dados para processaDados

    .catch(error =>{
        console.log('Erro ao carregar dados', error)

    })
}

// Cadastrar Filme
function cadastrarFilme(filme, refreshFunction){
    fetch(apiURL_filmes, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme),
    })
    .then(response => response.json())
    .then(data =>{
        alert('Filme adicionado com sucesso!')
        if(refreshFunction)
            refreshFunction()
    })
    .catch(error =>{
        console.log('Erro ao adicionar filme', error)
    })
}
// Atualizar Filme
function editarFilme(id, filme, refreshFunction){
    fetch(`${apiURL_filmes}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept-language': 'pt-br',
            'Accept': 'text/xml',
        },
        body: JSON.stringify(filme),
    })
    .then(response => response.json())
    .then(data => {
        alert('Filme alterado com sucesso')
        if(refreshFunction)
            refreshFunction()
    })
    .catch(error =>{
        console.log('Erro ao alterar filme', error)
    })
}   
// Deletar Filme
function excluirFilme(id, refreshFunction){
    fetch(`${apiURL_filmes}/${id}`,{
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data=> {
        alert('Filme excluído com sucesso')
        if(refreshFunction)
            refreshFunction()
    })
    .catch(error =>{
        console('Erro ao excluir filme', error)
    })
}