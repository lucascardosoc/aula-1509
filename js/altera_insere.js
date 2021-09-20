//pegar o botão para aplicar a acão
document.querySelector('#alterarConteudo').addEventListener('click', () => {
  //pegar o elemento da página terá seu conteúdo alterado
  const novoConteudo = document.querySelector('#conteudo')
  //console.log(novoConteudo)

  //pegar o campo do formulário que terá a nova informacão
  const novaInformacao = document.querySelector('#dados').value
  //console.log(novaInformacao)

  //inserir na div a nova informacão
  novoConteudo.textContent = novaInformacao
  //novoConteudo.innerHTML = novaInformacao; cuidado com seguranca
})

//inserir dados
//recuperar o botão atribuiu o evento
document.querySelector('#insereConteudo').addEventListener('click', () => {
  //recuperar o valor digitado
  const conteudo = document.querySelector('#novosDados').value
  console.log(conteudo)

  //recuperar a div que receberá o novo conteúdo e a nova tag
  const nova = document.querySelector('#novaTag')
  console.log(nova)

  //criar uma tag HTML na div recuperada
  const novaH2 = document.createElement('h2')

  //atribuir o valor digitado e recuperado para o h2 criado
  novaH2.textContent = conteudo

  //adicionar na div o novo elemento h2 com o seu conteúdo
  nova.appendChild(novaH2)
})
