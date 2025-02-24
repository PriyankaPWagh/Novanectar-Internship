import React from "react";

export default function About() {

  
  return (
  <>
  
  <section className="h-32 bg-gray-100 flex items-center justify-center">
  <h1 className="text-5xl font-bold text-green-600">About Us</h1>
</section>
  <div className="flex flex-col items-center p-10  ">
      

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 max-w-6xl w-full">
       
        <div className="w-[450px] h-[450px] flex items-center justify-center">
          <img
            src="media/assets/counter.jpg"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            alt="logo"
          />
        </div>

      
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-gray-700">
          <p className="text-lg leading-relaxed">
            Rishikesh is a place full of winter, rain, and summer. With these seasonal changes, many children face health issues. 
            <span className="font-semibold text-gray-900"> Sri Sidhbali Child Care </span>
            is one of the best healthcare centers for infants, children, and teenagers. They have a trained and experienced team to manage illnesses and injuries in children.
          </p>

          <p className="mt-6 text-lg leading-relaxed">
            <span className="font-semibold text-gray-900">Shri Sidhbali Hospital</span> is a dedicated hospital in Ashutosh Nagar, Rishikesh, offering high-quality healthcare services for patients of all ages. The hospital's team of professionals is highly skilled and well-versed in their respective domains. Patients can expect top-notch treatments, surgeries, and procedures.
          </p>
        </div>
      </div>
    </div>
    
  </>
    
  );
}


