import { RefObject } from "react";

interface InputProps{
    placeholder: string;
    reference: RefObject<HTMLInputElement>;
}

export function Input({ placeholder, reference }: InputProps){
    return <div>
        <input ref={reference} placeholder = {placeholder} type="text" className="bg-slate-100 hover:bg-gray-100 py-2 rounded w-full pl-3 "></input>
    </div>
}