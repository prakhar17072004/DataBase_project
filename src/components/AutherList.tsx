import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface AUTHER{
  id: number;
  Auther_name: string;
  email: string;
}

const AutherList: React.FC = () => {
  const [authers, setAuthers] = useState<AUTHER[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setAuthers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {authers.map((auther) => (
          <li key={auther.id}>
            {/* {user.name} - {user.email} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutherList;
