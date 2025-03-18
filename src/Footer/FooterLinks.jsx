const FooterLinks = ({array,heading}) => {
  return (
    <div className="">
      <h3 className="font-lg opacity-60">{heading}</h3>
      <div className="flex flex-col items-start gap-3 mt-5">
      {
       array.map((item,index)=>{
        return(
            <button className="text-sm hover:text-[#0DA34E] transition-all duration-300 cursor-pointer">{item}</button>
        )
       })
      }
      </div>
    </div>
  )
}

export default FooterLinks