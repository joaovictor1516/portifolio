import "./containersStyle.css";

interface ContentType{
    title: string;
    image?: string;
    description: string;
}

export function Containers(props: Readonly<ContentType>){
    return(
        <div id="container">
            <img src = {props.image} alt = {`${props.title} imagem`} id="containerImage"/>
            
            <h2 id="containerTitle">
                {props.title}
            </h2>

            <span id="containerDescription">
                    {props.description}
            </span>
        </div>
    )
}