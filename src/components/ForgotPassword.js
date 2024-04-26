import React, { useState } from 'react';
import axios from 'axios';

export default function ForgotPassword() {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        // Validate password fields
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // Send request to backend to update password
            const response = await axios.post('http://localhost:8081/updatePassword', { username, newPassword });
            alert(response.data.message); // Display response message

            // Clear form fields after successful submission
            setUsername('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again."); // Notify user of error
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>New Password:</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
