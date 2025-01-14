import { ScrollArea } from "@/components/ui/scroll-area";
import CreateTodo from "../../components/shared/CreateTodo";
import Todo from "../../components/shared/Todo";

const Upcoming = () => {
  return (
    <div className="px-20 md:py-5 w-full min-h-screen bg-primary-100 text-white font-[ubuntu]">
      <div className="w-full h-[100%]">
        <h1 className="text-4xl font-bold">Upcoming</h1>

        <div className="border border-zinc-600 rounded-lg w-full h-80 mt-5 px-3 py-2">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Today</h1>
            <CreateTodo />
            <ScrollArea className="h-[28vh] w-full">
              <Todo />
              <Todo />
            </ScrollArea>
          </div>
        </div>

        <div className="w-full h-full mt-5 lg:flex md:block justify-between gap-5">
          <div className="border border-zinc-600 rounded-lg w-full h-80 px-3 py-2">
            <h1 className="text-2xl font-bold">Tomorrow</h1>
            <CreateTodo />
            <ScrollArea className="h-[28vh] w-full">
              <Todo />
              <Todo />
            </ScrollArea>
          </div>

          <div className="border border-zinc-600 rounded-lg w-full h-80 px-3 py-2">
            <h1 className="text-2xl font-bold">This Week</h1>
            <CreateTodo />
            <ScrollArea className="h-[28vh] w-full">
              <Todo />
              <Todo />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
