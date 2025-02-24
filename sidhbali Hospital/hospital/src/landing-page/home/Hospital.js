import React, { useEffect, useState } from "react";


import Map from "../../components/ui/map";

export default function Hospitalhomepage() {

  const [heroVisible, setHeroVisible] = useState(false);
  const [doctorVisible, setDoctorVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero Section
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        if (heroRect.top < window.innerHeight - 100) {
          setHeroVisible(true);
        }
      }

      // Doctor Image
      const doctorImage = document.getElementById("doctor-image");
      if (doctorImage) {
        const doctorRect = doctorImage.getBoundingClientRect();
        if (doctorRect.top < window.innerHeight - 100) {
          setDoctorVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 ">
      

      {/* Hero Section */}
        {/* Hero Section */}
        <section
        id="hero-section"
        className={`text-center py-16 bg-blue-400 text-white hero-image flex flex-col items-center justify-center mb-4 ${
          heroVisible ? "hero-animation" : "opacity-0"
        }`}
      >
        <button
          type="button"
          class="text-white-900 bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 
          dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 w-64 text-center mt-[250px] "
        >
          Book Appointment
        </button>
      </section>

      {/* doctor Section */}<section className="mb-4 mt-4">
      <h1 className="text-5xl mt-4 text-center text-green-400 p-8 font-black">Our Expert</h1>
      <div className="flex flex-col items-center justify-center ">
      <img
              id="doctor-image"
              src="media/assets/doctor1.avif"
              className={`w-100 h-70 object-center rounded-[30px] ${
                doctorVisible ? "img-animate" : "opacity-0"
              }`}
              alt="doctor"
            />
        <div className="text-center mt-4 "><h2 className="text-4xl italic mb-3  ">Dr.Rajesh Kumar Agrawal</h2>
        <p className="text-2xl mb-2 italic">M.B.B.S,M.D (KGMC,LKO)</p>
        <p className="text-2xl italic mb-2"> नवजात शिशु एवं बालरोग विशेषतज्ञ</p>
        </div>
        </div>
      </section>

      
           {/* Location Section */}
      <section className="text-center p-8 bg-white">
      <h1 className="text-5xl text-center text-green-400  font-black">Visit Our Hospital</h1>
        <p className="mt-2 text-gray-600 text-xl  font">Find us at our convenient location</p>
        
        <div className="flex flex-col items-center justify-center mt-4 ">
        
        <Map/>
        </div>
        
      </section>
      
      

    </div>
  );
}
