import { Plus } from "lucide-react";

const CreateTodo = () => {
  return (
    <div className="w-full h-10 border border-zinc-600 rounded-sm flex items-center mt-1 hover:bg-zinc-700 active:bg-zinc-600 px-4 gap-4">
      <Plus width={18} />
      <h4 className="text-[15px] mt-[1px]">Add New Text</h4>
    </div>
  );
};

export default CreateTodo;
