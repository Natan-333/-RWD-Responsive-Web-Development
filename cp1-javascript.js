// RESPONSIVE WEB DEVELOPMENT - CP 4
// BRUNA MENEGATTI VIENNA - RM 96848
// KAUE CAPONERO FIGUEIREDO - RM 96466

const texto = "Início do programa."
document.write(`<h1> ${texto} </h1>`)

document.write(`<h2>Exercício 01: Criar um objeto escola e com os atributos curso, aluno, professor, turma, período coloque os valores dos atributos. Exemplifique e demonstre a saída (15 pontos):
</h2>`)

const escola = [
    {curso: "Responsive Web Development", aluno: "Bruna Menegatti Vienna", professor: "Wellington", turma: "1TDSPR", periodo: "Noite"},
    {curso: "AI & Chatbot", aluno: "Kaue Caponero Figueiredo", professor: "Daniel", turma: "1TDSPR", periodo: "Noite"},
    {curso: "Software Design & Total Experience", aluno: "Mariana Santos", professor: "Allen", turma: "1TDSPR", periodo: "Noite"},
    {curso: "Building Relational Database", aluno: "Guilherme Menegatti", professor: "Marcel", turma: "1TDSPR", periodo: "Noite"},
    {curso: "Computational Thinking Using Python", aluno: "Rodrigo Caponero", professor: "Joseffe", turma: "1TDSPR", periodo: "Noite"},
    {curso: "Domain Driven Design", aluno: "Vinícius Caponero", professor: "Joseffe", turma: "1TDSPR", periodo: "Noite"},
]

const exibeEscola = escola.map( escola =>
    `<b>Curso:</b> ${escola.curso} | <b>Aluno:</b> ${escola.aluno} | <b>Professor:</b> ${escola.professor} | <b>Turma:</b> ${escola.turma} | <b>Período:</b> ${escola.periodo},<br>`).join('');
    console.log(exibeEscola);
    document.write(exibeEscola);

//----------------------------------------------------------------

document.write(`<h2>Exercício 01.A: Crie um método tela aluno estudando e apresente na tela:</h2>`)
document.write(`<h3> Alunos Estudando: </h3>`);

const alunoEstudando = escola.map( escola =>
    `O aluno <b> ${escola.aluno} </b> está estudando o curso de <b> ${escola.curso} </b> com o professor <b> ${escola.professor} </b> na turma <b> ${escola.turma} </b> no período <b> ${escola.periodo} </b>,<br>`).join('');
    console.log(alunoEstudando);
    document.write(alunoEstudando);

//----------------------------------------------------------------

document.write(`<h2>Exercício 01.B: Busque um aluno usando o método find e apresente na tela:</h2>`)
document.write(`<h3> Buscando Aluno Bruna Menegatti Vienna: </h3>`);

const alunoBuscado = escola.find(item => item.aluno === "Bruna Menegatti Vienna");
    console.log(alunoBuscado);
    
    if (alunoBuscado) {
      document.write(`<p>O aluno <b>${alunoBuscado.aluno}</b> está estudando o curso <b>${alunoBuscado.curso}</b> na turma <b>${alunoBuscado.turma}</b>.</p>`);
    } else {
      document.write("Aluno não encontrado.");
    }

//----------------------------------------------------------------

// EXERCÍCIO 02: Crie um objeto funcionários crie um array com os atributos nome, idade, sexo, cargo, salário, descontos, data admissão, data demissão

const funcionarios = [
    {nome: "Zezinho", idade: 42, sexo: "M", cargo: "Faxineiro", salario: 1500, descontos: 150, data_admissao: "01/01/2023", data_demissao: null},
    {nome: "Huguinho", idade: 58, sexo: "M", cargo: "Coordenador", salario: 8500, descontos: 850, data_admissao: "10/06/2008", data_demissao: null},
    {nome: "Mariazinha", idade: 20, sexo: "F", cargo: "Recepcionista", salario: 2000, descontos: 200, data_admissao: "20/05/2014", data_demissao: new Date("2023-02-15")},
];

//----------------------------------------------------------------

document.write(`<h2>Exercício 02.A: Fazer o filter de funcionários que tiveram data de admissão entre 2000 à 2010:</h2>`)
document.write(`<h3>Funcionários admitidos entre 2000 e 2010:</h3>`);

const funcionariosAdmitidos2000_2010 = funcionarios.filter(funcionario => {
    const dataAdmissao = new Date(funcionario.data_admissao);
    const anoAdmissao = dataAdmissao.getFullYear();
    return anoAdmissao >= 2000 && anoAdmissao <= 2010;
  });
  
  console.log(funcionariosAdmitidos2000_2010);
  
  funcionariosAdmitidos2000_2010.forEach(funcionario => {
    document.write(`<p><b>Nome: </b> ${funcionario.nome} | <b> Cargo: </b> ${funcionario.cargo} | <b> Data de admissão: </b> ${funcionario.data_admissao}</p>`);
  });

//----------------------------------------------------------------

document.write(`<h2>Exercício 02.B: Fazer um filter de funcionários que foram demitidos depois de 2018:</h2>`)
document.write(`<h3>Funcionários demitidos após 2018:</h3>`);

const funcionariosDemitidosApos2018 = funcionarios.filter(funcionario => {
    const dataDemissao = new Date(funcionario.data_demissao);
    const anoDemissao = dataDemissao.getFullYear();
    return anoDemissao >= 2018;
  });
  
  console.log(funcionariosDemitidosApos2018);
  
  funcionariosDemitidosApos2018.forEach(funcionario => {
    document.write(`<p><b>Nome: </b> ${funcionario.nome} | <b> Cargo: </b> ${funcionario.cargo} | <b> Data de demissão: </b> ${funcionario.data_demissao}</p>`);
  });

//----------------------------------------------------------------
 
document.write(`<h2>Exercício 02.C: Fazer um map de funcionários e trazer o nome, salário, desconto:</h2>`)
document.write("<h3>Lista de Funcionários:</h3>");
document.write("<table>");
document.write("<b><tr><th>NOME</th><th>SALÁRIO</th><th>DESCONTO</th></tr></b>");

funcionarios.map(funcionario => {
  const { nome, salario, descontos } = funcionario;
  document.write(`<tr><td>${nome}</td><td>${salario}</td><td>${descontos}</td></tr>`);
});

document.write("</table>");

//----------------------------------------------------------------

document.write(`<h2>Exercício 02.D: Criar um Reduce para somar o valor total dos descontos:<h2>`);
document.write(`<h3> Total de Descontos:</h3>`)

const totalDescontos = funcionarios.reduce((acumulador, funcionario) => {
    return acumulador + funcionario.descontos;
}, 0);

console.log(totalDescontos);
document.write(`O Total de descontos é de R$ ${totalDescontos}`)

//----------------------------------------------------------------

document.write(`<h2>Exercício 03: Crie uma função tradicional que some A e B e depois faça a divisão por C e apresente. Agora com o mesmo exemplo crie uma Arrow function para apresentar o mesmo resultado (15 pontos):</h2>`)
document.write(`<h3>Calculo solicitado sendo a=10, b=10 e c=5:</h3> `)

function calculoTr(a, b, c) {
  let soma = a + b;
  let divisao = soma / c;
  return divisao;
 } 


const calculoAf = (a, b, c) => {
  let soma = a + b;
  let divisao = soma / c;
  return divisao;
}

console.log(calculoTr(10,10,5))
document.write(`<b>Função Tradicional:</b> ${calculoTr(10, 10, 5)}<br>`)

console.log(calculoAf(10,10,5))
document.write(`<b>Arrow Function:</b> ${calculoAf(10, 10, 5)}`)

//----------------------------------------------------------------

document.write(`<h2> Exercício 04: Crie uma função tradicional que conte os cliques na página e faça o mesmo
usando Arrow function. Exemplifique e demonstre a saída (15 pontos):</h2>`)
document.write(`<h3>Total de Cliques:</h3>`)
document.write(`<button onclick="contarCliquesTr(); contarCliquesAf()">Clique aqui!</button>
<div id="resultadoTr"></div><div id="resultadoAf"></div>`)

let totalCliquesTr = 0;

function contarCliquesTr() {
  totalCliquesTr++;
  document.getElementById("resultadoTr").innerHTML = `Função Tradicional: O total de cliques no botão foi de ${totalCliquesTr} vezes.`;
}

let totalCliquesAf = 0;

const contarCliquesAf = () => {
  totalCliquesAf++;
  document.getElementById("resultadoAf").innerHTML = `Arrow Function: O total de cliques no botão foi de ${totalCliquesAf} vezes.`;
}

//----------------------------------------------------------------

document.write(`<h2> Exercício 5: Criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6. Exemplifique e demonstre a saída! (15 pontos):</h2>`)

const notas = [6, 8, 3, 7, 4, 7, 9]

const media = (notas) => {
  let soma = 0;
  for (let i = 0; i<notas.length; i++){
    soma += notas[i];
  }
  let resultado = soma / notas.length;
  return resultado;
}

document.write(`Notas: ${notas}<br>`)
document.write(`Média: ${media(notas).toFixed(2)}<br>`)

if (media(notas) >= 6){
  document.write(`Aluno aprovado!`)
}else {
  document.write(`Aluno reprovado!`)
}

//----------------------------------------------------------------

document.write(`<h2>Exercício 6: Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou se houve falha de autenticação. Exemplifique e demonstre a saída! (10 pontos):</h2>`)

const usuarioCadastrado = (`admin`);
const senhaCadastrada = (`1234`);

document.write(`<b>Digite aqui o seu login: </b><br>`);
document.write(`<label for="usuario"><b>USUÁRIO: </b></label>
<input type="text" id="usuario"><br>`);
document.write(`<label for="senha"><b>SENHA: </b></label>
<input type="password" id="senha"><br>`);
document.write(`<button onclick="login()">LOGIN </button>`);
document.write(`<div id="logado"></div>`);

const login = () =>{
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if(usuario == usuarioCadastrado && senha == senhaCadastrada){
    document.getElementById("logado").innerHTML = "<h4>Login Realizado! </h4>"
  }else{
    document.getElementById("logado").innerHTML = "<h4>Login inválido.</h4>"
  }
}

//----------------------------------------------------------------

document.write(`<h2>Exercício 7: Faça um programa que receba a idade de uma pessoa e exiba uma mensagem indicando em qual faixa etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e 60 anos) ou idoso (mais de 60 anos).
Exemplifique e demonstre a saída! (5 pontos):</h2>`)

document.write(`<label for="idade"><b><h3>Digite aqui a sua idade: </h3></b></label>
<input type="text" id="idade"><br>`);
document.write(`<button onclick="verificarIdade()">VERIFICAR </button>`);
document.write(`<div id="verificado"></div>`);

const verificarIdade = () =>{
  let idade = parseInt(document.getElementById("idade").value);

  if(idade <= 12){
    document.getElementById("verificado").innerHTML = "<h4>Criança</h4>"
  }else if(idade>= 13 && idade<= 18){
    document.getElementById("verificado").innerHTML = "<h4>Adolescente</h4>"
  }else if (idade>=19 &&  idade<= 60){
    document.getElementById("verificado").innerHTML = "<h4>Adulto</h4>"
  }else{
    document.getElementById("verificado").innerHTML = "<h4>Idoso</h4>"
  }
}

//----------------------------------------------------------------

document.write(`<h2>Exercício 8: Como usar o operador % em JavaScript? Exemplifique e demonstre a saída! (5 Pontos):</h2>`)

document.write(`<b>Calcule se irá sobrar pedaços de bolo: </b><br>`);
document.write(`<label for="bolo"><b>Pedaços de bolo (total): </b></label>
<input type="text" id="bolo"><br>`);
document.write(`<label for="pessoas"><b>Quantidade por pessoa: </b></label>
<input type="text" id="pessoas"><br>`);
document.write(`<button onclick="calcularResto()">CALCULAR </button>`);
document.write(`<div id="resto"></div>`);

const calcularResto = () =>{
  let bolo = parseInt(document.getElementById("bolo").value);
  let pessoas = parseInt(document.getElementById("pessoas").value);

  let boloPorPessoa = Math.floor(bolo/pessoas);
  let restoBolo = bolo % pessoas;
  const retorno = `<h4>Cada pessoa poderá comer ${boloPorPessoa} pedaços de bolo e sobrarão ${restoBolo} pedaços.</h4>`;

  document.getElementById("resto").innerHTML = retorno;
}