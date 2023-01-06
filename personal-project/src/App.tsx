import React from 'react';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <div className='flex h-screen items-center justify-center bg-black'>
      <Outlet />
    </div>
  );
}

export default App;
