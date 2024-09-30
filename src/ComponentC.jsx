
// import { useState } from "react";
// import { UserContext } from "./ComponentB";
// import ComponentD from "./ComponentD";
// // import { UserContext } from "./ComponentA";
// // import { useContext } from "react";

// function ComponentC () {

//     // const {color, setColor} = useContext(UserContext);

//     const [change, setChange] = useState();

//     function changecolor() {
//         setChange({backgroundColor: "yellow"});
//     }

//     return (
//         <div className="box">
//             <h2>ComponentC</h2>
//             <button onClick={changecolor} style={change}>change color</button>
//             <ComponentD />
//         </div>
//     )
// }

// export default ComponentC;

import { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

function ComponentC() {
    const { bgcolor, setBgcolor } = useContext(UserContext);

    function changeColor() {
        setBgcolor({ backgroundColor: "green", padding: "20px", borderRadius: "5px", border: "none", color: "white" });
    }

    return (
        <div className="box" style={bgcolor}>
            <h2>ComponentC</h2>
            <button onClick={changeColor}>Change Color</button>
            <ComponentD />
        </div>
    );
}

export default ComponentC;
