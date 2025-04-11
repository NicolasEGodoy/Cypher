// Espera o DOM estar completamente carregado antes de adicionar o evento
document.addEventListener('DOMContentLoaded', function () {
    
    // Adiciona o evento submit ao formulário (não ao botão)
    document.getElementById('userForm').addEventListener('submit', function(event){
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página

        // Coleta os valores dos campos
        const nome = document.getElementById('inputName').value;
        const username = document.getElementById('inputUsername').value;

        const cep = document.getElementById('inputCEP').value;
        const rua = document.getElementById('inputRua').value;
        const bairro = document.getElementById('inputBairro').value;
        const numero = document.getElementById('inputNumero').value;
        const complemento = document.getElementById('inputComplemento').value;

        const sexo = document.getElementById('inputSexo').value;
        const nascimento = document.getElementById('inputDate').value;
        const celular = document.getElementById('inputPhone').value;
        const email_cadastro = document.getElementById('inputEmail').value;
        const senha_cadastro = document.getElementById('inputSenha').value;

        // Cria um objeto com os dados coletados
        const formData = {
            nome: nome,
            username: username,
            cep: cep,
            rua: rua,
            bairro: bairro,
            complemento: complemento,
            nascimento: nascimento,
            celular: celular,
            email_cadastro: email_cadastro,
            senha_cadastro: senha_cadastro
        };

        // Exibe os dados no console e com o alert
        console.log("Dados Enviados", formData);
        alert(`Dados Enviados:\nNome: ${nome}\nUsername: ${username}\nCEP: ${cep}\nRua: ${rua}\nBairro: ${bairro}\nNumero: ${numero}\nComplemento: ${complemento}\nSexo: ${sexo}\nNascimento: ${nascimento}\nCelular: ${celular}\nEmail: ${email_cadastro}\nSenha: ${senha_cadastro}`);
    });

    // Salva os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Usuário Cadastrado Com Sucesso!');
    
});
