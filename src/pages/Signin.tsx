import { useRef } from "react";
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        const response = await axios.post(BACKEND_URL + "/api/v1/signin" , {
            username,
            password
        })

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard")

        //redirect user to dashboard after this


    }


    return <div className="h-screen w-screen bg-slate-500 flex items-center justify-center">
        <div className="bg-white rounded p-20 flex items-center justify-center gap-8 flex-col">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <Button onClick={signin} loading={false}  variant="primary" text="Signin" size="md" fullWidth = {true}  />
        </div>
        

    </div>
}