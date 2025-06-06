const btnAdicionar = document.querySelector("#btnAddpensamento");
const menu = document.querySelector("#menu-pensamento");
const btnVoltar = document.querySelector("#btnCancelar");
const btnEnviar = document.querySelector("#btnEnviar");
const muralVazio = document.querySelector("#mural-vazio")
const boxPensamentos = document.querySelector("#container-pensamentos")
const btnEdit = document.querySelector("#btnEdit")
const btnDelete = document.querySelector("#btnDelete")



// abrir form
btnAdicionar.addEventListener('click', function() {
menu.style.display = 'block'
btnAdicionar.style.display = 'none'
});

//fechar 

btnVoltar.addEventListener('click',function() {
btnAdicionar.style.display = 'inline-block';
menu.style.display = 'none';
});

//create

btnEnviar.addEventListener('click', function () {
  const formulario = document.getElementById('formulario')
  document.getElementById('formulario').addEventListener("submit", function(event) {
   event.preventDefault(); 
   

    const pensamento = document.getElementById('pensamento').value;
    const autor = document.getElementById('autor').value;
    // if (!pensamento || !autor) {
    //   alert("Por favor, preencha ambos os campos!");
    //   return; 
    // }
    
    const pensamentoDiv = document.createElement('div');
    const frase = document.getElementById("frase"); 
    frase.appendChild(pensamentoDiv);
     frase.innerHTML = `<strong>Pensamento: </strong>${pensamento}<br> <strong>Autor: </strong> ${autor}`
     frase.classList.add('contentPensamentos')
   
     formulario.reset(); })

   menu.style.display = 'none';
   btnAdicionar.style.display = 'inline-block';

  });
  // // Esconder mural vazio e mostrar container de pensamentos
  // muralVazio.style.display = 'none';
  // boxPensamentos.style.display = 'block';
  // edit
  //  document.getElementById('pensamento').value = '':
  //  document.getElementById('autor').value = '';
      // if (pensamento && autor) {
      //   const pensamentoDiv = document.createElement('div');
      //   pensamentoDiv.classList.add('mural-box');
      //   pensamentoDiv.innerHTML = `${autor}`
      // } else {

      // }
 
btnVoltar.addEventListener('click', function() {
menu.style.display = 'none';
btnAdicionar.style.display = 'inline-block';
  });

 