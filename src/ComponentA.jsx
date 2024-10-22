
import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("Free Fire");
    const [bgcolor, setBgcolor] = useState({ backgroundColor: "yellow", padding: "20px", borderRadius: "5px", border: "none", color: "red" });
    const [change, setChange] = useState({backgroundColor: ""});
    const [change1, setChange1] = useState({backgroundColor: ""});

    return (
        <div className="box" style={bgcolor}>
            <h2>ComponentA</h2>
            <h2>{`I like ${user} game...`}</h2>
            <UserContext.Provider value={{ user, setUser, bgcolor, setBgcolor, change, setChange, change1, setChange1}}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;
