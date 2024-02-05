import { useState } from "react";

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault(); // Previne o recarregamento da página
        console.log('Nome: ', nome, 'Email: ', email);
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input 
                    type="text"
                    id="nome" 
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormularioCadastro