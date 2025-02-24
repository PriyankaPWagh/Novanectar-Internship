import React from "react";


export default function Contact (){
    return(
        <>
  
  <section className="h-32 bg-gray-100 flex items-center justify-center">
  <h1 className="text-5xl font-bold text-green-600">Contact us</h1>
</section>
  <div className="flex flex-col items-center p-10  ">
      

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 max-w-6xl w-full">
       
        <div className="w-[450px] h-[450px] flex items-center justify-center">
          <img
            src="media/assets/banner.jpg"
            className="w-full h-full object-contain rounded-2xl shadow-lg"
            alt="logo"
          />
        </div>

      
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-gray-700 justify-center">
          <p className="text-lg leading-relaxed">
          <span className="font-semibold text-gray-900">  Dr. Rajesh Kumar Aggrwal (MBBS,MD9KGMC, LKO) </span>  was in before in Nirmal Ashram Hospital, Rishikesh.
        </p>
        <ul className="list-disc">
            <li>Sri Sidhbali Child Care Contact No &ndash; 0135-2432317</li>
            <li> Sri Sidhbali Child Care Timing &ndash; Time &ndash; 10 Am to 8 PM.</li>
        </ul>



         
         
        </div>
      </div>
    </div>
    
  </>
    )
}