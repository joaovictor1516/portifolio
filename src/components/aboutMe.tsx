import { MyTechnologies } from "./myTechnologies";

export function AboutMe(){
    return(
        <main id="aboutMe">
            <h2>Sobre mim</h2>

            <div>
                <p>Me chamo João Victor Campos, sou desenvolvedor web júnior</p>

                <MyTechnologies/>
            </div>
            
        </main>
    )
}