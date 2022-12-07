import { useState } from "react";
import Wrapper from "../Global/Wrapper";

export default function AboutSection() {
  const [state, setState] = useState([
    {
      title: "que proposont nous",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "que proposont nous",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "que proposont nous",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  return (
    <div className="mb-40 relative  ">
       <div className=' md:absolute md:h-10 md:w-10  right-0 top-0'>
         <div className="relative h-full w-full over">
         <p  className='md:stroke-text hidden md:block '>L’ACTUALITé de la communication</p>
         </div>
         </div>
      <Wrapper>
        <h2 className="responsive-section-title md:section-title">
          Qu'est-ce que standby ?
        </h2>
        <div className="overflow-hidden md:max-h-[40vw] overflow-y-scroll rtl md:mx-28 flex relative">
          
          <div className="flex flex-col">
            {state.map((info) => (
              <div className="ltr mb-20 ml-4 md:mb-[6vw] md:ml-16" key={info.title}>
                <h3 className="font-robotoCB uppercase text-2xl tracking-tighter mb-7 md:text-[2.5vw] md:mb-[3vw]">
                  / / {info.title}
                </h3>
                <p className="text-style text-[18px] ml-7 md:ml-[3vw]">
                  {info.text}
                </p>
              </div>
            ))}
          </div>
          <div className=" md:bg-lightGrey md:h-[40vw] md:w-[1px] sticky left-0 top-0 ">
            <div className="md:w-[20px] md:h-[20px] md:absolute md:border border-lightGrey rounded-full bg-white left-[-10px] md:top-[0px] md:flex md:justify-center md:items-center">
              <div className="md:w-[15px] md:h-[15px] bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
