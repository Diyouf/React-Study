const Modal = (props) => {
  const handleClosebutton = () => {
    props.onClose(false);
  };
  const handleOkAction = () => {
    console.log(`button clicked`);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "yellow",
          width: "200px",
          height: "200px",
          display: "inline-block",
          justifyContent: "center",
        }}
      >
          <p>Modal Component</p>
          <button onClick={handleClosebutton}>close</button>
        <div>
         
        <button onClick={handleOkAction}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
