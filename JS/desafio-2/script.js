

const alunos = {}

function cadastrarAluno(nome, idade, anoSerie, notas){
    function validarNotas(notas) {
        for (let nota in notas) {
          if (notas[nota] > 10) {
            return false; // Retorna false se encontrar uma nota inválida
          }
        }
        return true; // Retorna true se todas as notas forem válidas
      }
    
      if (!validarNotas(notas)) {
        alert("Erro: Uma ou mais notas têm valor maior que 10.");
        return; // Encerra a função sem cadastrar o aluno
      }
    let aluno = {
        nome: nome,
        idade: idade,
        anoSerie: anoSerie,
        notas: {
            nota1: notas.nota1,
            nota2: notas.nota2,
            nota3: notas.nota3,
            nota4: notas.nota4
        }
    }

    let id = Date.now()
    alunos[id] = aluno
    return id
}

function calcularMediaAluno(aluno) {
    let notas = aluno.notas;
    let media = (notas.nota1 + notas.nota2 + notas.nota3 + notas.nota4) / 4;
    return media;
}

function verificarAprovacao(media) {
    return media >= 6 ? "Aprovado" : "Reprovado";
}

while(true){

let menu = prompt(`
    1 - Cadastrar aluno
    2 - Médias dos alunos
    3 - Sair
`)

if (Number(menu) == 1) {
    let nome = prompt('Nome do aluno:')
    let idade = prompt('Idade do aluno:')
    let anoSerie = prompt('Qual o ano de série do aluno')

    let notas = {}
    notas.nota1 = parseFloat(prompt("Digite a nota 1:"))
    notas.nota2 = parseFloat(prompt("Digite a nota 2:"))
    notas.nota3 = parseFloat(prompt("Digite a nota 3:"))
    notas.nota4 = parseFloat(prompt("Digite a nota 4:"))

    let id = cadastrarAluno(nome, idade, anoSerie, notas)
    if (id !== undefined) {
        alert(`Aluno ${nome} cadastrado com sucesso! (ID: ${id})`)
      }
} else if (Number(menu) == 2) {
    let listaMediasAprovacao = "";
    for (let id in alunos) {
      let aluno = alunos[id]
      let media = calcularMediaAluno(aluno);
      let situacao = verificarAprovacao(media);
      listaMediasAprovacao += `${aluno.nome}: Média ${media.toFixed(2)} - ${situacao}\n`;

    }

    alert(`Médias e situação dos alunos:\n${listaMediasAprovacao}`);

} else if (Number(menu) == 3 ) {
    break;
} else {
    alert("Opção inválida")
}  
}