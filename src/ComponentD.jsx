// import { useContext } from 'react';
// import { UserContext } from './ComponentB';
// import ComponentE from './ComponentE';

// function ComponentD () {

//     const Data = useContext(UserContext);

//     return (
//         <div className="box">
//             <img src="./flower image/download (2).jfif" alt="pic1" />
//             <h2>ComponentD</h2>
//             <ComponentE />
//         </div>
//     )
// }

// export default ComponentD;

import { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentE from "./ComponentE";

function ComponentD() {
    const { change1, setChange1 } = useContext(UserContext);
    
    function changecolor() {
        setChange1({backgroundColor: "red"});
    }

    return (
        <div className="box" style={change1}>
            <h2>ComponentD</h2>
            <button onClick={changecolor}>change color</button>
            <ComponentE />
        </div>
    );
}

export default ComponentD;
