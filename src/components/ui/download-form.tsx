"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const formSchema = z.object({
  targetDevice: z.enum(["iphone", "android"]),
  size: z.enum(["2x", "1x"]),
  stickerUrl: z.string().url({ message: "Must enter a valid URL." }),
});

export function DownloadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetDevice: "iphone",
      size: "2x",
      stickerUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const targetDevice = form.watch("targetDevice");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full items-center space-y-6"
      >
        <div className="flex w-full max-w-lg justify-around">
          <FormField
            control={form.control}
            name="targetDevice"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Target device</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="iphone" />
                      </FormControl>
                      <FormLabel className="font-normal">iPhone</FormLabel>
                    </FormItem>
                    
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="android" />
                      </FormControl>
                      <FormLabel className="font-normal">Android</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Size</FormLabel>
                <FormControl>
                  <RadioGroup
                    disabled={targetDevice === "android"}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="1x" />
                      </FormControl>
                      <FormLabel className="font-normal">1x</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="2x" />
                      </FormControl>
                      <FormLabel className="font-normal">2x</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full max-w-lg space-x-2">
          <FormField
            control={form.control}
            name="stickerUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Sticker URL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Download</Button>
        </div>
      </form>
    </Form>
  );
}
