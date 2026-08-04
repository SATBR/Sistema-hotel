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
    } else {
        alert("cliente não encontrado.");
    }

}

function criarcadastrocliente() {
    let cpfcliente = document.getElementById("c-cpf-cliente").value
    let nome = document.getElementById("nome-cliente").value
    let sobrenome = document.getElementById("sobrenome-cliente").value
    let idade = document.getElementById("idade-cliente").value
    if (cpfcliente === ""||nome === ""||sobrenome === ""||idade === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    // aqui ele pega o usuario e a senha e transforma o texto json em objeto javascript para verificação
    let existe = clientes.some(u => u.cliente === cliente);
    // se existir o usuario a variavel "existe" fica true
    if (existe) {
        alert("Esse cliente já está cadastrado.");
        return;
    }else{
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