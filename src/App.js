import "./App.css";
import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";

export default function App() {
  const [Count, setCount] = useState(0);
  const [name, setName] = useState("Diyouf");
  const [ChildData, setChildData] = useState("2");
  const [sum, setsum] = useState(0);

  useEffect(() => {
    const sum = 10 + Number(ChildData);
    setsum(sum);
    return () => {};
  }, [ChildData]);

  function increamentCount() {
    setCount(Count + 1);
  }

  function decreamentCount() {
    if (Count <= 0) return alert("invalid");

    setCount(Count - 1);
  }

  function changeName() {
    setName("john");
  }

  const handleMessageFromChild = (message) => {
    setChildData(message);
  };

  return (
    <div className="App">
      <Navbar name={name} sendMessageToParent={handleMessageFromChild} />
      <p>{Count}</p>
      <p>{name}</p>
      <h1>{sum}</h1>
      <p>From Child : {ChildData}</p>
      <button onClick={changeName}>change Name</button>
      <button onClick={increamentCount}>Increment</button>
      <button onClick={decreamentCount}>Increment</button>
    </div>
  );
}
