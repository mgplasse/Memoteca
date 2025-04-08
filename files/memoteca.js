const btnAdicionar = document.querySelector("#btnAddpensamento");
const menu = document.querySelector("#menu-pensamento");
const btnVoltar = document.querySelector("#btnCancelar");
const btnEnviar = document.querySelector("#btnEnviar");
const muralVazio = document.querySelector("#mural-vazio")
const boxPensamentos = document.querySelector("#container-pensamentos")




// abrir form
btnAdicionar.addEventListener('click', function() {
menu.style.display = 'block'
btnAdicionar.style.display = 'none'
});

//fechar 

btnVoltar.addEventListener('click',function() {
btnAdicionar.style.display = 'none';
menu.style.display = 'block';
});

//create

btnEnviar.addEventListener('click', function () {
   document.getElementById('formulario').addEventListener("submit", function(event) {
   event.preventDefault(); 
   
    const pensamento = document.getElementById('pensamento').value;
    const autor = document.getElementById('autor').value;
    
    const pensamentoDiv = document.createElement('div');
    const frase = document.getElementById("frase"); 
    frase.appendChild(pensamentoDiv);
     frase.innerHTML = `<strong>Pensamento: </strong>${pensamento}<br> <strong>Autor: </strong> ${autor}`
     frase.classList.add('contentPensamentos')
   })
   menu.style.display = 'none';
   btnAdicionar.style.display = 'inline-block';
   
  //  document.getElementById('pensamento').value = '':
  //  document.getElementById('autor').value = '';
      // if (pensamento && autor) {
      //   const pensamentoDiv = document.createElement('div');
      //   pensamentoDiv.classList.add('mural-box');
      //   pensamentoDiv.innerHTML = `${autor}`
      // } else {

      // }


  




  });

btnVoltar.addEventListener('click', function() {
menu.style.display = 'none';
btnAdicionar.style.display = 'inline-block';
  });

 