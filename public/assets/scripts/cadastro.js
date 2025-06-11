let cadastroForm = document.getElementById('cadastroForm')

cadastroForm.addEventListener('submit', event => {
    event.preventDefault()

    if(!cadastroForm.checkValidity()){
        cadastroForm.reportValidity()
        return
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    let novoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1

    let cadastroUsuario = {
        id: novoId,
        email: document.getElementById('inputEmail').value,
        senha: document.getElementById('inputSenha').value,
        telefone: document.getElementById('inputTelefone').value,
        tipo: document.querySelector('input[name="tipo"]:checked').value
    } 

    usuarios.push(cadastroUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    alert('Cadastro realizado com sucesso.')
    window.location.href = "login.html"
    
})

//! ----------------- Tirar tudo isso. O cadastro deve ir para o JSON ----------------- !// 





