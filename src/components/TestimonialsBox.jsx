const TestimonialsBox = ({name,id,image,desc,position}) => {
  return (
    <div className=" text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className=" text-sm font-normal tracking-[1px] mb-[30px]">
        {desc}
      </p>
      <div className="flex gap-[15px] items-center">
        <img src={`/src/assets/images/${image}`} className=" w-[50px] h-[50px] rounded-[50px] object-contain"/>
        <div>
            <strong className=" block mb-[5px]">{name}</strong>
            <p className="text-sm font-normal ">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsBox
