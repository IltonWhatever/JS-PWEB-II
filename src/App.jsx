import Post from './components/Post';
import { FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const newPost = {
    id: Math.random() * 1000,
    titulo: 'Novo Post',
    imagem: `https://picsum.photos/200/200?random=${Math.random() * 10}`,
    conteudo: 'Novo Post',
  };

  const [postagens, setPostagens] = useState([
    {
      id: 1,
      titulo: 'Resultado do Sisu 2024',
      imagem: 'https://picsum.photos/200/200?random=1',
      conteudo: 'MEC e INEP liberam resultado do SISU 2024.',
    },
    {
      id: 2,
      titulo: 'Nota de Corte de SI',
      imagem: 'https://picsum.photos/200/200?random=2',
      conteudo:
        'Com nota de corte de 812, SI possui a maior nota de toda região.',
    },
    {
      id: 3,
      titulo: 'Atrasados do Enem',
      imagem: 'https://picsum.photos/200/200?random=3',
      conteudo: 'Após alunos se atrasarem, MEC atrasa a nota',
    },
  ]);

  function apagarPost(postId) {
    setPostagens(postagens.filter((p) => p.id !== postId));
  }

  function addPost() {
    const posts = [...postagens, newPost];
    setPostagens(posts);
  }

  return (
    <div>
      <h1>
        React Blog
        <span>
          <FaFileAlt onClick={addPost} />
        </span>
      </h1>
      <p>Postagens do blog</p>

      {postagens.map((p) => (
        <Post key={p.id} {...p} onDelete={apagarPost} /> // {...p} trata a redudancia de p.titulo = titulo
      ))}
    </div>
  );
}

export default App;
