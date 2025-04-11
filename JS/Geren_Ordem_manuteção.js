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

//exibir alert
document.getElementById("save").addEventListener("click", function () {
    // Pegando valores dos inputs com os ids que você usou
    let idOrdem = document.getElementById("IdOrdem formFile").value;
    let idAtivo = document.getElementById("IdAtivo formFile").value;
    let idFuncionario = document.getElementById("IdFunc formFile").value;
    let descricao = document.getElementById("inputDescription formFile").value;
    let dataAbertura = document.getElementById("inputAbertura formFile").value;
    let dataFechamento = document.getElementById("inputFechamento formFile").value;
    let status = document.getElementById("inputGroupSelect02 formFile").value;
    let prioridade = document.getElementById("inputPriority formFile").value;

    // Exibir alerta com os valores
    alert(
        `ID da Ordem: ${idOrdem}\n` +
        `ID do Ativo: ${idAtivo}\n` +
        `ID do Funcionário: ${idFuncionario}\n` +
        `Descrição: ${descricao}\n` +
        `Data de Abertura: ${dataAbertura}\n` +
        `Data de Fechamento: ${dataFechamento}\n` +
        `Status: ${status}\n` +
        `Prioridade: ${prioridade}`
    );
});

// Inicia o Dropdown do filtro------------------------------------
function toggleDropdown(event) {
    event.preventDefault();
    var dropdown = document.getElementById("dropfiltro");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}


// ---------------------------------------------Modal-History------------------------------------

const modal = document.getElementById("historyModal");
const openButton = document.getElementById("button_cascata_historic");
const closeButtons = [document.getElementById("closeModal"), document.getElementById("closeFooter")];

openButton.addEventListener("click", function () {
    modal.style.display = "block";
    setTimeout(() => modal.classList.add("show"), 10);
});

closeButtons.forEach(button => {
    button.addEventListener("click", function () {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 300);
    });
});

document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Coleta os valores dos campos
    const idOrdem = document.getElementById('Id_Ordem').value;
    const idAtivo = document.getElementById('Id_Ativo').value;
    const idFuncionario = document.getElementById('Id_Funcionario').value;
    const descricao = document.getElementById('Descricao').value;
    const dataAbertura = document.getElementById('Data_Abertura').value;
    const dataFechamento = document.getElementById('Data_Fechamento').value;
    const status = document.getElementById('Status').value;
    const prioridade = document.getElementById('Prioridade').value;

    // Verifica se algum campo está vazio
    if (!idOrdem || !idAtivo || !idFuncionario || !descricao || !dataAbertura || !dataFechamento || !status || !prioridade) {
        alert('Todos os campos são obrigatórios. Por favor, preencha todos.');
        return; // Impede o salvamento se algum campo estiver vazio
    }

    // Cria um objeto com os dados coletados
    const formData = {
        idOrdem: idOrdem,
        idAtivo: idAtivo,
        idFuncionario: idFuncionario,
        descricao: descricao,
        dataAbertura: dataAbertura,
        dataFechamento: dataFechamento,
        status: status,
        prioridade: prioridade
    };

    // Exibe os dados no console e com o alert
    console.log("Dados Enviados", formData);
    alert(`Dados Enviados:
    ID da Ordem: ${idOrdem}
    ID do Ativo: ${idAtivo}
    ID do Funcionário: ${idFuncionario}
    Descrição: ${descricao}
    Data de Abertura: ${dataAbertura}
    Data de Fechamento: ${dataFechamento}
    Status: ${status}
    Prioridade: ${prioridade}`);

    // Salva os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Ordem de Manutenção Cadastrada Com Sucesso!');
});
