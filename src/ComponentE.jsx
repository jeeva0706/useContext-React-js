

import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentE() {
    const { user, setUser, bgcolor, setBgcolor } = useContext(UserContext);

    function ChangeData() {
        setUser("Pubg");
        setBgcolor({ backgroundColor: "blue", padding: "20px", borderRadius: "5px", border: "none", color: "white" });
    }

    return (
        <div className="box" style={bgcolor}>
            <h2>ComponentE</h2>
            <button onClick={ChangeData}>Change Game & Color</button>
        </div>
    );
}

export default ComponentE;
