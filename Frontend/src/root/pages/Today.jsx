import { Loader } from "lucide-react";
import CreateTodo from "../../components/shared/CreateTodo";
import Todo from "../../components/shared/Todo";
import { useGetTodo } from "../../hooks/useTodo";

const Today = () => {
  const { data: Todos, isPending: isLoading } = useGetTodo();

  if (isLoading) {
    return (
      <main className="bg-primary-100 h-screen w-full text-white flex justify-center items-center">
        <Loader />
      </main>
    );
  }

  return (
    <div className="px-20 md:py-5 w-full min-h-screen bg-primary-100 text-white font-[ubuntu]">
      <div className="w-full h-[100%]">
        <h1 className="text-4xl font-bold">Today</h1>

        <div className="border border-zinc-600 rounded-lg w-full min-h-80 mt-5 px-3 py-2">
          <div className="w-full">
            <CreateTodo />

            {Todos.length !== 0 ? (
              Todos.map((todo) => (
                <Todo
                  key={todo._id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.isCompleted}
                  subtodo={todo.subtodo}
                  id={todo._id}
                  list={todo.list || []}
                  dueDate={todo.dueDate}
                />
              ))
            ) : (
              <p className="text-grey text-sm mt-3 p-2">
                No Todos, Please create a todo
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
