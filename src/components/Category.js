import axios from "axios";
import React, { useState } from 'react';


export default function Category() {

    const [result,setResult] = useState(null)

    function handleDelete(event) {
        alert((event.currentTarget.getAttribute("pid")))
        axios.delete('http://localhost:8081/delete', {params: {
            "id": event.currentTarget.getAttribute("participate")
        }}).then((response) => {
            console.log(response.data);
            
        })
    }

    if(result == null) {
        axios.get('http://localhost:8081/display').then((response) => {
            console.log(response.data);
            setResult(response.data);

        })
        return(
           <div>
               The Category Data is Not There
           </div> 
        );
    }

    else {
        return(
            <div>
                The Category Data is Given Below <br/><br/>
                <table border="1">
                <tr>
                    <th>paticipate ID</th>
                    <th>paticipate Name</th>
                    <th>Event Category</th>
                    <th>Traditional Attire</th>
                    <th>Cultural Activities</th>
                    <th>Delete Button</th>
                </tr>
             
                {result.map((user) => {
                    return(
                                <tr>
                                    <td>{user.pname}</td>
                                    <td>{user.pid}</td>
                                    <td>{user.pevent}</td>
                                    <td>{user.pattire}</td>
                                    <td>{user.pactivities}</td>
                                    <td> <button onClick={handleDelete} participate={user.pid}>Delete</button></td>
                                </tr>
                    );
                })}
                </table>
    
            </div>
        );

    }
    
}