import Wrapper from "../components/Global/Wrapper";
import { IoChevronBackSharp } from "react-icons/io5";
import GlobalInput from "../components/Global/GlobalInput";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col">
      <div className="h-96 relative">
        <div className="h-full w-full ">
          <Wrapper>
            <p className="font-robotoCB uppercase text-[19vw] leading-[18vw] tracking-tighter mt-[8.1rem] text-black">
              demandez une <br />
              demo
            </p>
          </Wrapper>
        </div>
        <div className="poligon-partner overflow-hidden absolute top-0 left-0 ">
          <Wrapper>
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
            <p className="font-robotoCB uppercase text-[19vw] leading-[18vw] tracking-tighter mt-10  text-white">
              demandez une <br />
              demo
            </p>
          </Wrapper>
        </div>
      </div>
      <Wrapper>
        <div className=" border-t mt-10 border-lightGrey">
          <p className="font-robotoCB tracking-tighter uppercase text-2xl mt-20 mb-14">
            / / remplisez le formulaire
          </p>
          <form>
            {form.map((input) => (
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
            <div className="my-12">
            <p className="font-robotoCB uppercase">description</p> 
            <div className="input border border-lightGrey rounded-lg h-40">   
            <textarea className="h-full w-full outline-none p-3"/>
            </div>
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
}
