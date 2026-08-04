function criarcadastro() {
    let usuario = document.getElementById("c-login-usuario").value
    let senha = document.getElementById("c-senha-usuario").value
    let rsenha = document.getElementById("cr-senha-usuario").value
    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    // aqui ele pega o usuario e a senha e transforma o texto json em objeto javascript para verificação
    let existe = usuarios.some(u => u.usuario === usuario);
    // se existir o usuario a variavel "existe" fica true
    if (existe) {
        alert("Esse usuário já está cadastrado.");
        return;
    }
    if (senha == rsenha) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push({
            usuario: usuario,
            senha: senha
        });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro feito com sucesso");
    }
    else {
        alert("Senhas não combinam");
    }

}

function logar() {
    let usuario = document.getElementById("login-usuario").value
    let senha = document.getElementById("senha-usuario").value
    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    // aqui ele transforma o texto json em objeto javascript para verificação
    let usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
        window.location.href = "painel_de_controle.html";
    } else {
        alert("Usuário ou senha inválidos.");
    }

}