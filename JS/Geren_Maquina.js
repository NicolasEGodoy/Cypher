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

// Inicia o Dropdown do filtro------------------------------------
function toggleDropdown(event) {
    event.preventDefault();
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Inicia o Perfil------------------------------------


// Cadastrar no Console e Local Storage ----------------------------

// Adiciona o evento submit ao formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Coleta os valores dos campos e remove espaços extras
    const nome_maquina = document.getElementById('nome_maquina').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const fabricante = document.getElementById('fabricante').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const numero_serie = document.getElementById('numero_serie').value.trim();
    const data_vencimento = document.getElementById('data_vencimento').value.trim();
    const local = document.getElementById('local').value.trim();
    const status = document.getElementById('status').value.trim();
    const imagem = document.getElementById('imagem').value.trim();

    // Lista de todos os campos
    const campos = [nome_maquina, descricao, fabricante, modelo, numero_serie, data_vencimento, local, status, imagem];

    // Verifica se todos os campos estão preenchidos
    const todosPreenchidos = campos.every(campo => campo !== '');

    if (!todosPreenchidos) {
        alert("Todos os campos devem ser preenchidos antes de enviar.");
        return; // Impede o envio dos dados
    }

    // Cria um objeto com os dados coletados
    const formData = {
        nome_maquina,
        descricao,
        fabricante,
        modelo,
        numero_serie,
        data_vencimento,
        local,
        status,
        imagem
    };

    // Exibe os dados no console e com o alert
    console.log("Dados Enviados", formData);
    alert(`Dados Enviados:
    Nome da Máquina: ${nome_maquina}
    Descrição: ${descricao}
    Fabricante: ${fabricante}
    Modelo: ${modelo}
    Número de Série: ${numero_serie}
    Data de Vencimento: ${data_vencimento}
    Local: ${local}
    Status: ${status}
    Imagem: ${imagem}`);

    // Salva os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Usuário Cadastrado Com Sucesso!');
});
