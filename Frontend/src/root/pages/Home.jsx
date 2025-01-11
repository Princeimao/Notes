import { useSelector } from "react-redux";

import Notes from "../../components/shared/Notes";
import { useGetNotes } from "../../hooks/useNotes";
import { Loader } from "lucide-react";
import CreateNote from "../../components/shared/CreateNote";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const { data: notes, isPending: isLoading, isError } = useGetNotes();

  if (isLoading) {
    return (
      <main className="bg-primary-100 h-screen w-full text-white flex justify-center items-center">
        <Loader />
      </main>
    );
  }

  return (
    <div className="px-20 py-10 w-full min-h-screen bg-primary-100 text-white font-[ubuntu]">
      <div className=" w-full h-[100%]">
        <h1 className="text-4xl">
          Hello, <b>{user?.user?.name || user?.name || "Ruy"}!</b> 👋🏼
        </h1>
        <p className="text-grey mt-2 mb-8 text-md">
          All your notes are here, in one place!
        </p>
        <div className="grid grid-cols-4 gap-3">
          <CreateNote />
          {notes.map((note) => (
            <Notes
              key={note._id}
              title={note.title}
              description={note.description}
              id={note._id}
              date={note.updatedAt}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
