// import { createContext, useState } from "react";
// import ComponentC from "./ComponentC";

// export const UserContext = createContext();

// function ComponentB () {

//     const [color, setColor] = useState({backgroundColor: "red"});

//     function colorchangedata () {
//         setColor({backgroundColor: "blue"});
//     }

//     return (
        
//         <div className="box" style={color} onChange={colorchangedata}>
//             <h2>ComponentB</h2>
//             <ComponentC />
//         </div>
//     )
// }

// export default ComponentB;

import { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./ComponentA";

function ComponentB() {
    
    const { change, setChange } = useContext(UserContext);


    function changecolor() {
        setChange({backgroundColor: "orange"});
    }

    return (
        <div className="box" style={change}>
            <h2>ComponentB</h2>
            <button onClick={changecolor}>color change</button>
            <ComponentC />
        </div>
    );
}

export default ComponentB;
