"use client";
import { useEffect, useState } from "react";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect, useParams } from "next/navigation";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type StoreSelectProps = {
    className?: string;
    stores: {
        id: string;
        name: string;
    }[];
};

export const StoreSelect = ({ className, stores }: StoreSelectProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const params = useParams();

    useEffect(() => {
        setValue(params.storeid as string);
    }, []);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? stores.find((store) => store.id === value)?.name
                        : "Select a Store"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search stores..." />
                    <CommandEmpty>No stores.</CommandEmpty>
                    <CommandGroup>
                        {stores.map((store) => (
                            <CommandItem
                                key={store.id}
                                onSelect={(storeValue) => {
                                    setValue(storeValue);
                                    setOpen(false);
                                }}
                            >
                               <Check 
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === store.id ? "opacity-100" : "opacity-0",
                                    )} />
                                    {store.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
