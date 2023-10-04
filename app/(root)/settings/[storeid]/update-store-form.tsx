"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import useSearchBox from "@/hooks/stores/useSearchBox";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const updateStoreFormSchema = z.object({
    name: z.string().min(1, "Name of store is required").max(100),
});

type UpdateStoreFormProps = {
    store: Store;
    className?: string;
};

export const UpdateStoreForm = ({ store, className }: UpdateStoreFormProps) => {
    const { toast } = useToast();
    const router = useRouter();
    const { setValue: setSearchBarValue } = useSearchBox();

    type UpdateStoreSchemaType = z.infer<typeof updateStoreFormSchema>;
    const form = useForm<UpdateStoreSchemaType>({
        resolver: zodResolver(updateStoreFormSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: UpdateStoreSchemaType) => {
        try {
            const { data: updatedStore } = await axios.put(
                `/api/stores/${store.id}`,
                {
                    name: values.name,
                },
            );

            setSearchBarValue(updatedStore.name.toLowerCase());
            form.reset();
            router.refresh();
            toast({
                description: `Store updated to ${updatedStore.name}`,
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
        <div className={cn(className)}>
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
                                            placeholder={store.name}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
