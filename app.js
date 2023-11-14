const buscarDoguinho = (e) =>{
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thedogapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const dogs = JSON.parse(xhr.responseText)
                dogs.forEach(dog => {
                    const figure = document.createElement('figure')
                    const img = document.createElement('img')
                    let figcaption = document.createElement('figcaption')

                    img.src = dog.url
                    figcaption.textContent = `Altura: ${dog.width} Largura: ${dog.height}`
                    document.querySelector('#Doguinhos').appendChild(figure)
                    figure.appendChild(img)
                    figure.appendChild(figcaption)
                })
            } else{
                alert('Erro na requisição!')
            }
        }
    }
    xhr.send()
    window.scrollTo(0, document.body.scrollHeight);
} 

const btnMostrar = document.querySelector('#mostrar-dogs')
btnMostrar.addEventListener('click', buscarDoguinho)