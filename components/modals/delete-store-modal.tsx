"use client";

import useConfirmDelete from "@/hooks/stores/useConfirmDeleteModal";
import { Modal } from "../ui/modal";
import { useAuth } from "@clerk/nextjs";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "../ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DeleteStoreModal = () => {
    const { store, open, toggleOpen } = useConfirmDelete();
    const auth = useAuth();
    const router = useRouter();

    const deleteStoreFormSchema = z.object({
        name: z.string().refine((val: string) => val === store?.name),
    });

    type DeleteStoreSchemaType = z.infer<typeof deleteStoreFormSchema>;
    const form = useForm<DeleteStoreSchemaType>({
        resolver: zodResolver(deleteStoreFormSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async () => {
        try {
            const token = await auth.getToken();

            const res = axios.delete(
                `http://localhost:3000/api/stores/${store?.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toggleOpen(undefined, false);
            router.refresh();
            toast({
                description: `Store ${store?.name} has been deleted`,
            });
        } catch (err) {
            let errorDescription: string = "";
            if (err instanceof AxiosError || err instanceof Error) {
                errorDescription = err.message;
            } else if (typeof err === "string") {
                errorDescription = err;
            } else {
                errorDescription =
                    "Unknown Error, please speak to the server administator";
            }
            toast({
                variant: "destructive",
                description: errorDescription,
            });
        }
    };

    const { isValid } = form.formState;

    return (
        <Modal
            title="Delete store?"
            description=""
            open={open}
            toggleOpen={toggleOpen}
        >
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{`To confirm deletion, type "${store?.name}" in the box below`}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Store Name"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <Button
                            variant="destructive"
                            disabled={!isValid}
                            className="w-full"
                        >
                            Delete Store
                        </Button>
                    </div>
                </form>
            </Form>
        </Modal>
    );
};

export default DeleteStoreModal;
