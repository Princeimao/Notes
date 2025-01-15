import { Plus } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import TodoForm from "./form/TodoForm";

const CreateTodo = () => {
  return (
    <Sheet className="bg-primary-200">
      <SheetTrigger asChild>
        <div className="w-full h-10 border border-zinc-600 rounded-sm flex items-center mt-1 hover:bg-zinc-700 active:bg-zinc-600 px-4 gap-4">
          <Plus width={18} />
          <h4 className="text-[15px] mt-[1px]">Add New Text</h4>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-white font-ubuntu font-semibold text-2xl">
            Task:
          </SheetTitle>
        </SheetHeader>

        <TodoForm />
      </SheetContent>
    </Sheet>
  );
};

export default CreateTodo;
