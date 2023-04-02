// RESPONSIVE WEB DEVELOPMENT - CP 4
// BRUNA MENEGATTI VIENNA - RM 96848
// KAUE CAPONERO FIGUEIREDO - RM 96466

// EXERCÍCIO 01:

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
    document.write(exibeEscola + `<br></br>`);


const alunoEstudando = escola.map( escola =>
    `O aluno <b> ${escola.aluno} </b> está estudando o curso de <b> ${escola.curso} </b> com o professor <b> ${escola.professor} </b> na turma <b> ${escola.turma} </b> no período <b> ${escola.periodo} </b>,<br>`).join('');
    console.log(alunoEstudando);
    document.write(alunoEstudando + `<br></br>`);



