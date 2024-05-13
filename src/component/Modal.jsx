import ListingComponenent from "./listing";

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
      padding: "20px",
      height: "100vh", // Added to cover the entire viewport height
    }}
  >
    <div
      style={{
        width: "500px",
        height: "200px",
        padding: "20px",
      }}
    >
      <p style={{ textAlign: "center", fontSize: "20px", marginBottom: "20px" }}>
        Modal Component
      </p>
      <button
        onClick={handleClosebutton}
        style={{
          padding: "10px 20px",
          background: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Close
      </button>
      {/* Placing ListingComponent here */}
      <ListingComponenent />
      <button
        onClick={handleOkAction}
        style={{
          padding: "10px 20px",
          background: "#2ecc71",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Ok
      </button>
    </div>
  </div>
  
  
  );
};

export default Modal;
