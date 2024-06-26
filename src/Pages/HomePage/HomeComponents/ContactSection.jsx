import React, { useEffect, useRef } from "react";
import ContactForm from "../../../Comp/ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactSection() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  
  return (
    <>
      <div className="step dark:bg-[#111920]">
        <div
          style={{
            background: "url('/HomePage/position-1-bg-d.webp')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="w-full h-screen "
        >
          <div className="w-full h-full flex justify-center align-center">
            <div className="container">
              <div className="lg:px-10 xl:px-10 2xl:px-10  w-9/10 lg:w-auto md:w-auto  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 text-white">
                <div className="hidden lg:block md:block"></div>
                <div data-aos="zoom-y-out" data-aos-delay="250"> {/* Apply initial opacity */}
                  <ContactForm flag={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
