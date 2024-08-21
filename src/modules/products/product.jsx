


function Product({details}){

    return (
        <div style={{border:"5px solid white",padding:"12px"}}>
         <img src={details.img} height="130px" />
         <h3>{details.title}</h3>
         <h4>{details.price}</h4>
         <button>ADD to cart </button>
        
        </div>
    )
}

export default Product