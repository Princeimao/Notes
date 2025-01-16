import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useCreateList } from "../../../hooks/useList";
import { listSchema } from "../../../validation";
import { useState } from "react";
import { cn } from "../../../lib/utils";

const colorOptions = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-gray-500",
];

const ListForm = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const { mutateAsync: createList, isPending: isLoading } = useCreateList();

  const form = useForm({
    resolver: zodResolver(listSchema),
    defaultValues: {
      title: "",
      color: selectedColor,
    },
  });

  async function onSubmit(value) {
    console.log(value);
    const response = await createList(value);
    console.log(response);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-4">
                <div className={cn("h-4 w-4 rounded-md ", selectedColor)} />

                <FormControl>
                  <Input
                    className="border-none bg-transparent text-white w-full"
                    placeholder="Title"
                    name="title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="px-1">Choose Color</FormLabel>

              <div className="flex justify-between items-center w-full px-1">
                {colorOptions.map((color, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-4 w-4 rounded-md cursor-pointer",
                      color,
                      "hover:ring-2 hover:ring-offset-2 hover:ring-black"
                    )}
                    onClick={() => {
                      setSelectedColor(color);
                      field.onChange(color);
                    }}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full">
          Create List
        </Button>
      </form>
    </Form>
  );
};

export default ListForm;
