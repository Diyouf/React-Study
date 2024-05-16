import "./App.css";
import Navbar from "./component/Navbar";
import { useState, useEffect } from "react";
import Modal from "./component/Modal";

export default function App() {
  const [Count, setCount] = useState(0);
  const [name, setName] = useState("Diyouf");
  const [ChildData, setChildData] = useState("2");
  const [sum, setsum] = useState(0);
  const [modalAction, setmodalAction] = useState(false);

  useEffect(() => {
    const sum = 10 + Number(ChildData);
    setsum(sum);
    console.log(sum);
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

  const openModal = () => {
    setmodalAction(!modalAction);
  };
  const handleCloseAction = (action) => {
    setmodalAction(action);
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
      <button onClick={decreamentCount}>Decrement</button>
      <button onClick={openModal}>Show Modal</button>
      {modalAction && <Modal onClose={handleCloseAction} />}
      {/* <FormComponent /> */}
    </div>
  );
}
