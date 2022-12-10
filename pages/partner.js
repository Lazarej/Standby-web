import Wrapper from "../components/Global/Wrapper";
import { IoChevronBackSharp } from "react-icons/io5";
import GlobalInput from "../components/Global/GlobalInput";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function () {
   
  useEffect(()=>{
    
  })

  const [form, setForm] = useState([
    {
      key:0,
      label: "votre nom",
      type: "text",
      value: "",
      placeholder: "nom",
    },
    { 
      key:1,
      label: "votre prénom",
      type: "text",
      value: "",
      placeholder: "prénom",
    },
    {
      key:2,
      label: "votre email",
      type: "email",
      value: "",
      placeholder: "email",
    },
    {
      key:3,
      label: "votre numéro téléphone",
      type: "tel",
      value: "",
      placeholder: "numéro",
    },
  ]);

  const [textarea , setTextarea] = useState('')

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="h-96 relative md:h-[100vh] md:w-[30%]">
        <div className="h-full w-full md:h-fit ">
          <Wrapper>
            <p className="font-robotoCB uppercase text-[19vw] md:text-[8vw] leading-[18vw] md:leading-[8vw] tracking-tighter mt-[8.1rem] text-black">
              demandez une <br />
              demo
            </p>
          </Wrapper>
        </div>
        <div className="poligon-partner overflow-hidden absolute top-0 left-0 ">
          <Wrapper>
            <Link href='/'>
            <svg
              className="mt-10"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225Z"
              />
            </svg>
            </Link>
            <p className="font-robotoCB uppercase text-[19vw] md:text-[8vw] leading-[18vw] md:leading-[8vw] tracking-tighter mt-10  text-white">
              demandez une <br />
              demo
            </p>
          </Wrapper>
        </div>
      </div>
        <div className=" border-t mt-10 mb-14 border-lightGrey px-8 md:px-10 relative w-[45%] md:border-t-0 md:border-l md:border-lightGrey md:mt-36">
          <p className="font-robotoCB tracking-tighter uppercase text-2xl mt-28 mb-14 md:mt-0 md:leading-3 ">
            / / remplisez le formulaire
          </p>
          <p className="absolute top-0 right-0 uppercase font-roboto w-30 stroke  text-white md:w-fit leading-5 md:top-[86%] md:left-[-80px] md:rotate-[-90deg]">Digitalisez le <br/> marketing </p>
          <form className="md:flex md:flex-wrap">
            {form.map((input, index) => (
              <GlobalInput
              key={input.key}
                type={input.type}
                value={input.value}
                placeholder={input.placeholder}
                label={input.label}
                onChange={(e) => setForm(prev => prev = form.map((obj)=>{
                     if(input.key === obj.key){
                      return  {...obj , value: e.target.value}
                     }else{
                        return obj
                     }
                }))}
              />
            ))}
            <div className="my-12 md:my-4 md:w-5/6">
            <p className="font-robotoCB uppercase">description</p> 
            <div className="input border border-lightGrey rounded-lg h-40">   
            <textarea className="h-full w-full outline-none p-3 "/>
            </div>
            </div>
          </form>
          <button className="uppercase bg-primary mt-10 text-white font-roboto w-full h-16 rounded-md md:w-64 md:h-14 md:text-sm" >envoyer la demande</button>
        </div>

    </div>
  );
}
