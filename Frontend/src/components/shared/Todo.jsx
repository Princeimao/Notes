import { Calendar } from "lucide-react";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TodoForm from "./form/TodoForm";
import { timeConverter } from "../../lib/utils";

const Todo = ({ title, description, complete, subtodo, id, list, dueDate }) => {
  const [isCompleted, setIsCompleted] = useState(complete);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className={`w-full min-h-10 border border-zinc-600 rounded-sm flex flex-col py-2 mt-2 hover:bg-zinc-700 active:bg-zinc-600 px-4 ${
            isCompleted ? "bg-zinc-700 text-grey" : null
          }`}
        >
          <div className="w-full flex gap-4">
            <input
              className="mt-[1px]"
              type="checkbox"
              name="todo"
              id=""
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
            />
            <h4 className="text-[15px] mt-[1px]">{title}</h4>
          </div>

          {subtodo && list && dueDate ? (
            <div className="ml-7 w-full h-6 flex items-center gap-3">
              {dueDate ? (
                <div className="flex text-sm items-center gap-2">
                  <Calendar width={14} />
                  <p className=" font-medium">{timeConverter(dueDate)}</p>
                </div>
              ) : null}

              <div className="border w-[1px] h-4 border-zinc-600" />

              <div className="flex text-sm items-center gap-2">
                <div className="w-4 h-4 bg-zinc-400 rounded flex justify-center items-center">
                  <p className="text-[10px] font-medium">6</p>
                </div>
                <p className="font-medium">Subtasks</p>
              </div>

              {list && <div className="border w-[1px] h-4 border-zinc-600" />}

              {list.length !== 0 ? (
                <div className="flex text-sm items-center gap-2">
                  <div className="w-4 h-4 bg-zinc-400 rounded flex justify-center items-center" />
                  <p className="font-medium">List Name</p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </SheetTrigger>
      <SheetContent>
        <TodoForm
          title={title}
          description={description}
          complete={complete}
          subtodo={subtodo}
          id={id}
          list={list}
          dueDate={dueDate}
          action="update"
        />
      </SheetContent>
    </Sheet>
  );
};

export default Todo;
