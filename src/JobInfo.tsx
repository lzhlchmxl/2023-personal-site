function JobInfo({duration, companyName, companyAddress, jobTitle}: {duration: string, companyName: string, companyAddress: string, jobTitle: string}) {

  return (
    <div className="flex flex-col mb-5">
      <div className="text-gray-500">{duration}</div>
      <div className="text-white font-semibold capitalize">{companyName}</div>
      <div className="text-gray-600 capitalize">{companyAddress}</div>
      <div className="text-gray-400 font-semibold  capitalize">{jobTitle}</div>
    </div>
  )
}

export default JobInfo;