import './post.css';
import { useState } from 'react';
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa'; // Pacote de icones

function Post({ id, titulo, imagem, conteudo, onDelete }) {
  const [isLiked, setIsLike] = useState(false);
  const [likes, setLikes] = useState(0);
  const [urlImage, setUrlImage] = useState(imagem);

  function handleLike() {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLike(!isLiked);
  }

  function apagar() {
    onDelete(id);
  }

  function handleNewImage() {
    const novo = Math.random() * 10;
    const newImage = imagem.substring(0, imagem.length - 2) + novo;
    setUrlImage(newImage);
  }

  return (
    <div className="post">
      <h1 className="header">
        {titulo}
        <span id="Trash">
          <FaTrash onClick={apagar} />
        </span>
      </h1>

      <img src={urlImage} alt={titulo} onClick={handleNewImage} />
      <p className="content">{conteudo}</p>
      <div className="curtidas">
        <span>{likes} Curtidas </span>
        {isLiked ? (
          <FaHeart onClick={handleLike} />
        ) : (
          <FaRegHeart onClick={handleLike} />
        )}
      </div>
    </div>
  );
}

export default Post;
