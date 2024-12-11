// import World from "./World";
// import styles from"./Hello.module.css";

import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    // function showName() {
    //     console.log("Mike");
    // }

    // function showAge(age) {
    //     console.log(age);
    // }

    // // function showText(e) {
    // function showText(txt) {
    //     // console.log(e.target.value);
    //     console.log(txt);
    // }

    // let name = "Mike";

    // function changeName() {
    //     // const newName = name === "Mike" ? "Jane" : "Mike";
    //     // setName(newName);
    //     setName(name === "Mike" ? "Jane" : "Mike");
    // }

    // console.log(props);
    const [name, setName] = useState("Mike");
    // 컴포넌트 내에서 다시 값을 변경할 떄
    // const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

    return (
        <div>
            {/* <h1>state</h1> */}
            {/* <h2>{name} 컴포넌트의 속성값</h2> */}
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            {/* <button onClick={changeName}>Change</button> */}
            <UserName name={name} />
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
                // setAge(age + 1);
            }}>Change</button>

            {/* <h1>Hello</h1> */}
            {/* <button onClick={showName}>Show Name</button>
            <button 
                onClick={() => {
                    // console.log(30);
                    showAge(10);
                }}
            >
                Show Age
            </button>
            
            <input 
                type="text" 
                onChange={e => {
                    // console.log(e.target.value);
                    const txt = e.target.value;
                    showText(txt);
                }}
            /> */}
            {/* <input type="text" onChange={showText}/> */}

            {/* <h1 style={
                {
                    color: "#f00",
                    borderRight: "12px solid #000",
                    marginBottom: "50px",
                    opacity: 1
                }
            }>Hello</h1>
            <div className={styles.box}>Hello</div> */}
            {/* <World />
            <World /> */}
        </div>
    )
}