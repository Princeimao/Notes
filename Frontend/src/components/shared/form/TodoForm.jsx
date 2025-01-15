import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "../../ui/scroll-area";
import { todoSchema } from "../../../validation/index";
import { useState } from "react";
import Todo from "../Todo";
import CreateTodo from "../CreateTodo";
import { useGetList } from "../../../hooks/useList";

const TodoForm = () => {
  const [date, setDate] = useState("");
  const [list, setList] = useState("");
  const { data: lists, isPending: isLoading } = useGetList();

  const form = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values) {
    console.log(values, date, list);
  }

  return (
    <Sheet>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-zinc-500 hover:bg-zinc-700 px-4 py-5 placeholder:text-gray"
                    placeholder="Todo"
                    name="title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="border border-zinc-500 hover:bg-zinc-700 h-32 px-4 resize-none placeholder:text-gray"
                    placeholder="Description"
                    name="description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center w-full justify-between">
            <h1 className="text-sm font-medium tracking-wide">List:</h1>

            <Select onValueChange={(e) => setList(e)}>
              <SelectTrigger className="w-[175px] border-zinc-500 hover:bg-zinc-700 focus:outline-none">
                <SelectValue placeholder="List" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Lists</SelectLabel>
                  {lists?.length !== 0
                    ? lists?.map((list) => (
                        <SelectItem key={list._id} value={list._id}>
                          {list.list}
                        </SelectItem>
                      ))
                    : "no List items"}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center w-full justify-between">
            <h1 className="text-sm font-medium tracking-wide">Date:</h1>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className={cn(
                    "w-[175px] justify-start text-left font-normal bg-transparent border border-zinc-500 hover:bg-zinc-700",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="text-white" />
                  {date ? (
                    format(date, "d MMM yyyy")
                  ) : (
                    <span className="text-white">Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* <h1 className="text-xl font-bold">Subtodo</h1>
          <div className="border border-zinc-600 rounded-lg w-full h-72 px-3 py-2">
            <div className="w-full">
              <CreateTodo />
              <ScrollArea className="h-[28vh] w-full">
                <Todo />
              </ScrollArea>
            </div>
          </div> */}
          <SheetFooter>
            <SheetClose>
              <Button
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                type="submit"
              >
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </Form>
    </Sheet>
  );
};

export default TodoForm;
