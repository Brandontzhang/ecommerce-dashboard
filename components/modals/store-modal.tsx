"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Modal } from "../ui/modal";
import { useStoreModalContext } from "@/context/useStoreModalContext";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name of store must be at least 1 character",
    }),
});

export const StoreModal = () => {
    const [isLoading, setIsLoading] = useState(false);
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
        try {
            setIsLoading(true);
            // const response = await axios.post('/api/stores', values);
            toast.success("Store created");
        } catch (err) {
            if (typeof err === "string") {
                toast.error(err);
            } else {
                toast.error(
                    "Store creation failed, please contact your DB admin",
                );
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            title={"Create Store"}
            description={"Add a new store to manage products and categories"}
            isOpen={isOpen}
            onClose={closeDialog}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 py-4"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder="Store Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="float-right space-x-2">
                        <Button
                            disabled={isLoading}
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button disabled={isLoading} type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </Modal>
    );
};
