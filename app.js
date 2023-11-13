const buscarDoguinho = (e) =>{
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thedogapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const dogs = JSON.parse(xhr.responseText)
                dogs.forEach(dog => {
                    const img = document.createElement('img')
                    img.src = dog.url
                    document.querySelector('#Doguinhos').appendChild(img)
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
