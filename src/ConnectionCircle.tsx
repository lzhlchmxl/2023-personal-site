function ConnectionCircle({t, r, b, l}: {t?: string, r?: string, b?: string, l?: string}) {
  
  return (
    <div className={`absolute bg-lightGray rounded-full w-4 h-4 z-10 border-[3px] border-black 
                    ${t ? t : ""} 
                    ${r ? r : ""} 
                    ${b ? b : ""} 
                    ${l ? l : ""}`}></div>
  )
}

export default ConnectionCircle;