// script.js

const fileUpload = document.getElementById('fileUpload');
const fileName = document.getElementById('fileName');
const uploadForm = document.getElementById('uploadForm');
const uploadStatus = document.getElementById('uploadStatus');

// Exibir nome do arquivo quando selecionado
fileUpload.addEventListener('change', function() {
    if (fileUpload.files.length > 0) {
        let selectedFiles = Array.from(fileUpload.files)
            .map(file => file.name)
            .join(', ');
        fileName.textContent = `Arquivos selecionados: ${selectedFiles}`;
    } else {
        fileName.textContent = 'Nenhum arquivo selecionado.';
    }
});

// Interceptar o envio do formulário para mostrar a mensagem de sucesso
uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    uploadStatus.textContent = 'Arquivos enviados com sucesso!';
    uploadStatus.style.color = 'green';
    
    // Aqui você pode adicionar a lógica para o upload dos arquivos usando backend (por exemplo, Flask ou Node.js)
});


function entrar() {
    alert('Você está sendo redirecionado');
    document.getElementById('carregar').style.display = 'flex';
}