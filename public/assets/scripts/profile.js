document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    const loginData = {
        email: email,
        senha: senha
    };
    
    fetch('http://localhost:3000/logins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Login registrado:', data);
        // Lógica para fazer login ou exibir mensagens de erro
    })
    .catch(error => console.error('Erro ao fazer login:', error));
})
    

