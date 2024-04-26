import React, { useState } from 'react';
import axios from 'axios';
import Registration from './Registration'; // Import the Registration component

export default function Login({ store }) {
    const [showRegistration, setShowRegistration] = useState(false); // State to control whether to show registration form

    function handleSubmit() {
        const username = document.getElementById("idun").value;
        const password = document.getElementById("idpw").value;

        axios.post('http://localhost:8081/check', { un: username, pw: password })
            .then((response) => {
                console.log(response.data);
                if (response.data !== "fail") {
                    store.dispatch({ type: "login", data: { un: response.data.name, role: response.data.role } });
                    store.dispatch({ type: "Home" }); // Redirect to Home upon successful login


                    setTimeout(() =>{
                        store.dispatch({type: "logout" });
                        alert("Session timeout. You have been logged out. ");
                    }, 50 * 60 * 1000);
            }
        })

            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function handleMouseOver() {
        document.getElementById("idlogin").style.boxShadow = "10px 10px 15px grey";
    }

    function handleMouseLeave() {
        document.getElementById("idlogin").style.boxShadow = "0px 0px 0px grey";
    }

    // Function to toggle the visibility of the registration form
    function toggleRegistrationForm() {
        setShowRegistration(!showRegistration);
    }

    return (
        <div>
            {!showRegistration && (
                <div style={{ backgroundImage: 'url(/images/image6.jpg)', backgroundSize: '900px', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    <div id="idlogin" className="login-form" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{ marginTop: '-50px' }}>
                        <p style={{ textShadow: "1px 2px 2px red, -1px -2px 2px yellow", fontSize: "25px" }}>Login Page</p>
                        <br />
                        Username: <input type="text" name="un" id="idun" /> <br /><br />
                        Password: <input type="password" name="pw" id="idpw" /><br /><br />
                        <button onClick={handleSubmit}>Login</button>
                        {/* Text for new user and forgot password */}
                        <div style={{ marginTop: '10px' }}>
                            New User? <a href="#" onClick={toggleRegistrationForm} style={{ textDecoration: 'none', color: 'blue' }}>Register here</a> <br></br>
                            <a href="#" style={{ textDecoration: 'none', color: 'blue' }}>Forgot Password?</a>
                        </div>
                    </div>
                </div>
            )}
            {/* Render Registration component directly */}
            {showRegistration && <Registration />}
        </div>
    );
}
