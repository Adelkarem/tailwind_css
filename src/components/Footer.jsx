import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+201027486827" },
    { icon: "icon-email.svg", text: "Adelkarem376@yahoo.com" }
  ]);

  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobes",
    "Terms",
    "Press",
    "Privacy",
    "Blog"
  ]);

  const [socialIcons, setsocialIcons] = useState([
    "Facebook",
    "Instagram",
    "Twitter"
  ]);

  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo" className="w-[175px] h-[66px] object-contain" />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img src="/src/assets/images/icon-location.svg" alt="location" className="w-[18px] h-[18px] object-contain" />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo neque voluptate tempora velit cum non
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div key={item.text} className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0">
                <img src={`/src/assets/images/${item.icon}`} alt="icon" className="w-[18px] h-[18px] object-contain" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`} className="hover:text-primary transition-colors duration-200 text-base">{link}</a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <a href="" className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                    {item === "Facebook" ? <FaFacebookF  className="group-hover:text-primary transition-all duration-200"/> : null}
                    {item === "Instagram" ? <FaInstagram className="group-hover:text-primary transition-all duration-200"/> : null}
                    {item === "Twitter" ? <FaTwitter className="group-hover:text-primary transition-all duration-200"/> : null}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
