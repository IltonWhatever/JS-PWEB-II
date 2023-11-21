// Indenficadores para os Campos relacionados a perfil
const profilePic = document.querySelector('.main .image') // Foto de Perfil
const profileName = document.querySelector('.name') // Nome do Perfil
const profileLogin = document.querySelector('.sub-name') // Login
const profileBio = document.querySelector('.text') // Bio
const profileSeguindo = document.querySelector('#seguindo') // Numero de seguindo
const profileSeguidores = document.querySelector('#seguidores') // Numero de seguidores
const profileRepositories = document.querySelector('#repositorios') // Numero de repositorios

const btnFollow = document.querySelector('#followLink')

const buscarGithub = (url) =>{
    
    const xhr = new XMLHttpRequest()
    const urls ='https://api.github.com/users/' + encodeURIComponent(url)

    xhr.open('GET', urls)

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const github = JSON.parse(xhr.responseText)
                
                // Função recebe o objeto github
                montarCard(github);

            } else{
                alert('Erro na requisição!')
            }
        }
    }
    xhr.send()
}

const obterValor = () =>{
    const inputElement = document.getElementById('user-name-search');
    const inputValue = inputElement.value;

    return inputValue;
}

const montarCard = (github) =>{
    // Altera o background da Imagem do card
    profilePic.style.backgroundImage = `url(${github.avatar_url})`

    // Altera o nome principal
    profileName.innerHTML = github.name
    
    // Altera o login
    profileLogin.innerHTML = github.login

    // Altera a Bio
    profileBio.innerHTML = github.bio

    // Altera os seguindo
    profileSeguindo.innerHTML = github.following

    // Altera os seguidores
    profileSeguidores.innerHTML = github.followers

    // Altera o numero de repositorios
    profileRepositories.innerHTML = github.public_repos

    // Muda o link para o link do github
    btnFollow.href = github.html_url
}

const btnMostrar = document.querySelector('#search')
btnMostrar.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13)
        buscarGithub(obterValor())
})

