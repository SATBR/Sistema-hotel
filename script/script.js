// ################# CADASTRAR USUARIO #############

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
// ################# LOGIN DO USUARIO #############
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
// ################# BUSCAR CLIENTE #############
let ultimoclientebuscado
function buscarcliente() {
    let cpfbuscado = document.getElementById("cpf-cliente").value
    if (cpfbuscado === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    // aqui ele transforma o texto json em objeto javascript para verificação
    let clienteEncontrado = clientes.find(u => u.cpfcliente === cpfbuscado);

    if (clienteEncontrado) {
        alert("cliente encontrado com sucesso!");
        document.getElementById("info-nome-cliente").innerHTML = clienteEncontrado.nome;
        document.getElementById("info-sobrenome-cliente").innerHTML = clienteEncontrado.sobrenome;
        document.getElementById("info-idade-cliente").innerHTML = clienteEncontrado.idade;
        ultimoclientebuscado = cpfbuscado
    } else {
        alert("cliente não encontrado.");
    }

}
// ################# CADASTRAR CLIENTE #############
function criarcadastrocliente() {
    let cpfcliente = document.getElementById("c-cpf-cliente").value
    let nome = document.getElementById("nome-cliente").value
    let sobrenome = document.getElementById("sobrenome-cliente").value
    let idade = document.getElementById("idade-cliente").value
    if (cpfcliente === "" || nome === "" || sobrenome === "" || idade === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    // aqui ele pega o usuario e a senha e transforma o texto json em objeto javascript para verificação
    let existe = clientes.some(u => u.cpfcliente === cpfcliente);
    // se existir o usuario a variavel "existe" fica true
    if (existe) {
        alert("Esse cliente já está cadastrado.");
        return;
    } else {
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        clientes.push({
            cpfcliente: cpfcliente,
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        });
        localStorage.setItem("clientes", JSON.stringify(clientes));

        alert("Cadastro feito com sucesso");
    }

}
// ################# CADASTRAR QUARTO #############
function criarcadastroquarto() {
    let numero = document.getElementById("numero-do-quarto").value
    let tipoquarto = document.getElementById("tipoquarto").value
    let valordiaria = document.getElementById("valordiaria").value
    let quantidadedecamas = document.getElementById("quantidadedecamas").value
    let arcondicionado = document.getElementById("arcondicionado").value
    let TV = document.getElementById("TV").value
    let wifi = document.getElementById("wifi").value
    let situação = document.getElementById("situação").value


    if (numero === "" || tipoquarto === "" || valordiaria === "" || quantidadedecamas === "" || arcondicionado === "" ||
        TV === "" || wifi === "" || situação === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let quartos = JSON.parse(localStorage.getItem("quartos")) || [];
    // aqui ele pega o usuario e a senha e transforma o texto json em objeto javascript para verificação
    let existe = quartos.some(u => u.quarto === quarto);
    // se existir o usuario a variavel "existe" fica true
    if (existe) {
        alert("Esse quarto já está cadastrado.");
        return;
    } else {
        let quartos = JSON.parse(localStorage.getItem("quartos")) || [];
        quartos.push({
            numero: numero,
            tipoquarto: tipoquarto,
            valordiaria: valordiaria,
            quantidadedecamas: quantidadedecamas,
            arcondicionado: arcondicionado,
            TV: TV,
            wifi: wifi,
            situação: situação

        });
        localStorage.setItem("quartos", JSON.stringify(quartos));

        alert("Cadastro feito com sucesso");
    }
}

// ################# RESERVAR QUARTO #############
function reservarquarto() {
    let numero = document.getElementById("numero-do-quarto-para-reserva").value
    let entrada = document.getElementById("data-entrada").value
    let saida = document.getElementById("data-saida").value
    if (numero === "" || entrada === "" || saida === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    // aqui ele pega o usuario e a senha e transforma o texto json em objeto javascript para verificação
    let existe = reservas.some(u => u.cpfcliente === ultimoclientebuscado);
    // se existir o usuario a variavel "existe" fica true
    if (existe) {
        alert("Esse cliente já tem reserva.");
        return;
    } else {
        const id = Math.floor(Math.random() * 90000000) + 10000000;
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
        reservas.push({
            id: id,
            cpfcliente: ultimoclientebuscado,
            numero: numero,
            entrada: entrada,
            saida: saida
        });
        localStorage.setItem("reservas", JSON.stringify(reservas));
        alert("Cadastro feito com sucesso");
    }
}