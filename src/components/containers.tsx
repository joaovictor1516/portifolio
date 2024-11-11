interface ContentType{
    title: string;
    image?: string;
    description: string;
}

export function Containers(props: Readonly<ContentType>){
    return(
        <div>
            <h2>
                {props.title}
            </h2>
            
            <img src = {props.image} alt = {`${props.title} imagem`} />
            
            <strong>
                ${props.description}
            </strong>
        </div>
    )
}