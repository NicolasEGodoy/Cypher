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


// Inicia o PErfil------------------------------------

// Função para alternar a exibição do menu dropdown
function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
}

document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id_peca = document.getElementById('id_peca').value;
    const name_peca = document.getElementById('name_peca').value;
    const desc_peca = document.getElementById('desc_peca').value;
    const valor_peca = document.getElementById('valor_peca').value;
    const fab_peca = document.getElementById('fab_peca').value;
    const fornecedor_peca = document.getElementById('fornecedor_peca').value;
    const estoque_peca = document.getElementById('estoque_peca').value;
    const peca = { id_peca: id_peca,
                   name_peca: name_peca,
                   desc_peca: desc_peca,
                   valor_peca:valor_peca,
                   fab_peca:fab_peca,
                   fornecedor_peca:fornecedor_peca,
                   estoque_peca:estoque_peca
                };
    localStorage.setItem('peca', JSON.stringify(peca));
    alert('Peça cadastrada com sucesso!');
    });