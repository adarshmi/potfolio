import React from "react";

const Skillscard = ({name, image, link}) => {
    return (
       <div>
           <a href= {link}>
              <div className="flex items-center justify-start gap-10 py-4 px-6 border border-gray-400 hover:border-gray-600  dark:border-gray-600 dark:hover:border-gray-400 rounded-md hover:-translate-y-2 hover:shadow-xl transition transform duration-150 ease-out active:scale-95">
                  <div className="flex items-center justify-center w-11 h-11 rounded-md bg-blue-50">
                      <img className="w-8 h-8" src ={image}/>
                  </div>               
                 <h1 className="font-semibold text-lg">{name}</h1>               
              </div>  
            </a>
       </div>
    )
}
export default Skillscard