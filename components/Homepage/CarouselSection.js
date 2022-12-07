import Wrapper from "../Global/Wrapper";
import HomeCarousel from "./HomeCarousel";


export default function CarouselSection (){

    return(
        <div className="mb-40">
            <Wrapper>
                <h2 className="responsive-section-title md:section-title">Un contenu diversifié et adapté à vos étudiants !</h2>
                <HomeCarousel/>
            </Wrapper>     
        </div>
    )
}