import React from "react";

function Footer() {
  return (
    <div  >
   <footer className="bg-blue-200 text-white text-center p-4 mt-6 h-32 sticky bottom-0 w-full">
      <span className="bg-blue-200 text-green-500/100 dark:text-green-400/100 text-center text-2xl font-bold flex flex-row justify-center item-center mt-8" >
      &copy; {new Date().getFullYear()} Sidhbali Hospital. All Rights Reserved.
        </span>  
      </footer>
    </div>
  );
}

export default Footer;