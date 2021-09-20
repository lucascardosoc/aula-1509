//variáveis
//não são tipáveis - Tipagem automática

//forma mais antiga de declaracão
var nomeUsuario = 'Lucas Cardoso'
console.log(nomeUsuario)

nomeUsuario = 'Eu mesmo'
console.log(nomeUsuario)

//forma atual
let idade = 50
console.log(idade)

let email = 'lucas.cardosopessoal@hotmail.com'
console.log(email)

let dataAtual = '15/09/2021'
console.log(dataAtual)

let chuva = true
console.log(chuva)

//tipo da variável
console.log(typeof nomeUsuario)
console.log(typeof idade, idade)
console.log(typeof chuva)

idade = 'abc'
console.log(typeof idade, idade)

const dataNascimento = '02/11/86'
console.log(dataNascimento)

//Evitar no JS
console.log('Olá sou o ' + nomeUsuario + ' meu email é ' + email)

//template string - USAR O APÓSTROFE `EMPLATE AQUI DENTRO`
console.log(`Olá ${nomeUsuario} seu email é: ${email} ???`)

//cálculos

let n1 = 2
let n2 = 5
console.log(`${n1} + ${n2} = ${n1 + n2}`)
console.log(`${n1} - ${n2} = ${n1 - n2}`)
console.log(`${n1} * ${n2} = ${n1 * n2}`)
console.log(`${n1} / ${n2} = ${n1 / n2}`)

{
  ()
}