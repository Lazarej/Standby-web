import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiPaperPlane } from "react-icons/bi";
import { useEffect, useState } from "react";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export default function HomeCarousel() {

  useEffect(()=>{

  })  

  const [index , setIndex] = useState(0)
  const array = [
    {
        title:'NewsLetter',
        text:'petit text',
        media:'https://www.youtube.com/embed/vJGvSbHmeco'
    },
    {
        title:'Article',
        text:' oui kikju',
        media:'https://www.youtube.com/embed/Dn02_Vg-gS4'
    },
    {
        title:'Favorits',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        media:'https://www.youtube.com/embed/ykclHVFpst8'
    }
  ]

  return (
    <div className="w-full flex flex-col mb-10 md:flex-row md:border-t md:border-lightGrey md:w-[90%] relative">
      <p className="absolute right-0 top-[-36px] uppercase font-roboto tracking-tighter w-28 leading-4 font-semibold reverse ">Renversez les appriories</p>
      <div className="h-14 w-full flex  border-b border-lightGrey md:w-[14vw] md:h-auto md:flex-col  md:border-b-0 ">
        <div className="w-14 h-full md:h-36">{index}</div>
        <div className="grow h-full border-l  border-l-lightGrey flex justify-around md:h-[400px] md:flex-col md:border-t md:border-lightGrey md:border-l-0 md:items-center">
          <BiPaperPlane onClick={() => setIndex( prev => prev = 0) } size={40} color={index === 0 ? fullConfig.theme.colors.primary : 'black'} />
          <IoNewspaperOutline onClick={() => setIndex( prev => prev = 1) } size={40} color={index === 1 ? fullConfig.theme.colors.primary : 'black'}/>
          <MdOutlineFavoriteBorder onClick={() => setIndex( prev => prev = 2) } size={40} color={index === 2 ? fullConfig.theme.colors.primary : 'black'}/>
        </div>
      </div>
      <div className="w-full min-h-[400px] flex">
        <div className="w-14 md:border-l md:border-lightGrey"></div>
        <div className="grow border-l md:border-l-0 border-l-lightGrey relative pt-32 md:pt-36">
            <h3 className="absolute top-12 left-[-50px] font-robotoCB text-primary uppercase text-4xl tracking-tighter md:text-[4vw] md:left-[-10vw]">/ / {array[index].title}</h3>
             <div className="video relative w-fit">
             <iframe className="video absolute left-[-50px] md:static md:w-[45vw] md:h-[25vw]" width="327" height="237" src={array[index].media} title="B.B. Jacques | Grünt d'Or #31" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
             </div>
              <p className="pt-[277px] max-w-[270px] text-style text-[18px] md:pt-10 md:max-w-6xl md:ml-[30px] md:mt-8">{array[index].text}</p>
        </div>
      </div>
    </div>
  );
}
