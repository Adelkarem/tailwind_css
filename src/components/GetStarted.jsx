const GetStarted = () => {
  return (
    <section>
      <div className=" container relative">
      <div className=" bg-[#1c2230] absolute left-[50%] translate-x-[-50%]
       top-[-150px] rounded-[5px] text-center p-[30px]
       element-center flex-col w-[865px] max-w-full text-white min-h-[275px]">
        
<h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get early access today</h3>
<p className="w-[620px] max-w-full mx-auto mb-[30px]">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non
 </p>

<form className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]">
    <input className="w-full md:flex-1 h-[50px] pl-[30px] outline-none border-none
     rounded-[30px] text-black font-medium text-sm " type="email" placeholder="email@example.com"/>
    <button type="submit" className="w-full md:w-[200px] h-[50px] bg-[#42b0d1]
     hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px]">
        Get Started For Free
    </button>
</form>

        </div>

      </div>
    </section>
  )
}

export default GetStarted
