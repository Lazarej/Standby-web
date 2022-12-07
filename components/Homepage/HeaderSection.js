import { useEffect } from "react";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Wrapper from "../Global/Wrapper";
import Link from "next/link";

const phonePicture = new URL("../../public/images/phone.png", import.meta.url);

export default function HeaderSection() {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    console.log(windowWidth);
  });

  const headerInfo = () => (
    <div className="md:h-full flex flex-col justify-end md:mr-10 ">
      <h2 className="mb-10 font-robotoCB text-[2.5rem] leading-[2.75rem] tracking-tighter uppercase md:w-82 md:leading-[2vw]  md:text-[2.2vw] md:text-white">
        Toute l’actualité marketing en un seul outil
      </h2>
      <div className="md:flex">
      <Link href="">
      <div className="w-60 h-16 mb-4 bg-primary rounded-md flex items-center relative md:border md:h-14 md:w-50">
          <p className=" ml-6 font-roboto uppercase text-white md:text-sm">
            avoir l'application
          </p>
          <svg
            className="absolute right-1 top-1"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m16 8.4l-8.875 8.9q-.3.3-.713.3q-.412 0-.712-.3t-.3-.713q0-.412.3-.712L14.6 7H7q-.425 0-.713-.287Q6 6.425 6 6t.287-.713Q6.575 5 7 5h10q.425 0 .712.287Q18 5.575 18 6v10q0 .425-.288.712Q17.425 17 17 17t-.712-.288Q16 16.425 16 16Z"
            />
          </svg>
        </div>
      </Link>
        <Link href="/partner">
        <div className="w-60  mb-4 h-16 border-2 border-primary rounded-md flex items-center relative md:mx-2 md:bg-white md:h-14 md:border-white md:w-50 md:mb-16">
          <p className="ml-6 font-roboto uppercase text-primary md:text-sm">
            devenir partenaire
          </p>
          <svg
            className="absolute right-1 top-1"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FE724C"
              d="m16 8.4l-8.875 8.9q-.3.3-.713.3q-.412 0-.712-.3t-.3-.713q0-.412.3-.712L14.6 7H7q-.425 0-.713-.287Q6 6.425 6 6t.287-.713Q6.575 5 7 5h10q.425 0 .712.287Q18 5.575 18 6v10q0 .425-.288.712Q17.425 17 17 17t-.712-.288Q16 16.425 16 16Z"
            />
          </svg>
        </div>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="mb-40">
      <div className=" w-full h-[50vh] md:h-[60vh] bg-primary flex ">
      <div className="poligon"/>
        <h1 className="uppercase font-robotoCB text-6xl mt-6 ml-8 tracking-tighter text-white absolute z-30 md:text-[4vw] md:ml-16 md:mt-10">
          Standby
        </h1>
        {windowWidth < 768 ? (
          <img
            className="absolute top-[10%] z-10 h-[450px] ml-11 "
            src={phonePicture}
          />
        ) : (
          <div>
            <div className="absolute left-[35%] top-0 z-10 w-[33vw] h-[53vw]">
            <iframe
              className=""
              src="https://my.spline.design/untitled-55a33ad88c11428917f31638407f88ae/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div> 
          {
            headerInfo()  
          }
          </div>
        )}
        
        
      </div>
      {windowWidth < 768 ? (
        <div className="mt-40">
          <Wrapper>{headerInfo()}</Wrapper>
        </div>
      ) : null}
    </div>
  );
}
