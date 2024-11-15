import { Containers } from "./containers/containers.tsx";
import typescriptLogo from "../assets/typescript.svg";
import javascriptLogo from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg"
import "../App.css"

export function MyTechnologies(){
    return(
        <main>
            <h2>Ferramentas que uso:</h2>

            <div className="">
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
            </div>
        </main>
    )
}