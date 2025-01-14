import CreateTodo from "../../components/shared/CreateTodo";
import Todo from "../../components/shared/Todo";

const Today = () => {
  return (
    <div className="px-20 md:py-5 w-full min-h-screen bg-primary-100 text-white font-[ubuntu]">
      <div className="w-full h-[100%]">
        <h1 className="text-4xl font-bold">Upcoming</h1>

        <div className="border border-zinc-600 rounded-lg w-full h-80 mt-5 px-3 py-2">
          <div className="w-full">
            <h1 className="text-2xl font-bold">Today</h1>
            <CreateTodo />

            <Todo />
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
