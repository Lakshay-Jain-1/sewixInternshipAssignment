import { useNavigate } from "react-router-dom";
import Cart from "../components/AddtocartBox";

export default function CartPage() {
    const navigate = useNavigate()
    return (
        <>
        
            <button style={{ position: "absolute", top: "10px", left: "0px" }} onClick={() => navigate("/")}>Back to home page</button>
            <Cart />
        </>
    )
}