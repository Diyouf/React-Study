const Modal = (props) => {
  const handleClosebutton = () => {
    props.onClose(false)
  };
  const handleOkAction = () => {
    console.log(`button clicked`)
  }
  return (
    <div className="Modal">
      <h1>Modal Component</h1>
      <button onClick={handleClosebutton}>close </button>
      <button onClick={handleOkAction}>Ok</button>
    </div>
  );
};

export default Modal;
