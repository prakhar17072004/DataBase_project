import React, { useEffect, useState } from 'react';

interface AUTHER {
  id: number;
  auther_name: string;
  email: string;
  bio: string;
}
interface BOOKS {
  id: number;
  auther_id:number;
  books_name: string;
  
}

const AutherList: React.FC = () => {
  const [authers, setAuthers] = useState<AUTHER[]>([]);
  const [books, setBooks] = useState<BOOKS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAuthers = async () => {
    try {
      const response = await fetch('http://localhost:3000/auther');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      setAuthers(data);
      
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      console.error('Error fetching authers:', error);
    } finally {
      setLoading(false);
    }
  };
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/books');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      setBooks(data);
      
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      console.error('Error fetching authers:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    
fetchAuthers();
fetchBooks();
    
  }, []);

  console.log(authers);
  console.log(books);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Auther List</h1>
      <ul>

        {authers.map((authers) => (
          <li key={authers.id}>
            {authers.auther_name}
            

          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutherList;
