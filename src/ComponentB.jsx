

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
