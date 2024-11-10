import React, { useState, useEffect } from 'react';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.slice(0,5));
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
