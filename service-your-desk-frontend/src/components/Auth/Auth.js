import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/UserContext";
import "./Auth.css";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });
    const [error, setError] = useState(null);
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const url = isLogin ? "http://localhost:8080/api/auth/login" : "http://localhost:8080/api/auth/signup";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Something went wrong");

            if (isLogin) {
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data); // this updates the navbar
                console.log(data)
                toast.success("Login successful!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: { background: "#007bff", color: "#fff" },
                });
                setTimeout(() => navigate("/"), 2000); 
            } else {
                toast.success("Signup successful! Please login.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: { background: "#007bff", color: "#fff" }, 
                });
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <ToastContainer /> 
            <h2>{isLogin ? "Login" : "Signup"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                )}
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <button type="submit">{isLogin ? "Login" : "Signup"}</button>
            </form>
            {error && <p className="error">{error}</p>}
            <p onClick={() => setIsLogin(!isLogin)} className="toggle">
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </p>
        </div>
    );
};

export default Auth;
