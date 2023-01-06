import billSmileCoding from './assets/bill-smile-coding.webp';

function ResumePage() {

  

  return (
    <div className='relative flex flex-col w-[80%] h-[90%] items-center'>
      <h1 className='text-white text-3xl'>Why hire Bill as a Front-end Engineer?</h1>
      <div className='max-w-[500px] max-h-[500px] overflow-hidden mt-10'>
        
        <img 
          className=''
          src={billSmileCoding}
        />
      </div>
    </div>
  )
}

export default ResumePage;