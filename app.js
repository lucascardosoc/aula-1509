//recuperar o tbody para depois criar as linhas e colunas com as informacões digitadas
const tbody = document.querySelector('tbody')

//recuperar o formulário e logo em seguida cancelar o evento padrão do form(submit)
document.querySelector('form').addEventListener('submit', function (event) {
  //cancelo o evento padrão
  event.preventDefault()

  //recuperar os campos formulário
  const campos = [
    document.querySelector('#usuario'),
    document.querySelector('#email'),
    document.querySelector('#dataCadastro'),
    document.querySelector('#tipoConta')
  ]

  //console.log(campos)

  //criar uma tr para receber as colunas que serão criadas logo em seguida
  const tr = document.createElement('tr')

  //criar um foreach para percorrer o Array e para cada ocorrência ele cria uma td
  campos.forEach(campo => {
    //criar a td
    const td = document.createElement('td')

    //passar o valor que estiver naquela ocorrência para a td
    td.textContent = campo.value

    //adicionar a td na tr
    tr.appendChild(td)
  })

  //inserindo a tr criada com as respectivas tds no tbody
  tbody.appendChild(tr)

  //limpar campos
  this.reset()

  //dar foco no primeiro campo cursor ficará nele
  campos[0].focus()
})
