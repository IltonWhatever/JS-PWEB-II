import { useState } from "react"

function Aluno({name, nota=0}){
    const [notaIndividual, setnotaIndividual] = useState(nota)

    function handleNotaIndividual(e){
        let n = e.target.value
        
        n = n < 0 ? 0.0 : n 
        n = n > 10 ? 10.0 : n

        setnotaIndividual(n)
    }

    return(
        <div>
            <span>{name} </span>
            <input 
                value= {notaIndividual} 
                type="number" 
                step="0.1" 
                min='0' 
                max='10'
                onChange={handleNotaIndividual}    
            />
        </div>
    )
}

export default Aluno