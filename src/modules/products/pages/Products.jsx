import Product from "../product"


function Products(){
  
    const productDetails ={
        img:"./test.jpg",
        title:"Esda Power Saving Motor",
        price:"100"
    }

    return(
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"20px"}}>
        
        <Product  details = {productDetails} />
        <Product  details = {productDetails} />
        <Product  details = {productDetails} />
        <Product  details = {productDetails} />
        
        </div>
    )
}

export default Products