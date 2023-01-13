import BackButton from "./BackButton";

function MusicPage() {

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] relative text-white mb-10 rounded-md max-w-[1000px] w-[80%] top-[80px] md:top-[130px]">
      <BackButton />
      <p>This is the music page.</p>
      <br />
      <p>It will have a list of my own piano pieces.</p>
      <br />
      <p>Still under construction at the moment.</p>
    </div>
  )
}

export default MusicPage;