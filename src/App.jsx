import { useState, useEffect } from 'react'
import Product from './components/Product'

function App() {
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    console.log("Searching for Data")
    fetch("https://dummyjson.com/products").then(resp =>{
      console.log("Data is ready")
      if(resp.ok){
        return resp.json()
      }
      throw new Error("Error")
    })
    .then(dados => setProduct(dados))
    .catch(e => console.error(e))

  },[])
  
  return(
    <>
      { product ? (
         product.products.map( (info, idx) => <Product p_info={info}/>)
      ):(
        "Loading..."
      ) }
    </>
  )
  
}

export default App
