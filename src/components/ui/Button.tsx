import { ReactElement } from "react";

interface ButtonProps { 
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg"; 
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

export const Button = (props: ButtonProps) => {
    
    let defalutStyles = "rounded-md flex items-center justify-center " 

    if(props.fullWidth){
        defalutStyles = defalutStyles + "w-full";
    }

    const variantStyles = {
        "primary": "bg-purple-600 text-white",
        "secondary": "bg-purple-300 text-blue-500"

    }

    const sizeStyles = {
        "sm": "px-2 py-2",
        "md": "px-3 py-3",
        "lg": "px-3 py-4"
    }
    
    return <button className= {`${props.loading ? "opacity-45" : ""} ${variantStyles[props.variant]} ${defalutStyles} ${sizeStyles[props.size]}` } onClick={props.onClick}>

        {props.startIcon} 
        <div className="pr-2 pl-2">
        {`${props.text}`}
        </div>
        {props.endIcon}
        </button>
    

}

