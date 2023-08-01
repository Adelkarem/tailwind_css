import { useState } from "react"
import TestimonialsBox from "./TestimonialsBox";

const Testimonials = () => {
    const [testDate, settestDate] = useState([
        {
          id: 1,
          name: "ADEL",
          position: "Founder & CEO, Huddle",
          image: "profile-1.jpg",
          desc: "Lorem ipsum dolor sit amet consectetuadipisicing elit Nihil nemo neque voluptate tempora velit cum non"
        },
        {
          id: 2,
          name: "SELIM",
          position: "Founder & CEO, Huddle",
          image: "profile-2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetuadipisicing elit Nihil nemo neque voluptate tempora velit cum non"
        },
        {
          id: 3,
          name: "EMAN",
          position: "Founder & CEO, Huddle",
          image: "profile-3.jpg",
          desc: "Lorem ipsum dolor sit amet consectetuadipisicing elit Nihil nemo neque voluptate tempora velit cum non"
        }
      ]);
      
    return (
        <section className=" pb-[350px]">
            <div className=" container relative">
<div className=" absolute left-[20px] top-[-35px] -z-10">
    <img src="/src/assets/images/bg-quotes.png" alt="bg-quotes"/>
</div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {testDate.map((item)=>(
            <TestimonialsBox key={item.id} desc={item.desc} image={item.image} position={item.position} name={item.name}/>
        ))}
     </div>
            </div>
        </section>
    )
}

export default Testimonials
