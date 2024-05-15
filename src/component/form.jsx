import { useState } from "react";
import { useForm } from "react-hook-form"
const FormComponent = () => {
  const [data, setData] = useState();
  const { register, handleSubmit } = useForm();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        
      }}
    >
      <form
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "100px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <label htmlFor="username" style={{ marginBottom: "10px" }}>
          Username:
          <input
            type="text"
            id="username"
            {...register("username")}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>
        <label htmlFor="password" style={{ marginBottom: "20px" }}>
          Password:
          <input
            type="password"
            id="password"
            {...register("password")}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      <h2>{data}</h2>
    </div>
  );
};

export default FormComponent;
