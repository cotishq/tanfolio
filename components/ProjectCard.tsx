import Image from "next/image";


type Props = {
    image : string;
    title : string;
    description : string;
    tech : string[];
    github : string;
    live : string;
};

export function ProjectCard({image , title , description , tech , github , live} : Props){
    return (
        <div>
            <Image
            src={image}
            alt={title}
            width={320}
            height={200}
            className="rounded-lg object-cover"
            />

            <div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div>
                        {tech.map((tag) => (
                            <span 
                            key={tag}
                            className="text-xs bg-zinc-800 px-3 py-1 rounded text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}