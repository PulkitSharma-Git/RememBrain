import { useRef } from "react"
import axios from "axios";
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup =  () => {
    const usernameRef =  useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
        })

        alert("You Signed Up!")
        navigate("/signin")


    }
    return <div className="h-screen w-screen bg-slate-500 flex items-center justify-center">
        <div className="bg-white rounded p-20 flex items-center justify-center gap-8 flex-col">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <Button onClick={signup} loading={false}  variant="primary" text="Signup" size="md" fullWidth = {true}  />
        </div>
        

    </div>
}