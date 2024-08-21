import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
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
    
async function makePayment(value) {
    try {
      const stripe = await loadStripe("pk_test_51P4Re4SDWrf3hkbmaX3NUTFClY7nXhJQmHKbFIYvom0OI65Tlbt7hl2SnnQsRN5bhGASUwqIoZzmVAU25L6v81f900CwOREFob"); // Use environment variables
  
      const body = { total: value }; // Dynamic value instead of hardcoded total
  
      const headers = {
        "Content-Type": "application/json",
      };
  
      const response = await fetch('https://sewixbackend.onrender.com/makepayment', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error("Payment failed");
      }
  
      const session = await response.json();

  
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    
  
    } catch (error) {
      console.error("Error making payment:", error);
    }
  }

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
           <button onClick={()=>makePayment(total)}>PAY NOWW</button>
           </div>


        </div>
        
        
    )
}