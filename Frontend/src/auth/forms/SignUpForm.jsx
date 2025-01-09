"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpFormSchema } from "../../validation";
import { useRegisterUser } from "../../hooks/useAuth";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import { register } from "../../context/features/userSlice";
//import { useToast } from "../../hooks/use-toast";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutateAsync: registerUser, isPending: isCreatingUser } =
    useRegisterUser();

  const form = useForm({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await registerUser(values);
      dispatch(register(response.user));
      localStorage.setItem("token", response.user.token);
      navigate("/");
    } catch (error) {
      console.log("something went wrong while creating user", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[60%] h-screen flex flex-col justify-center items-center">
        <img
          className="w-[200px] mb-10"
          src="/Login_Page_Logo_white.png"
          alt=""
        />
        <div className="w-[40vh]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-white"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-[2px] py-[2.6vh] rounded-lg outline-none "
                        placeholder="Name"
                        type="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-[2px] py-[2.6vh] rounded-lg outline-none "
                        placeholder="Email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-[2px] py-[2.6vh] rounded-lg  outline-none "
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                type="submit"
              >
                {isCreatingUser ? <Loader /> : "submit"}
              </Button>
            </form>
          </Form>
          <hr className="mt-6" />
          <p className="text-grey text-center font-ubuntu mt-3">
            {" "}
            Already have an account ?{" "}
            <Link
              to={"/signin"}
              className="text-blue-500 hover:text-blue-600 active:text-blue-700"
            >
              Sign In
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
