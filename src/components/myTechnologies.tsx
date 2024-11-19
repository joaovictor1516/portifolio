import { Containers } from "./containers/containers.tsx";
import typescriptLogo from "../assets/typescript.svg";
import javascriptLogo from "../assets/javascript.svg";
import figmaLogo from "../assets/figma.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg"
import "../App.css"

export function MyTechnologies(){
    return(
        <section id="myTechnologies">
            <h2>Ferramentas que uso:</h2>

            <div className="myTechnologiesContainers">
                <Containers
                    title="React.JS"
                    image={reactLogo}
                    description="Desenvolvo com react faze um ano."
                />

                <Containers
                    title="TypeScript"
                    image={typescriptLogo}
                    description="Desenvolvo usando TypeScript fazem dois anos."
                />

                <Containers
                    title="JavaScript"
                    image={javascriptLogo}
                    description="Desenvolvo usando JavaScript fazem três anos."
                />

                <Containers
                    title="Node.Js"
                    image={nodeLogo}
                    description="Desenvolvo usando Node.JS faz um ano."
                />

                <Containers
                    title="Figma"
                    image={figmaLogo}
                    description="Faz um ano que utilizo o figma para a criacao dos prototipos dos meus projetos."
                />
            </div>
        </section>
    )
}