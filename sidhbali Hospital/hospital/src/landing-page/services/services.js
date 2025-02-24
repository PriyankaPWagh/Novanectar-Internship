import React from "react";


export default function Services (){
    return(
      
        <>
  
  <section className="h-32 bg-gray-100 flex items-center justify-center">
  <h1 className="text-5xl font-bold text-green-600">Services</h1>
</section>
  <div className="flex flex-col items-center p-10  ">
      

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 max-w-6xl w-full">
       
        <div className="w-[450px] h-[450px] object-cover flex items-center justify-center">
          <img
            src="media/assets/baby-services2.jpg"
            className="w-full h-full object-contain rounded-2xl shadow-lg"
            alt="logo"
          />
        </div>

      
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-gray-700">
          <p className="text-lg leading-relaxed">
          <span className="font-semibold text-gray-900">Shri Sidhbali Hospital</span>,a dedicated hospital in Children Hospital 
          offers high-quality healthcare services to patients of all ages.
            
          </p>

          <p className="mt-6 text-lg leading-relaxed">
          At Shri Sidhbali Hospital,patient can except to receive top-notch treatment and surgies.
        The Hospital offers a range of services including :
        <ul>
         <li><span className="font-semibold text-gray-900">Treatments:</span> Patients can except to receive top-notch treatment for various 
             medical conditions,including Child Development Disease. The Hospital's team of professionals 
             is highly skilled and well-version in their respective domains.
         </li>
        </ul>
          </p>
        </div>
      </div>
    </div>
    
  </>
    
    );
}