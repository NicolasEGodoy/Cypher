let currentPage = 1;
const totalPages = 4;

function changePage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) return;

    currentPage = pageNumber;
    document.getElementById("content").innerText = "Page " + currentPage;

    // Remove a classe 'active-line' de todas as linhas
    document.querySelectorAll(".page-line").forEach(line => {
        line.classList.remove("active-line");
    });

    // Adiciona a classe 'active-line' na linha selecionada
    document.getElementById("line" + currentPage).classList.add("active-line");

    // Habilita ou desabilita botões de navegação
    document.getElementById("prevBtn").disabled = (currentPage === 1);
    document.getElementById("nextBtn").disabled = (currentPage === totalPages);
}

// Inicia a página correta
changePage(1);

// Cadastrar no Console e Local Storage ----------------------------

document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Coleta os valores dos campos
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const tipo = document.getElementById('tipo').value;
    const unidade = document.getElementById('unidade').value;
    const status = document.getElementById('status').value;
    const modelo = document.getElementById('modelo').value;
    const numero = document.getElementById('numero').value;

    // Verifica se algum campo está vazio
    if (!id || !nome || !tipo || !unidade || !status || !modelo || !numero) {
        alert('Todos os campos são obrigatórios. Por favor, preencha todos.');
        return; // Impede o salvamento se algum campo estiver vazio
    }

    // Cria um objeto com os dados coletados
    const formData = {
        id: id,
        nome: nome,
        tipo: tipo,
        unidade: unidade,
        status: status,
        modelo: modelo,
        numero: numero
    };


    // Exibe os dados no console e com o alert
    console.log("Dados Enviados", formData);
    alert(`Dados Enviados:
    Id do Sensor: ${id}
    Nome: ${nome}
    Tipo: ${tipo}
    Unidade: ${unidade}
    Status: ${status}
    Modelo: ${modelo}
    Número: ${numero}`);

    // Salva os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Usuário Cadastrado Com Sucesso!');
});
