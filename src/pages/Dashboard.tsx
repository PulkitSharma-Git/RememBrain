import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import "../App.css";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { useEffect, useState } from "react";
import { SideBar } from "../components/ui/SideBar";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();
  
  useEffect(()=>{
    refresh();

  },[modalOpen])

  return (
    <div>
      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      <SideBar />

      <div className="ml-64">
        <div className="p-4 bg-gray-100 min-h-screen">
          <div className="flex justify-end gap-4 pb-4">
            <Button
              onClick={() => setModalOpen(true)}
              size={"sm"}
              variant={"primary"}
              text={"Add Content"}
              startIcon={<PlusIcon size={"lg"} />}
            />
            <Button
              size={"sm"}
              variant={"secondary"}
              text={"Share Brain"}
              startIcon={<ShareIcon size={"lg"} />}
              onClick={async ()=>{
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
                }, {
                  headers: {
                    "Authorization": localStorage.getItem("token")
                  }
                });


                const shareUrl = `http://localhost:5173/share/${response.data.hash}`; 
                alert(shareUrl)
                 

              }}
            />
          </div>

          <div className="flex gap-4 flex-wrap">
            {contents.map(({ title, link, type }) => (
              <Card type={type} link={link} title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
