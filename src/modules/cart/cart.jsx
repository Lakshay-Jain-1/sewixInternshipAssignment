import { useSelector } from "react-redux"

export default function Cart(){
    const selector = useSelector((state)=>state.addTocart.value)
    return(

        <div style={{border:"10px solid black", width:"70vw",height:"70vh"}}>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <h1>Title</h1>  <h1>Price</h1>
            </div>
           {selector.map(({title,price},index)=>{
          
            return(
                <div key={index} style={{display:"grid",gridTemplateColumns:"auto auto"}}> 
                  <h3>{title}</h3>
                  <h3>{price}</h3>

                </div>
            )
           })}

        </div>
        
        
    )
}