function JobInfo({duration, companyName, companyAddress, jobTitle}: {duration: string, companyName: string, companyAddress: string, jobTitle: string}) {

  return (
    <div className="flex flex-col mb-5 capitalize">
      <div className="text-gray-500">{duration} | {companyAddress}</div>
      <div className="text-white font-semibold ">{companyName}</div>
      <div className="text-gray-400 font-semibold">{jobTitle}</div>
    </div>
  )
}

export default JobInfo;