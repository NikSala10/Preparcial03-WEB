import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState<"admin" | "user" | "">("");

  const handleLogin = () => {
    if (!name.trim()) {
      alert("Debes escribir tu nombre");
      return;
    }

    if (role === "") {
      alert("Debes seleccionar un rol");
      return;
    }

    // Guardar todo el usuario en Redux
    dispatch(
      setUser({
        name,
        role,
      })
    );

    navigate("/home");
  };

  return (
    <div>
      <h1>Bienvenido</h1>

      {/* NAME */}
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* ROLE */}
      <div style={{ marginTop: 16 }}>
        <p>Elige tu rol:</p>

        <label>
          <input
            type="radio"
            name="role"
            value="user"
            checked={role === "user"}
            onChange={() => setRole("user")}
          />
          Usuario
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={role === "admin"}
            onChange={() => setRole("admin")}
          />
          Admin
        </label>
      </div>

      {/* BUTTON */}
      <button
        type="button"
        onClick={handleLogin}
        style={{ marginTop: 16 }}
      >
        Ingresar
      </button>
    </div>
  );
};

export default Login;
