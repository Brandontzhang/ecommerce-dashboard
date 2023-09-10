"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Modal } from "../ui/modal";
import { useStoreModalContext } from "@/context/useStoreModalContext";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name of store must be at least 1 character",
    }),
});

export const StoreModal = () => {
    const { isOpen, setIsOpen } = useStoreModalContext();
    const closeDialog = () => {
        setIsOpen(false);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("Submit request to create form");
    };

    return (
        <Modal
            title={"Create Store"}
            description={"Add a new store to manage products and categories"}
            isOpen={isOpen}
            onClose={closeDialog}
        >
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Store Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                    <div className="float-right space-x-2">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </div>
               </form>
            </Form>
        </Modal>
    );
};
