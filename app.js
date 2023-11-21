// Indenficadores para os Campos relacionados a perfil
const profilePic = document.querySelector('.main .image') // Foto de Perfil
const profileName = document.querySelector('.name') // Nome do Perfil
const profileLogin = document.querySelector('.sub-name') // Login
const profileBio = document.querySelector('.text') // Bio
const profileSeguindo = document.querySelector('#seguindo') // Numero de seguindo
const profileSeguidores = document.querySelector('#seguidores') // Numero de seguidores
const profileRepositories = document.querySelector('#repositorios') // Numero de repositorios
const profileGit = document.querySelector('#icoGit') // Icone do Github

const btnFollow = document.querySelector('#followLink') // Botão grande de Follow

const buscarGithub = (url) =>{
    
    const xhr = new XMLHttpRequest() // Instancia do XMLHttpRequest
    const urls ='https://api.github.com/users/' + encodeURIComponent(url) // Criando a URL com o parametro necessario para a API
                        // Se url que é recebido como parametro for JoseOlinda logo a url sera:
                        // https://api.github.com/users/JoseOlinda             

    xhr.open('GET', urls) // Passando o tipo de protocolo e a URL montada para o XMLHttp

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const github = JSON.parse(xhr.responseText) // Parse monta um objeto em forma de JSON
                
                // Função recebe o objeto github
                montarCard(github);

            } else{
                alert('Erro na requisição!')
            }
        }
    }
    xhr.send()
}

//      Função que contem o mapeamento do campo de pesquisa,
// obtem o valor e retorna.
const obterValor = () =>{
    const inputElement = document.getElementById('user-name-search'); // Recupera o componente de pesquisa pela ID
    const inputValue = inputElement.value; // Armazena os valores que estão no campo/componente

    return inputValue; // Retorno dos valores.
}

//      Função que acessa os componentes da pagina previamente mapeados por const/variaveis
// preenchendo os campos usando o objetvo GITHUB.
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

    // Muda o link do icone github
    profileGit.href = github.html_url

}

const btnMostrar = document.querySelector('#search') // Mapeando o campo onde de pesquisa
btnMostrar.addEventListener('keyup', (e)=>{ //      Criando um gatilho para o campo de pesquisa onde o tipo de evento é "keyup" 
    if(e.keyCode === 13)                    // o enter do teclado tem o codigo "13", então acessando o evento "e" variavel podemos obter
        buscarGithub(obterValor())          // o keyCode e assim saber qual tecla foi pressionada durante o uso do campo de pesquisa.
        
        //      Buscar Github faz o papel de usar a API porem ele precisa de um parametro
        // obterValor() fica como responsavel por mapear e acessar o campo e saber
        // quais valores estão presentes na pesquisa.
})

