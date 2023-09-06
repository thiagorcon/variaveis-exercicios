let nome = prompt('Informe seu nome')
let nasc = prompt('Informe sua data de nascimento')
let end = prompt('Informe seu endereço')
let cpf = Number(prompt('Informe seu CPF'))
let escola = prompt('Informe grau de escolaridade')
let cnh = Number(prompt('Informe sua cnh'))
let filhos = Number(prompt('Informe quantos filhos voce tem'))
let cargo = prompt('Informe seu cargo')
let salario = Number(prompt('Informe seu salario'))
let comissao = confirm('voce recebe comissão?')
let admissao = prompt('Informe sua data de admissão') 
console.log(typeof nome);
console.log(typeof nasc);
console.log(typeof end);
console.log(typeof cpf);
console.log(typeof escola);
console.log(typeof cnh);
console.log(typeof filhos);
console.log(typeof cargo);
console.log(typeof salario);
console.log(typeof comissao);
console.log(typeof admissao);
console.log('------------------');
console.log(`Informe seu nome : ${nome}`);
console.log(`Informe sua data de nascimento : ${nasc}`);
console.log(`Informe seu CPF : ${cpf}`);
console.log(`Informe sua cnh : ${cnh}`);
console.log(`Informe quantos filhos voce tem : ${filhos} filhos`);
console.log(`Informe seu cargo : ${cargo}`);
console.log(`Informe seu salario : ${parseFloat(salario)}`);
console.log(`voce recebe comissão? : ${comissao}`);
console.log(`Informe sua data de admissão : ${admissao}`);