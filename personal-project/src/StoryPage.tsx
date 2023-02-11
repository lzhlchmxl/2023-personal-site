import BackButton from "./BackButton";

function StoryPage() {

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] relative text-white mb-10 rounded-md max-w-[1000px] w-[80%] mt-[80px] md:mt-[130px]">
      <BackButton />
      <p>This is the story page.</p>
      <br/>
      <p>It will show my story and my entreprenuerial journey.</p>
      <br/>
      <p>Still under construction at the moment.</p>
    </div>
  )
}

export default StoryPage;