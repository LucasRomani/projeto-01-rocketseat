const openCookie = document.querySelector('#cookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const playAgain = document.querySelector('#playAgain')
const quoteText = document.getElementById('quoteText')


const apiUrl = 'https://api.quotable.io/random'

openCookie.addEventListener('click', handleCookie)
playAgain.addEventListener('click', handleNewCookie)

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
function handleCookie() {
    toggleScreen()
    newQuote()
}
function handleNewCookie() {
    toggleScreen()
    newQuote()
}

function newQuote(){
// Faz uma solicitação GET para a API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extrai a citação do objeto JSON
    const quote = data.content;
    
    // Insere a citação na tag <p>
    quoteText.innerText = `"${quote}"`;
    console.log(quote)
  })
  .catch(error => {
    console.error('Ocorreu um erro ao recuperar as citações:', error);
  });
}