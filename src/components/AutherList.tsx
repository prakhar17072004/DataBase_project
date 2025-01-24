import React, { useEffect, useState } from 'react';

interface AUTHER {
  id: number;
  Auther_name: string;
  email: string;
  bio:string;
}

const AutherList: React.FC = () => {
  const [authers, setAuthers] = useState<AUTHER[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/auther');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAuthers(data);
      } catch (error) {
        console.error('Error fetching authers:', error);
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
      <h1>Auther List</h1>
      <ul>
        {authers.map((auther) => (
          <li key={auther.id}>
            {auther.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutherList;
