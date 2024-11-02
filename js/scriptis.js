function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "aluno" && password === "1234") {
        alert("Login bem-sucedido!");
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

document.querySelectorAll('.btn-matricula').forEach(button => {
    button.addEventListener('click', () => {
        alert('Você se matriculou neste curso!');
    });
});
