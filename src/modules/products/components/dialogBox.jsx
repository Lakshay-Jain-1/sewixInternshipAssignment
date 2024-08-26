
import { useNavigate } from "react-router-dom"
export default function DialogBox({ setDisplayDialog, displayDialog }) {
    const navigate = useNavigate()

    return (

        <div style={{
            display: displayDialog, position: "absolute", top: "30vh", left: "35vw", border: "3px solid black", width: "440px", height: "240px", backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)",
        }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <legend style={{ color: "black" }}>Add your mobile number</legend>
                <button onClick={() => setDisplayDialog("none")}>X</button>
            </div>
            <form onSubmit={() => navigate("/cart")}>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "30px", justifyContent: "center", alignItems: "center", gao: "10px" }}>

                    <input type="number" required />
                    <button type="submit" style={{ width: "120px" }} >Continue</button>

                </div>
            </form>
        </div>


    )
}