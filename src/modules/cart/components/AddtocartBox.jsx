import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useState } from "react"
export default function Cart(){
    const selector = useSelector((state)=>state.addTocart.value)
    const [total ,setTotal] =useState(0)
    useEffect(()=>{
        let sum = 0
        selector.forEach((ele)=>{
           sum+=Number(ele.price)
        })
        setTotal(sum)
    },[])

    return(

        <div style={{border:"10px solid black", width:"70vw",marginTop:"20px"}}>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <h1>Title</h1>  <h1>Price</h1>
            </div>
            <div  style={{display:"grid",gridTemplateColumns:"auto "}}> 
           {selector.map(({title,price},index)=>{
          
            return(
                <div key={index} style={{display:"flex" ,justifyContent:"space-evenly"}}> 
                  <h3 style={{width:"230px"}}>{title}</h3>
                  <h3>{price}</h3>

                </div>
            )
           })}
           </div>
           <div style={{display:"flex",justifyContent:"space-around"}}>
           <h3>Total {total}   </h3>
           <button>PAY NOWW</button>
           </div>


        </div>
        
        
    )
}