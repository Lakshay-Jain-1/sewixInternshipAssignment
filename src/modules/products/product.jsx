
import { useDispatch } from "react-redux"
import { add } from "../../store/addToCart"
function Product({details}){
   const dispatch = useDispatch()
    return (
        <div style={{border:"5px solid white",padding:"12px" , minWidth:"300px"}}>
         <img src={details.img} height="130px" />
         <h3>{details.title}</h3>
         <h4>{details.price}</h4>
         <button onClick={()=>dispatch(add(details))}  >ADD to cart </button>
        
        </div>
    )
}

export default Product