import './post.css'
import { useState } from 'react'
import { FaHeart, FaRegHeart} from 'react-icons/fa' // Pacote de icones

function Post({
    titulo,
    imagem,
    conteudo
}){
    const [isLiked, setIsLike] = useState(false)

    return(
        <div className="post">
            <h1 className="header">{titulo}</h1>
            <img src={imagem} alt={titulo} />
            <p className="content">{conteudo}</p>
            <div className='curtidas'>
                <span>0 Curtidas </span>
                { isLiked ? (
                    <FaHeart onClick={()=> setIsLike(false)}/>
                ):(
                    <FaRegHeart onClick={()=> setIsLike(true)}/>
                )}

            </div>
        </div>
    );
}

export default Post