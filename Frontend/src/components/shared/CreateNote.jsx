import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import NoteForm from "./form/NoteForm";

const CreateNote = () => {
  return (
    <Dialog>
      <div className="bg-grey group rounded-md h-64 w-[34vh] text-[ubuntu]  hover:bg-gray-500 transition-all ease-in hover:text-white text-black hover:shadow-2xl">
        <DialogTrigger asChild>
          <div
            className="w-full h-full flex justify-center items-center"
            style={{ userSelect: "none" }}
          >
            <Plus />
          </div>
        </DialogTrigger>
      </div>
      <DialogContent className="bg-primary-200 outline-none">
        <div className="w-full h-full flex flex-col gap-4">
          <NoteForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNote;
