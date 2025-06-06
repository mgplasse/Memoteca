const btnAdicionar = document.querySelector("#btnAddpensamento");
const menu = document.querySelector("#menu-pensamento");
const btnVoltar = document.querySelector("#btnCancelar");
const btnEnviar = document.querySelector("#btnEnviar");
const muralVazio = document.querySelector("#mural-vazio");
const boxPensamentos = document.querySelector("#container-pensamentos");
const formulario = document.getElementById('formulario');
const inputPensamento = document.getElementById('pensamento');
const inputAutor = document.getElementById('autor');

let pensamentos = []; // Array para armazenar os pensamentos
let editando = false;
let idEditando = null;

// Abrir formulário
btnAdicionar.addEventListener('click', function() {
    menu.style.display = 'block';
    btnAdicionar.style.display = 'none';
});

// Fechar formulário (Cancelar)
btnVoltar.addEventListener('click', function() {
    menu.style.display = 'none';
    btnAdicionar.style.display = 'inline-block';
    formulario.reset();
    editando = false;
    idEditando = null;
});

// Enviar/Editar pensamento
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const pensamento = inputPensamento.value;
    const autor = inputAutor.value;

    if (pensamento.trim() === '' || autor.trim() === '') {
        alert('Preencha todos os campos!');
        return;
    }

    if (editando) {
        // Atualiza o pensamento existente
        pensamentos[idEditando] = { pensamento, autor };
        editando = false;
        idEditando = null;
    } else {
        // Adiciona novo pensamento
        pensamentos.push({ pensamento, autor });
    }

    renderizarPensamentos();
    formulario.reset();
    menu.style.display = 'none';
    btnAdicionar.style.display = 'inline-block';
});

// Renderiza os pensamentos no mural
function renderizarPensamentos() {
    const frase = document.getElementById("frase");
    frase.innerHTML = '';

    if (pensamentos.length === 0) {
        muralVazio.style.display = 'block';
        return;
    } else {
        muralVazio.style.display = 'none';
    }

    pensamentos.forEach((pensamento, index) => {
        const pensamentoDiv = document.createElement('div');
        pensamentoDiv.classList.add('pensamento-item');
        pensamentoDiv.innerHTML = `
            <div class="pensamento-content">
                <p><strong>Pensamento:</strong> ${pensamento.pensamento}</p>
                <p><strong>Autor:</strong> ${pensamento.autor}</p>
            </div>
            <div class="pensamento-botoes">
                <button class="btn-editar" data-id="${index}">Editar</button>
                <button class="btn-excluir" data-id="${index}">Excluir</button>
            </div>
        `;
        frase.appendChild(pensamentoDiv);
    });

    // Adiciona eventos aos botões de editar e excluir
    document.querySelectorAll('.btn-editar').forEach(btn => {
        btn.addEventListener('click', editarPensamento);
    });

    document.querySelectorAll('.btn-excluir').forEach(btn => {
        btn.addEventListener('click', excluirPensamento);
    });
}

// Editar pensamento
function editarPensamento(event) {
    const id = event.target.getAttribute('data-id');
    const pensamento = pensamentos[id];

    inputPensamento.value = pensamento.pensamento;
    inputAutor.value = pensamento.autor;

    editando = true;
    idEditando = id;

    menu.style.display = 'block';
    btnAdicionar.style.display = 'none';
}

// Excluir pensamento
function excluirPensamento(event) {
    const id = event.target.getAttribute('data-id');
    pensamentos.splice(id, 1);
    renderizarPensamentos();
}

// Inicializa o mural
renderizarPensamentos();