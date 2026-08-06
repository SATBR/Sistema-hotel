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
    let quarto = JSON.parse(localStorage.getItem("quarto")) || [];
    // aqui ele pega o usuario e a senha e transforma o texto json em objeto javascript para verificação
    let existe = quarto.some(u => u.quarto === quarto);
    // se existir o usuario a variavel "existe" fica true
    if (existe) {
        alert("Esse quarto já está cadastrado.");
        return;
    } else {
        let quarto = JSON.parse(localStorage.getItem("quarto")) || [];
        quarto.push({
            numero: numero,
            tipoquarto: tipoquarto,
            valordiaria: valordiaria,
            quantidadedecamas: quantidadedecamas,
            arcondicionado: arcondicionado,
            TV: TV,
            wifi: wifi,
            situação: situação

        });
        localStorage.setItem("quarto", JSON.stringify(quarto));

        alert("Cadastro feito com sucesso");
    }
}