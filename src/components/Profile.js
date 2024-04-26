import axios from 'axios'
import { useState } from 'react'

export default function Profile() {
    const [result, setResult] = useState(null)

    if (result == null) {
        axios.get('http://localhost:8081/show').then((response) => {
            console.log(JSON.stringify(response.data));
            setResult(response.data);
        })
        return (
            <div>
                There is No Data to Display
            </div>
        );
    } else {
        return (
            <div>
                <h2>The User Data is Given Below</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '3px' }}>Name</th>
                            <th style={{ border: '1px solid black', padding: '3px' }}>Email</th>
                            <th style={{ border: '1px solid black', padding: '3px' }}>Role</th>
                            <th style={{ border: '1px solid black', padding: '3px' }}>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((user, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{user.role}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{user.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
