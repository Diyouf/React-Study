import { useState } from "react";

export default function Navbar(props) {
  const [message, setmessage] = useState("");
  

  const handleInputData = (event) => {
    setmessage(event.target.value);
  };

  const sendMessage = () => {
    props.sendMessageToParent(message);
  };

  return (
    <div>
      <p>NavBar</p>
      <p>{props.name}</p>
      <input type="text" value={message} onChange={handleInputData} />
      <button type="submit" onClick={sendMessage}>
        Save
      </button>
    </div>
  );
}
