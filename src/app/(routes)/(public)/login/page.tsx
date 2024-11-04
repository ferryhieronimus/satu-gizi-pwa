"use client";

import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/atoms/form";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Typography } from "@/components/atoms/typography";

export default function Login() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const formSchema = z.object({
    email: z.string().email({
      message: "Email tidak valid",
    }),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "email@email.com",
      password: "password",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setSubmitting(true);
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      if (res && res.ok) {
        window.location.href = "/";
      } else if (res && res.error === "CredentialsSignin") {
        toast({
          title: "Login Gagal!",
          description: "Email atau password salah. Silakan coba lagi.",
          duration: 8000,
        });
      } else {
        toast({
          title: "Login Gagal!",
          description: "Terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.",
          duration: 8000,
        });
      }
    } catch (error) {
      toast({
        title: "Login Gagal!",
        description: "Terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.",
        duration: 8000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full flex-col justify-between gap-4 p-6">
        <img src="/logo.svg" alt="logo" className="mx-auto h-36 w-36" />

        <Typography variant="h6" className="text-secondary-normal mt-8 text-center">
          Yuk, Masuk!
        </Typography>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel required>Password</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={submitting} className="mt-auto h-14 w-full rounded-2xl">
          {submitting ? "Loading..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
