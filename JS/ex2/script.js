let selection
let items = []
const user = prompt('Digite o seu nome')
while (Number(selection) != 3){
    
    
    selection = prompt(`
    Olá ${user}! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `)
    if (Number(selection) >= 1 && Number(selection) <= 3) {
        if (Number(selection == 1 )) {
            let item = prompt("Digite o item da lista")
            items.push(item)
            console.log(items)
        } else if (Number(selection) == 2) {
            if(items.length == 0) {
                alert("Não existem itens cadastrados")
              } else {
                alert(items + " ")
              }
        } else {
            alert("Obrigado pela preferência, Bye bye")
        }
        
    } else {
        alert("Número inválido")
    }
}

