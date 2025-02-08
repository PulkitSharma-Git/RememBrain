import { useRef, useState } from "react";
import { BACKEND_URL } from "../../config";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface CreateContentModalProps {
  open: boolean;        
  onClose: () => void;  
}

export const CreateContentModal = ({ open, onClose }: CreateContentModalProps) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const linkRef = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/content`, {
      title,
      link,
      type
    }, {
      headers:{
        "Authorization": localStorage.getItem("token")
      }
    })

    onClose();
  
  }

  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-purple-600 opacity-25 fixed l-0 t-0 flex justify-center"></div>

          <div className="w-screen h-screen  fixed l-0 t-0 flex justify-center">
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 p-4 rounded flex flex-col gap-4">
                <div className="flex justify-end">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    <CrossIcon />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <Input placeholder="Title" reference={titleRef} />
                  <Input placeholder="Link" reference={linkRef} />
                </div>

                <div className="flex p-4 gap-2 items-center">
                  <h1>Type</h1>
                  <Button
                    size="sm"
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  ></Button>
                  <Button
                    size="sm"
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  ></Button>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    size={"sm"}
                    variant={"primary"}
                    text={"Submit"}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
