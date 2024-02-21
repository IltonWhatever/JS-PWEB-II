function Product( { p_info } ){
    return (
        <div className="product">
            <div className="left">
                <img id="draft" src={p_info.thumbnail} alt="" />
                <ul id="images">
                    { p_info.images.map(
                        (img, idx) => <li key={idx}> <img src={img} alt=""/> </li>
                    )}
                </ul>
            </div>
            <div className="right">
                <h1>{p_info.title}</h1>
                <h2>R$ {p_info.price}</h2>
                <p>{p_info.description}</p>
                <a href="#">Compre Agora</a>
            </div>
        </div>
    )
};

export default Product;