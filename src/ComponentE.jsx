// import { useContext, useState } from "react";
// import ComponentA, { UserContext } from "./ComponentA";



// function ComponentE () {
//     const {user, setUser} = useContext(UserContext);

//     const [bgcolor, setBgcolor] = useState({backgroundColor: "yellow", padding: "20px 20px", bordrRadius: "5px", Border: "none", color: "red"});

    

//     function ChangeData () {
//         setUser("Pubg"); 
//         setBgcolor({backgroundColor: "blue",padding: "20px 20px", bordrRadius: "5px", Border: "none", color: "red" }); 
//     }
    

//     return (
//         <>
//         <div className="box">
//             <h6>ComponentE</h6>
//         {/* <p>{user}</p> */}
//         <button onClick={ChangeData} style={bgcolor}>change value</button>
//         </div>
//         </>
        
//     )
// }

// export default ComponentE;


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
