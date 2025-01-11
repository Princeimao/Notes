import { Loader, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { timeConverter } from "../../lib/utils";
import NoteForm from "./form/NoteForm";
import { useDeleteNotes } from "../../hooks/useNotes";

const Notes = ({ title, description, date, id }) => {
  const { mutateAsync: deleteNote, isPaused: isLoading } = useDeleteNotes();

  async function onSubmit() {
    const response = await deleteNote({ id });
    console.log(response);
  }

  if (isLoading) {
    return (
      <main className="bg-primary-100 h-screen w-full text-white flex justify-center items-center">
        <Loader />
      </main>
    );
  }

  return (
    <Dialog>
      <div className="bg-[#FFD4A9] group rounded-md h-64 w-[34vh] text-[ubuntu] text-black hover:shadow-2xl">
        <DialogTrigger asChild>
          <div className="px-4 pt-4">
            <div>
              <div className="w-full h-[27vh]" style={{ userSelect: "none" }}>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-sm font-medium text-[#2e2d2d]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <div className="w-full flex justify-between items-center group-hover:opacity-[100] px-4 pb-4 opacity-0 transition-all ease-in">
          <p className="text-xs font-ubuntu font-medium">
            {timeConverter(date)}
          </p>
          <div
            className="w-6 h-6 hover:bg-grey transition-all ease-in rounded-full flex justify-center items-center"
            onClick={onSubmit}
          >
            <Trash2 size={15} />
          </div>
        </div>
      </div>
      <DialogContent className="bg-primary-200 outline-none">
        <div className="w-full h-full flex flex-col gap-4">
          {/* <input
            className="bg-transparent text-white outline-none gap-1"
            type="text"
            placeholder="Title"
          />

          <textarea
            className="bg-transparent text-white outline-none resize-none h-[25vh] overflow-auto"
            name="discription"
            id="discription"
            placeholder="Discription"
          />
          <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
            Save
          </Button> */}
          <NoteForm
            title={title}
            description={description}
            action="update"
            id={id}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Notes;
