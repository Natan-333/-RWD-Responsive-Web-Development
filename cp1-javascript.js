// RESPONSIVE WEB DEVELOPMENT - CP 4
// BRUNA MENEGATTI VIENNA - RM 96848
// KAUE CAPONERO FIGUEIREDO - RM 96466

// 
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
// EXERCÍCIO 02.B: 

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
 
document.write(`<h2>Exercício 02.C: Fazer um map de funcionários e trazer o nome, salário, desconto</h2>`)
document.write("<h3>Lista de Funcionários:</h3>");
document.write("<table>");
document.write("<b><tr><th>NOME</th><th>SALÁRIO</th><th>DESCONTO</th></tr></b>");

funcionarios.map(funcionario => {
  const { nome, salario, descontos } = funcionario;
  document.write(`<tr><td>${nome}</td><td>${salario}</td><td>${descontos}</td></tr>`);
});

document.write("</table>");

//----------------------------------------------------------------

document.write(`<h2>Exercício 02.D: Criar um Reduce para somar o valor total dos descontos<h2>`);

document.write(`<h3> Total de Descontos:</h3>`)

const totalDescontos = funcionarios.reduce((acumulador, funcionario) => {
    return acumulador + funcionario.descontos;
}, 0);

console.log(totalDescontos);
document.write(`O Total de descontos é de R$ ${totalDescontos}`)

