import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const ourCompany = [
    {
      name: "About",
      action: "about",
    },
    {
      name: "Portfolio",
      action: "portfolio",
    },
    {
      name: "Jobs",
      action: "Jobs",
    },
    {
      name: "Culture",
      action: "culture",
    },
    {
      name: "Contact Us",
      action: "Jobs",
    },
  ];

  const Services = [
    "Services 1",
    "Services 1",
    "Services 1",
    "Services 1",
    "Services 1",
    "Services 1",
    "Services 1",
  ];

  const socials = [
    {
      name: "facebook",
      imgurl: "/1",
    },
    {
      name: "x",
      imgurl: "/2",
    },
    {
      name: "instagram",
      imgurl: "/3",
    },
    {
      name: "linkedin",
      imgurl: "/4",
    },
  ];
  return (
    <footer id="about" className="block border-t-[2px] border-slate-700 min-w-[360px] p-2 text-start break-words bg-black">
      <div className="grid sm:grid-cols-12 sm:gap-4">
        <section id="values" className="col-span-3 p-1 ">
          <h2
            className="text-start text-4xl pb-1 font-extrabold 
          text-transparent  bg-clip-text bg-gradient-to-r from-green-300 to-green-500 "
          >
            Islamic World
          </h2>
          <div className="p-1 ">
            <p className=" sm:text-start sm:pt-1 text-sm">
              We provide best in class Quick Solutions, Good Reputation,
              individual Expertise of expert into field with overall experience
              of 5-7 years into diversified Fields, We are dealing with multiple
              courses may it be any at the same time which no other company
              could provide and have a potential.
            </p>
          </div>
          <div className="pt-0  pl-4 sm:text-start">
            <address className="">aaaaaaa, bbbbbbb, India.</address>
            <p>
              <span>Phone</span> : +1 5589 55488 55
            </p>
            <p>
              <span>Email</span> : info@islamia.com
            </p>
          </div>
        </section>

        <section id="company" className="col-span-3 sm:pl-4">
          <h2
            className="sm:text-3xl text-xl
          font-bold
          text-transparent  bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500"
          >
            Our Company
          </h2>
          <ul className="">
            {ourCompany.map((item) => (
              <li className="sm:pt-1 pl-4 text-sm" key={item.name}>
                {" "}
                {item.name}
              </li>
            ))}
          </ul>
        </section>

        <section id="" className="col-span-3 ">
        {/* <Link> */}
        <button
            onClick={() => {
                  // navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById("services");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 500);
                }}
                >
          <h2
            className="sm:text-3xl text-xl 
            font-bold
            text-transparent  bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500 hover:cursor-pointer"
          >
            Our Services
          </h2>
          </button>
        {/* </Link> */}
          <ul className="">
            {Services.map((service) => (
              <li className="sm:pt-1 pl-4 text-sm" key={service}>
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section className="col-span-3  p-2" id="newsletter">
          <h2
            className="sm:text-3xl text-xl 
          font-bold
          text-transparent  bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500 mb-2"
          >
            Subscribe to Newsletter
          </h2>
          <input className="w-[70%] mb-2 sm:mr-2 p-3 rounded-sm " placeholder="your email" />
          <button className="sm:p-3 pt-3 pb-3 pl-2 pr-2 ml-1 border rounded-sm">subscribe</button>
        </section>
      </div>

      <div className="text-center m-2 p-2">
        <hr />
        © Copyright 2024. All Rights reserved by Islamic World | Policy
        <br/>
        Developed Arman Ali
        {/* <div className="">
              <ul className="">
                {socials.map((social) => (
                  <li className=" bg-slate-400 " key={social.imgurl}>
                    <img src={social.imgurl} />
                  </li>
                ))}
              </ul>
            </div> */}
      </div>
    </footer>
  );
}

export default Footer;
