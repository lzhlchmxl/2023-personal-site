import React from 'react';
import billCoding from './assets/bill-coding.webp'

function App() {

  const typingClassName = `
                          absolute left-10 text-white overflow-hidden whitespace-nowrap 
                          mx-auto my-0 z-10 opacity-0`
                          // border-r-2 border-solid border-orange-300

  return (
    <div className='flex h-screen items-center justify-center bg-black'>
      <div className="relative flex w-full h-5/6 justify-center">
        <div className={`${typingClassName} top-0 animate-typing1`}>
          <p>Hi, I'm Bill, a Frontend Software Engineer.</p>
        </div>
        <div className={`${typingClassName} top-10 animate-typing2`}>
          <p>Welcome to my personal site :)</p>
        </div>
        <img 
          className='max-h-[1200px] max-w-[800px] saturate-0 object-cover'
          src={billCoding}
        />

      </div>
    </div>
  );
}

export default App;
