'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { formSchema } from "@/lib/schemas"
import { send } from "@/lib/email"

// const formSchema = z.object({
//   username: z.string().min(2, { message: "Username must be at least 2 characters" }).max(50, { message: "Username must be at most 50 characters" }),
//   email: z.string().email({ message: "Invalid email address" }),
//   message: z.string().min(2, { message: "Message must be at least 2 characters" }),
// });

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  });

 const onSubmit = async (values) => {
  const { firstName, email, message } = values;

  const result = await send({ firstName, email, message });

  if (result.error) {
    console.error("Error sending email:", result.error);
  } else {
    console.log("Email sent successfully");
  }
};

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 py-6">
      <Card
        className="w-full max-w-md"
        style={{
          background: "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(13, 13, 97, 1) 35%, rgba(3, 7, 18, 1) 100%)"
        }}
      >
        <CardHeader>
          <CardTitle className="font-bold text-blue-200 text-3xl text-center">Contact Me</CardTitle>
          <CardDescription className="text-amber-50 text-center">
            If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-amber-50">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="!placeholder-gray-400 text-black bg-[#1F1775]"
                        placeholder="Enter your full name"
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
                    <FormLabel className="text-amber-50">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="!placeholder-gray-400 text-black bg-[#1F1775]"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-amber-50">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[120px] !placeholder-gray-400 text-black bg-[#1F1775]"
                        placeholder="Enter your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="w-44 bg-gradient-to-r from-violet-600 to-pink-500 p-[1.5px] rounded-b-sm hover:from-pink-500 hover:to-violet-600 transition-all duration-300"
                >
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
