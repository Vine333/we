import React, {useEffect, useState} from 'react';
const Apppiii = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res=>res.json())
            .then(data=>{
                setUsers(data.slice(0,5))
            }).catch(error=>console.log(error))

    },[])
    return (
        <div>
                <ul>
                    {users.map(users=>(
                        <li key={users.id}>
                            <h3>{users.name}</h3>
                            <p>{users.body}</p>
                        </li>
                    ))}
                </ul>
        </div>
    );
};

export default Apppiii;