const adicionaItem = (event) => {
    //atribuindo a tag container na variavel container
        let container = document.getElementById("container")

    //atribui funcionalidade de criar um elemento article na var item
    let item = document.createElement("article")
    
    //adiciona a classe item na variavel item
    item.classList.add("item")

    //adiciona o atributo onclick e a funçao remover ao ser clicado na let item
    item.setAttribute('onclick' , 'removeItem(event)')

    //insere a let item, já com a classe e o atributo definido no container
    container.insertAdjacentElement("beforeend" , item)
    }

const removeItem = (event) => {
    event.target.remove()
}