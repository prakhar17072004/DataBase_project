import React from 'react';
import "../app/globals.css";
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import Link from 'next/link';

const Index: React.FC = () => {
  return(
    
        <div >
       
       <div className='bg-slate-600 text-center'>
       <Navbar/>
       
       </div>
       <Link href="/">
       <Dashboard/>
       </Link>
       
       
       
        </div>
    
  )
};

export default Index;
