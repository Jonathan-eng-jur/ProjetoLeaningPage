/*
para Acessar o DOM
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por seletor: quarySelector() necessário usar ###
*/

let nome = window.document.getElementById('nome')
let email = window.document.querySelector("#email")
let assunto = window.document.querySelector("#assunto")
let mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
   let txtNome = document.querySelector("#txtNome")
   if (nome.value.length < 1) {
      txtNome.innerHTML = "Nome Inválido"
      txtNome.style.color = "red"
   } else {
      txtNome.innerHTML = "Nome válido"
      txtNome.style.color = "green"
      nomeOk = true
   }

}

function validaEmail() {
   let txtEmail = document.querySelector("#txtEmail")
   if (email.value.indexOf("@") == -1
   ) {
      txtEmail.innerHTML = "E-mail Inválido"
      txtEmail.style.color = "red"
   } else if (email.value.indexOf(".") == -1) {
      txtEmail.innerHTML = "E-mail Inválido"
      txtEmail.style.color = "red"
   }
   else {
      txtEmail.innerHTML = "E-mail válido"
      txtEmail.style.color = "green"
      emailOk = true
   }

}

function validaAssunto() {
   let txtAssunto = document.querySelector('#txtAssunto')

   if (assunto.value.length >= 100) {
      txtAssunto.innerHTML = 'Poxa :( seu texto é muito grande, digite no máximo 100 caracteres'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
   } else {
      txtAssunto.style.display = 'none'
      assuntoOk = true
   }
}

function enviar() {
   if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert('Formulário enviado com sucesso!')
   } else {
      alert('Preencha o formulário corretamente antes de enviar!')
   }
}

function mapaZoom() {
   mapa.style.width = '800px'
   mapa.style.height = '600px'
}

function mapaNormal() {
   mapa.style.width = '400px'
   mapa.style.height = '250px'
}