const paragrafo = document.querySelector('p.hero')

// Crio o botão na memoria, porem ele não vai aparecer na tela ainda
const botao = document.createElement('button')

const link = document.createElement('a')
link.innerHTML = "trss"
link.href = 'https://google.com.br'

botao.innerHTML = 'ok'

// Usando o botão criado na memoria para exibir na tela
paragrafo.appendChild(botao)
paragrafo.appendChild(link)

// Atributo ajustado de forma que gera uma falha de segurança
link.setAttribute('style', 'font-size: 52px')
// Jeito correto de alterar um atributo
link.style.color = '#F09'