import { useState } from 'react'

function App() {
  // Higão ajudou >.>
  
  const vergonha = "https://media.tenor.com/-RIgatxz-KkAAAAC/cachorro.gif";
  const desconfia = "https://media.tenor.com/KmNw9Xs-Uf4AAAAd/dog-cachorro.gif";

  const [url, setUrl] =  useState(desconfia);

  return (
    <div>
      <h1>Primeira Aplicação Teste</h1>
      <h2>José Ilton da Silva Filho</h2>
      <img src={url} alt="Cachorro" onClick={() =>{
        if (url === desconfia){
          setUrl(vergonha);
        }else{
          setUrl(desconfia);
        }
      }} />
    </div>
  )
}

export default App
