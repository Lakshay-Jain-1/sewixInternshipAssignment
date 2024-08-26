import Product from "../components/product"
import DialogBox from "../components/dialogBox"
import { useState } from "react"



function Products() {
  
    const [displayDialog, setDisplayDialog] = useState("none")
    const productDetails = {
        img: "./test.jpg",
        title: "Esda Power Saving Motor",
        price: "100"
    }

    const secondproduct = {
        img: "./test.jpg",
        title: "Esda",
        price: "500"
    }


    return (
        <>
            <img onClick={() => setDisplayDialog("block")} style={{ position: "absolute", right: "20px", top: "20px" }} height="60px" width="60px" src="./image.png" />
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", gap: "20px" }}>
              <DialogBox setDisplayDialog={setDisplayDialog} displayDialog={displayDialog} />
                <Product details={productDetails} />
                <Product details={secondproduct} />


            </div>
        </>
    )
}

export default Products