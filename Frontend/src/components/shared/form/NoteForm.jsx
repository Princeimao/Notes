import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { noteSchema } from "../../../validation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateNotes } from "../../../hooks/useNotes";

const NoteForm = ({ notes }) => {
  const { mutateAsync: createNote, isPending: isLoading } = useCreateNotes();

  const form = useForm({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: notes ? notes.title : "",
      description: notes ? notes.description : "",
    },
  });

  async function onSubmit(values) {
    const response = await createNote(values);
    console.log(response);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-none bg-transparent text-white w-full"
                  placeholder="Title"
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
                  className="border-none bg-transparent resize-none text-white focus:outline-none shadow-none w-full custom-scrollbar h-60"
                  placeholder="Desctiption"
                  name="description"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default NoteForm;
