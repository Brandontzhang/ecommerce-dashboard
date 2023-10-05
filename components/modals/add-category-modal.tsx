"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "../ui/use-toast";
import { Modal } from "../ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useAddCategoryModal from "@/hooks/stores/useAddCategoryModal";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa";

const newCategoryFormSchema = z.object({
    name: z.string().min(1, "Name of category is required").max(100),
});

type AddCategoryModalProps = {
    userId: string;
    store: Store;
};

const AddCategoryModal = ({ userId, store }: AddCategoryModalProps) => {
    const { open, toggleOpen } = useAddCategoryModal();
    const router = useRouter();
    const { toast } = useToast();

    type NewCategorySchemaType = z.infer<typeof newCategoryFormSchema>;
    const form = useForm<NewCategorySchemaType>({
        resolver: zodResolver(newCategoryFormSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: NewCategorySchemaType) => {
        try {
            const { data: newCategory } = await axios.post(
                `/api/stores/${store.id}/categories`,
                {
                    name: values.name,
                    storeId: store.id, 
                },
            );

            toggleOpen();
            form.reset();
            router.refresh();
            toast({
                description: `New category ${newCategory.name} created`,
            });
        } catch (err: unknown) {
            let errorDescription: string = "";
            if (err instanceof AxiosError || err instanceof Error) {
                errorDescription = err.message;
            } else if (typeof err === "string") {
                errorDescription = err;
            } else {
                errorDescription =
                    "Unknown Error, please speak to the server administrator";
            }
            toast({
                variant: "destructive",
                description: errorDescription,
            });
        }
    };

    return (
        <Modal
            title="Create New Category"
            description="Add a new category for your store"
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
                                            placeholder="Category Name"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="float-right space-x-4 space-y-4">
                            <Button
                                variant="outline"
                                onClick={() => toggleOpen()}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">Create</Button>
                        </div>
                    </div>
                </form>
            </Form>
        </Modal>
    );
};

type ToggleAddCategoryModalButtonProps = {
    className?: string;
};
const ToggleAddCategoryModalButton = ({
    className,
}: ToggleAddCategoryModalButtonProps) => {
    const { toggleOpen } = useAddCategoryModal();

    return (
        <Button
            className={cn(className)}
            variant="secondary"
            size="sm"
            onClick={toggleOpen}
        >
           <FaPlus></FaPlus> 
        </Button>
    );
};

export { AddCategoryModal, ToggleAddCategoryModalButton };
