import { useState } from "react"

function Hello({name="World"}){
     const [age, setAge] = useState(18)
     const [occ, setOcc] = useState("Professor")

    return(
        <>
            <h1>Hello, {name}!</h1>
            <p>Sua idade é {age}</p>
            <p>Sua profissão é {occ}</p>

            <button
                onClick={()=>{
                    setAge(i => ++i)
                }}
            >
                + 1 Ano
            </button>
            
            <button
                onClick={()=>{
                    setAge(i => --i)
                }}        
            >
                - 1 Ano
            </button>

            <input type="text" value={occ} onChange={(e)=>{
                setOcc(e.target.value)
            }}/>
        </>
    )
}

export default Hello
