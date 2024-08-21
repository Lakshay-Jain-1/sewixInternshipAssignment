import Product from "../product"


function Products(){
  
    const productDetails ={
        img:"./test.jpg",
        title:"Esda Power Saving Motor",
        price:"100"
    }

    const secondproduct ={
        img:"./test.jpg",
        title:"Esda",
        price:"500"
    }


    return(
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"20px"}}>
        
        <Product  details = {productDetails} />
        <Product  details = {secondproduct} />
        
        
        </div>
    )
}

export default Products