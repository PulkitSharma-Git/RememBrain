import { ShareIcon } from "../../icons/ShareIcon";
interface CardProps { 
    title: string;
    type: "twitter" | "youtube";
    link: string;
}

export const Card = ({title, type, link} : CardProps) => {
  return ( <div>  
    <div className="max-w-96 border rounded-md p-4 min-h-42 min-w-72 bg-white">
      <div className="flex justify-between">
        <div className="flex font-semibold">
  
          <div className="pl-2">{title}</div>
        </div>
        <div className="flex">
   

          <a href="{link}">
           <ShareIcon size="lg" /> 
          </a>
        </div>
      </div>
      <div className="pt-3"></div>

      {type === "youtube"  && <iframe
        className="w-full"
        src={link.replace("watch","embed").replace("?v=", "/")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>}
    

      {type === "twitter" && <blockquote className="twitter-tweet">
        <a href={link.replace("x.com", "twitter.com")}></a>
      </blockquote>}
      
    </div>

    </div>
  );
};
