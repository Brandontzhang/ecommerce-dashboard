"use client";

import React from "react";
import { Modal } from "../ui/modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useNewStoreModal from "@/hooks/stores/useNewStoreModal";

const newStoreFormSchema = z.object({
    name: z.string().min(1, "Name of store is required").max(100),
});

export const AddStoreModal = () => {
    const {open, toggleOpen} = useNewStoreModal();

    type NewStoreSchemaType = z.infer<typeof newStoreFormSchema>;
    const form = useForm<NewStoreSchemaType>({
        resolver: zodResolver(newStoreFormSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: NewStoreSchemaType) => {
        console.log(values);
    };

    return (
        <Modal
            title="Create New Store"
            description="Add a new store to manage products and categories"
            open={open}
            toggleOpen={toggleOpen}
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Store Name"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="space-x-4 float-right">
                            <Button variant="outline" onClick={toggleOpen}>
                                Cancel
                            </Button>
                            <Button type="submit">Continue</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </Modal>
    );
};
