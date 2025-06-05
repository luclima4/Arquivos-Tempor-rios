let loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', event => {
    event.preventDefault()

    let loginUsuario = {
        email: document.getElementById('inputEmail').value,
        senha: document.getElementById('inputSenha').value
    }

    let usuarioStr = localStorage.getItem('usuarios')
    if(!usuarioStr){
        alert('Email ou senha incorretos.')
        return
    }
    let usuarios = JSON.parse(usuarioStr)

    // Procurar usuario no array "usuários"
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === loginUsuario.email && usuario.senha === loginUsuario.senha)

    // Caso usuário foi encontrado e senha correta.
    if(usuarioEncontrado){
        localStorage.removeItem('usuarioLogado')

        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado))
        alert('Login realizado com sucesso!')

        window.location.href = 'index.html'
    }else{
        alert('Email ou senha incorretos.')
    }
})