import { useNavigate } from "react-router-dom"
import Product from "../components/product"


function Products(){
    const navigate = useNavigate()
  
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
        <>
        <img   onClick={() => navigate("/cart")} style={{position:"absolute",right:"20px",top:"20px"}} height="60px" width="60px" src="./image.png"/>
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gap:"20px"}}>
        
        <Product  details = {productDetails} />
        <Product  details = {secondproduct} />
        
        
        </div>
        </>
    )
}

export default Products