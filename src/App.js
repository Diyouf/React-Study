import "./App.css";
import Navbar from "./component/Navbar";
import { useState } from "react";

export default function App() {
  const [Count, setCount] = useState(0);
  const [name, setName] = useState("Diyouf");

  function increamentCount() {
    setCount(Count + 1);
  }

  function decreamentCount() {
    if (Count <= 0) return alert("Invalid");

    setCount(Count - 1);
  }

  function changeName() {
    setName("john");
  }
  return (
    <div className="App">
      <Navbar name={name} />
      <p>{Count}</p>
      <p>{name}</p>
      <button onClick={changeName}>change Name</button>
      <button onClick={increamentCount}>Increment</button>
      <button onClick={decreamentCount}>Increment</button>
    </div>
  );
}
